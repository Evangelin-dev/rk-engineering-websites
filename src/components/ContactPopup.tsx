import React, { useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';
import { MAIN_PRODUCTS, type ContactFormData } from '../data/contact.ts';
import { submitContactEnquiry, type ContactEnquiryStatus } from '../utils/contactEnquiry.ts';

const DISMISSED_KEY = 'rk-contact-popup-dismissed';
const fieldClasses =
  'mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/15';

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
    setIsSubmitting(true);
    setStatus(null);
    try {
      setStatus(await submitContactEnquiry(formData));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <a
        href={`https://wa.me/918422044453?text=${encodeURIComponent('Hello, I would like to discuss a requirement with RK Engineering.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RK Engineering on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] ring-1 ring-white/70 transition duration-200 hover:scale-105 hover:bg-[#1DA851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8" fill="none">
          <path
            d="M16 4.1a11.45 11.45 0 0 0-9.83 17.32L4.7 27.3l6.02-1.43A11.45 11.45 0 1 0 16 4.1Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M12.03 10.45c-.28-.62-.58-.63-.85-.64h-.72c-.25 0-.66.09-1.01.47-.34.38-1.32 1.29-1.32 3.14s1.35 3.65 1.54 3.9c.19.25 2.6 4.17 6.42 5.68 3.17 1.25 3.82 1 4.51.94.69-.06 2.22-.91 2.53-1.79.31-.88.31-1.63.22-1.79-.09-.16-.34-.25-.72-.44-.38-.19-2.22-1.1-2.56-1.22-.34-.13-.59-.19-.84.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.81.09-.38-.19-1.59-.59-3.03-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.84-2.06-1.15-2.79Z"
            fill="currentColor"
          />
        </svg>
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
