import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Send, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { MAIN_PRODUCTS, type ContactFormData } from '../data/contact.ts';
import { getProductDetail } from '../data/productDetails.ts';
import {
  getSelectedOptionLabel,
  submitContactEnquiry,
  type ContactEnquiryStatus,
} from '../utils/contactEnquiry.ts';
import type { EnquiryTagPrefill } from './EnquiryTagsCarousel.tsx';

const SESSION_KEY = 'rk-global-lead-popup-submitted';
const POPUP_INTERVAL_MS = 20_000;
const WHATSAPP_NUMBER = '918422044453';
const WHATSAPP_MESSAGE = 'Hello, I would like to discuss a requirement with RK Engineering.';
const fieldClasses =
  'mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/15';

const emptyForm: ContactFormData = {
  name: '',
  companyName: '',
  mobile: '',
  email: '',
  country: '',
  product: '',
  quantity: '',
  enquiryType: '',
  shippingTerms: '',
  message: '',
};

const productForPath = (pathname: string): string => {
  if (pathname.startsWith('/products/')) {
    const detail = getProductDetail(pathname.split('/').filter(Boolean).pop());
    if (detail?.group === 'cable') return 'Cable Trays & Ducts';
    if (detail?.group === 'towers') {
      return 'Towers & Power Infrastructure';
    }
    if (detail?.group === 'solar') return 'Solar Mounting Structures';
    if (detail?.group === 'earthing') return 'Earthing Materials';
    if (detail?.group === 'galvanized') return 'Hot-Dip Galvanized Products';
  }
  if (pathname.includes('transmission-tower') || pathname.includes('tower')) return 'Towers & Power Infrastructure';
  if (pathname.includes('solar')) return 'Solar Mounting Structures';
  if (pathname.includes('substation')) return 'Towers & Power Infrastructure';
  if (pathname.includes('earthing')) return 'Earthing Materials';
  if (pathname.includes('galvaniz')) return 'Hot-Dip Galvanized Products';
  if (pathname.includes('cable-tray')) return 'Cable Trays & Ducts';
  return '';
};

const hasSubmittedThisSession = (): boolean => {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch (error) {
    console.warn('Unable to read lead popup session state.', error);
    return false;
  }
};

const markSubmittedThisSession = () => {
  try {
    window.sessionStorage.setItem(SESSION_KEY, 'true');
  } catch (error) {
    console.warn('Unable to save lead popup session state.', error);
  }
};

interface ContactPopupProps {
  request?: EnquiryTagPrefill & { id: number };
}

