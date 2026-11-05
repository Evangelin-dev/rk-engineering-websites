import React, { useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';
import { MAIN_PRODUCTS, type ContactFormData } from '../data/contact.ts';
import {
  getSelectedOptionLabel,
  submitContactEnquiry,
  type ContactEnquiryStatus,
} from '../utils/contactEnquiry.ts';

const DISMISSED_KEY = 'rk-contact-popup-dismissed';
const fieldClasses =
  'mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/15';

const WHATSAPP_NUMBER = '918422044453';
const WHATSAPP_MESSAGE = 'Hello, I would like to discuss a requirement with RK Engineering.';

const WHATSAPP_ANIMATION_CSS = `
  @keyframes rk-wa-bounce {
    0%, 40%, 100% { transform: translateY(0); }
    8%  { transform: translateY(-16px); }
    16% { transform: translateY(0); }
    24% { transform: translateY(-8px); }
    32% { transform: translateY(0); }
  }
  @keyframes rk-wa-ring {
    0%   { transform: scale(1);   opacity: 0.55; }
    100% { transform: scale(2.1); opacity: 0; }
  }
  .rk-wa-bounce { animation: rk-wa-bounce 3.6s ease-in-out infinite; }
  .rk-wa-bounce:hover,
  .rk-wa-bounce:focus-visible { animation-play-state: paused; }
  .rk-wa-ring { animation: rk-wa-ring 2.4s ease-out infinite; }
  .rk-wa-ring-delay { animation-delay: 1.2s; }
  @media (prefers-reduced-motion: reduce) {
    .rk-wa-bounce, .rk-wa-ring { animation: none; }
    .rk-wa-ring { display: none; }
  }
`;

const emptyForm: ContactFormData = {
  name: '',
  mobile: '',
  email: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
};

export const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactEnquiryStatus | null>(null);
  const submissionInProgress = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISSED_KEY) === 'true') return;
    } catch (error) {
      console.warn('Unable to read contact popup dismissal preference.', error);
    }

    const timer = window.setTimeout(() => setIsOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const dismiss = () => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(DISMISSED_KEY, 'true');
    } catch (error) {
      console.warn('Unable to save contact popup dismissal preference.', error);
    }
  };

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'product' ? { quantity: value ? '500' : '' } : {}),
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
      const result = await submitContactEnquiry(formData, {
        product: getSelectedOptionLabel(event.currentTarget, 'product'),
      });
      setStatus(result);
      if (result.type === 'success') setFormData(emptyForm);
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{WHATSAPP_ANIMATION_CSS}</style>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RK Engineering on WhatsApp"
        title="Chat with us on WhatsApp"
        className="rk-wa-bounce group fixed bottom-5 right-5 z-40 flex flex-row-reverse items-center focus-visible:outline-none"
      >
        {/* Round button */}
        <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center">
          {/* Pulse rings */}
          <span aria-hidden="true" className="rk-wa-ring absolute inset-0 rounded-full bg-[#25D366]" />
          <span aria-hidden="true" className="rk-wa-ring rk-wa-ring-delay absolute inset-0 rounded-full bg-[#25D366]" />

          {/* Main circle */}
          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2BE477] via-[#25D366] to-[#128C7E] text-white shadow-[0_8px_20px_rgba(18,140,126,0.45)] ring-2 ring-white transition-transform duration-200 group-hover:scale-110 group-active:scale-95 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-[#128C7E] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </span>
        </span>

        {/* Slide-out label */}
        <span
          aria-hidden="true"
          className="pointer-events-none mr-3 max-w-0 translate-x-2 overflow-hidden whitespace-nowrap rounded-full bg-blue-950 py-0 pl-0 pr-0 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-[12rem] group-hover:translate-x-0 group-hover:px-4 group-hover:py-2 group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:translate-x-0 group-focus-visible:px-4 group-focus-visible:py-2 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          Chat on WhatsApp
        </span>
        <span className="sr-only">WhatsApp</span>
      </a>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) dismiss();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="my-auto w-full max-w-xl rounded-xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">RK Engineering &amp; Galvanizers</p>
                <h2 id="contact-popup-title" className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
                  Discuss Your Requirement
                </h2>
                <p className="mt-1 text-sm text-slate-600">Share your details and product requirement with our team.</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={dismiss}
                aria-label="Close enquiry form"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-800"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="popup-name" className="text-sm font-semibold text-slate-800">Name <span className="text-red-600">*</span></label>
                  <input id="popup-name" name="name" required minLength={2} maxLength={100} autoComplete="name" value={formData.name} onChange={updateField} placeholder="Enter your name" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-mobile" className="text-sm font-semibold text-slate-800">Mobile Number <span className="text-red-600">*</span></label>
                  <input id="popup-mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" required pattern="[0-9]{10}" minLength={10} maxLength={10} title="Enter a 10-digit mobile number." value={formData.mobile} onChange={updateField} placeholder="10-digit mobile number" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-email" className="text-sm font-semibold text-slate-800">Email <span className="text-red-600">*</span></label>
                  <input id="popup-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={updateField} placeholder="Enter your email" className={fieldClasses} />
                </div>
                <div>
                  <label htmlFor="popup-country" className="text-sm font-semibold text-slate-800">Country</label>
                  <input id="popup-country" name="country" autoComplete="country-name" maxLength={100} value={formData.country} onChange={updateField} placeholder="Enter your country" className={fieldClasses} />
                </div>
              </div>

              <div className="grid items-start gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="popup-product" className="text-sm font-semibold text-slate-800">Product <span className="text-red-600">*</span></label>
                  <select id="popup-product" name="product" required value={formData.product} onChange={updateField} className={`${fieldClasses} cursor-pointer`}>
                    <option value="">--- Select Choice ---</option>
                    {MAIN_PRODUCTS.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}
                  </select>
                </div>
                {formData.product && (
                  <div>
                    <label htmlFor="popup-quantity" className="text-sm font-semibold text-slate-800">Quantity (m) <span className="text-red-600">*</span></label>
                    <input
                      id="popup-quantity"
                      name="quantity"
                      type="number"
                      inputMode="numeric"
                      required
                      min={500}
                      step={1}
                      value={formData.quantity}
                      onChange={updateField}
                      onKeyDown={(event) => {
                        if (['-', '+', 'e', 'E', '.'].includes(event.key)) event.preventDefault();
                      }}
                      onBlur={(event) => {
                        if (!Number.isFinite(Number(event.currentTarget.value)) || Number(event.currentTarget.value) < 500) {
                          setFormData((current) => ({ ...current, quantity: '500' }));
                        }
                      }}
                      className={fieldClasses}
                    />
                    <p className="mt-1 text-xs text-slate-500">Minimum: 500 m</p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="popup-message" className="text-sm font-semibold text-slate-800">Message</label>
                <textarea id="popup-message" name="message" rows={3} maxLength={5000} value={formData.message} onChange={updateField} placeholder="Enter project details or a message" className={fieldClasses} />
              </div>

              {status && (
                <p role={status.type === 'error' ? 'alert' : 'status'} className={`rounded-md border px-3 py-2 text-sm ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : status.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-blue-200 bg-blue-50 text-blue-900'}`}>
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};