export const ContactPopup: React.FC<ContactPopupProps> = ({ request }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactEnquiryStatus | null>(null);
  const submissionInProgress = useRef(false);
  const popupTimerRef = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const product = productForPath(location.pathname);

  const scheduleNextPopup = useCallback(() => {
    if (popupTimerRef.current !== null || hasSubmittedThisSession()) return;
    popupTimerRef.current = window.setTimeout(() => {
      popupTimerRef.current = null;
      if (!hasSubmittedThisSession()) setIsOpen(true);
    }, POPUP_INTERVAL_MS);
  }, []);

  useEffect(() => {
    scheduleNextPopup();
    return () => {
      if (popupTimerRef.current !== null) {
        window.clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
    };
  }, [scheduleNextPopup]);

  useEffect(() => {
    setFormData((current) => ({ ...current, product: current.product || product }));
  }, [product]);

  useEffect(() => {
    if (!request) return;
    setFormData((current) => ({
      ...current,
      enquiryType: request.enquiryType ?? '',
      shippingTerms: request.shippingTerms ?? '',
      message: request.message ?? '',
    }));
    setStatus(null);
    setIsOpen(true);
    if (popupTimerRef.current !== null) {
      window.clearTimeout(popupTimerRef.current);
      popupTimerRef.current = null;
    }
    if (request.focusMessage) {
      window.requestAnimationFrame(() => document.getElementById('popup-message')?.focus());
    }
  }, [request]);

  useEffect(() => {
    const handleLeadPopupRequest = (event: Event) => {
      const detail = (event as CustomEvent<EnquiryTagPrefill & { productName?: string }>).detail;
      setFormData((current) => ({
        ...current,
        enquiryType: detail.enquiryType ?? '',
        shippingTerms: detail.shippingTerms ?? '',
        message: detail.message ?? (detail.productName ? `Product of interest: ${detail.productName}` : ''),
      }));
      setStatus(null);
      setIsOpen(true);
      if (popupTimerRef.current !== null) {
        window.clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
      if (detail.focusMessage) {
        window.requestAnimationFrame(() => document.getElementById('popup-message')?.focus());
      }
    };
    window.addEventListener('rk:open-lead-popup', handleLeadPopupRequest);
    return () => window.removeEventListener('rk:open-lead-popup', handleLeadPopupRequest);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    scheduleNextPopup();
  };

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'product'
        ? {
            quantity: value ? current.quantity || '500' : '',
            cableTrayType: value === 'Cable Trays & Ducts' ? current.cableTrayType ?? '' : '',
          }
        : {}),
    }));
    setStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionInProgress.current) return;
    submissionInProgress.current = true;
    setIsSubmitting(true);
    setStatus(null);
    try {
      const form = event.currentTarget;
      const result = await submitContactEnquiry(
        {
          ...formData,
          sourcePage: window.location.href,
          sourceTitle: document.title,
        },
        {
          product: getSelectedOptionLabel(form, 'product'),
          cableTrayType: getSelectedOptionLabel(form, 'cableTrayType'),
          enquiryType: getSelectedOptionLabel(form, 'enquiryType'),
        },
      );
      setStatus({
        ...result,
        message:
          result.type === 'success'
            ? 'Thank you for your enquiry! Your request has been submitted successfully. Our team will contact you within 24 hours.'
            : result.message,
      });
      if (result.type === 'success') {
        markSubmittedThisSession();
        if (popupTimerRef.current !== null) {
          window.clearTimeout(popupTimerRef.current);
          popupTimerRef.current = null;
        }
        setFormData(emptyForm);
      }
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (popupTimerRef.current !== null) {
            window.clearTimeout(popupTimerRef.current);
            popupTimerRef.current = null;
          }
          setIsOpen(true);
          setStatus(null);
        }}
        className="fixed bottom-5 left-5 z-40 inline-flex min-h-11 items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
      >
        <span>Get Instant Quote</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </button>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RK Engineering on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="my-auto w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 bg-blue-950 px-5 py-5 text-white sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">RK Engineering &amp; Galvanizers</p>
                <h2 id="contact-popup-title" className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
                  Get an Instant Quote Within 24 Hours
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-blue-100">
                  Tell us your product requirements. Our team will review your enquiry and get back to you within 24 hours.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePopup}
                aria-label="Close quote form"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 p-5 sm:p-7">
              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label htmlFor="popup-name" className="text-sm font-bold text-slate-800">Name <span className="text-red-600">*</span></label>
                  <input id="popup-name" name="name" required minLength={2} maxLength={100} autoComplete="name" value={formData.name} onChange={updateField} placeholder="Enter your name" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-company" className="text-sm font-bold text-slate-800">Company Name</label>
                  <input id="popup-company" name="companyName" type="text" autoComplete="organization" maxLength={150} value={formData.companyName ?? ''} onChange={updateField} placeholder="Enter your company name" className={fieldClasses} />
                </div>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label htmlFor="popup-mobile" className="text-sm font-bold text-slate-800">Mobile Number <span className="text-red-600">*</span></label>
                  <input id="popup-mobile" name="mobile" type="tel" autoComplete="tel-national" inputMode="numeric" required pattern="[0-9]{10}" minLength={10} maxLength={10} title="Enter a 10-digit mobile number." value={formData.mobile} onChange={updateField} placeholder="Enter 10-digit mobile number" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-email" className="text-sm font-bold text-slate-800">Email <span className="text-red-600">*</span></label>
                  <input id="popup-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={updateField} placeholder="Enter your email" className={fieldClasses} />
                </div>
              </div>
              <div className="grid items-start gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="popup-country" className="text-sm font-bold text-slate-800">Destination Country</label>
                  <input id="popup-country" name="country" type="text" autoComplete="country-name" maxLength={100} value={formData.country} onChange={updateField} placeholder="Enter your destination country" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-product" className="text-sm font-bold text-slate-800">Products <span className="text-red-600">*</span></label>
                  <select id="popup-product" name="product" required value={formData.product} onChange={updateField} className={`${fieldClasses} cursor-pointer`}>
                    <option value="">--- Select Choice ---</option>
                    {MAIN_PRODUCTS.map((option) => <option key={option.id} value={option.name}>{option.name}</option>)}
                  </select>
                </div>
                {formData.product === 'Cable Trays & Ducts' && (
                  <div>
                    <label htmlFor="popup-cable-tray-type" className="text-sm font-bold text-slate-800">Cable Tray Type <span className="text-red-600">*</span></label>
                    <select id="popup-cable-tray-type" name="cableTrayType" required value={formData.cableTrayType ?? ''} onChange={updateField} className={`${fieldClasses} cursor-pointer`}>
                      <option value="">--- Select Cable Tray Type ---</option>
                      <option value="Perforated Cable Tray">Perforated Cable Tray</option>
                      <option value="Ladder Type Cable Tray">Ladder Type Cable Tray</option>
                      <option value="Raceway Cable Tray">Raceway Cable Tray</option>
                      <option value="Cable Tray Duct">Cable Tray Duct</option>
                      <option value="Not sure / Other">Not sure / Other</option>
                    </select>
                  </div>
                )}
                <div>
                  <label htmlFor="popup-enquiry-type" className="text-sm font-bold text-slate-800">Enquiry Type</label>
                  <select id="popup-enquiry-type" name="enquiryType" value={formData.enquiryType ?? ''} onChange={updateField} className={`${fieldClasses} cursor-pointer`}>
                    <option value="">--- Select Enquiry Type ---</option>
                    <option value="Oil and Gas Project Enquiry">Oil and Gas Project</option>
                    <option value="Power and Energy Project Enquiry">Power and Energy Project</option>
                    <option value="US Industrial Manufacturing Enquiry">US Industrial Manufacturing</option>
                    <option value="US Export / Import Enquiry">US Export / Import</option>
                    <option value="US Galvanized Cable Tray Enquiry">US Galvanized Cable Tray</option>
                    <option value="African Export Enquiry">African Export</option>
                    <option value="Export Enquiry">Export</option>
                    <option value="Project Enquiry">Project Enquiry</option>
                    <option value="Bulk Order Enquiry">Bulk Order</option>
                    <option value="Product Pricing Enquiry">Product Pricing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="popup-shipping-terms" className="text-sm font-bold text-slate-800">Shipping Preference</label>
                  <select id="popup-shipping-terms" name="shippingTerms" value={formData.shippingTerms ?? ''} onChange={updateField} className={`${fieldClasses} cursor-pointer`}>
                    <option value="">--- Select Shipping Preference ---</option>
                    <option value="CIF">CIF Nhava Sheva</option>
                    <option value="FOB">FOB Nhava Sheva</option>
                  </select>
                </div>
                {formData.product && (
                  <div>
                    <label htmlFor="popup-quantity" className="text-sm font-bold text-slate-800">Quantity (m) <span className="text-red-600">*</span></label>
                    <input id="popup-quantity" name="quantity" type="number" inputMode="numeric" required min={500} step={1} value={formData.quantity} onChange={updateField} onKeyDown={(event) => { if (['-', '+', 'e', 'E', '.'].includes(event.key)) event.preventDefault(); }} onBlur={(event) => { if (!Number.isFinite(Number(event.currentTarget.value)) || Number(event.currentTarget.value) < 500) setFormData((current) => ({ ...current, quantity: '500' })); }} placeholder="Minimum 500 m" className={fieldClasses} />
                    <p className="mt-1 text-xs text-slate-500">Minimum quantity: 500 m</p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="popup-message" className="text-sm font-bold text-slate-800">Message</label>
                <textarea id="popup-message" name="message" rows={4} maxLength={5000} value={formData.message} onChange={updateField} placeholder="Share dimensions, material or coating requirements, destination details, and project specifications or drawings." className={fieldClasses} />
              </div>

              {status && (
                <p role={status.type === 'error' ? 'alert' : 'status'} className={`rounded-md border px-3 py-3 text-sm ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'}`}>
                  {status.message}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 disabled:cursor-wait disabled:opacity-60">
                {isSubmitting ? 'Sending…' : 'Send'}
                {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};
