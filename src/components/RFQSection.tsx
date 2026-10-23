import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PRODUCT_DETAILS } from '../data/productDetails.ts';
import { MAIN_PRODUCTS, type ContactFormData } from '../data/contact.ts';
import { submitContactEnquiry, type ContactEnquiryStatus } from '../utils/contactEnquiry.ts';

interface RFQSectionProps {
  preFilledProduct?: string;
  preFilledSpecs?: string;
}

const inputClasses =
  'mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-800 focus:ring-2 focus:ring-blue-800/15 placeholder:text-slate-400';

const RequiredMark = () => <span aria-hidden="true" className="ml-1 text-red-600">*</span>;

export const RFQSection: React.FC<RFQSectionProps> = ({ preFilledProduct, preFilledSpecs }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    email: '',
    country: '',
    product: '',
    quantity: '',
    message: preFilledSpecs ?? '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactEnquiryStatus | null>(null);

  useEffect(() => {
    if (!preFilledProduct && !preFilledSpecs) return;
    const matchingProduct = PRODUCT_DETAILS.find((product) => product.name === preFilledProduct);
    const productGroup = MAIN_PRODUCTS.find((group) => group.id === matchingProduct?.group);
    setFormData((current) => ({
      ...current,
      product: productGroup?.name ?? current.product,
      quantity: productGroup ? current.quantity || '500' : current.quantity,
      message: preFilledSpecs ?? current.message,
    }));
  }, [preFilledProduct, preFilledSpecs]);

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
    setStatus(null);
    setIsSubmitting(true);
    try {
      setStatus(await submitContactEnquiry(formData));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rfq-section" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-8 sm:py-10">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:gap-6">
          <aside className="rounded-lg bg-blue-950 p-7 text-white shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">RK Engineering &amp; Galvanizers</p>
            <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight">GET IN TOUCH WITH US</h1>
            <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
              Connect with us for any inquiries or support.
            </p>
            <div className="my-5 h-px w-full bg-white/30" />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-white" strokeWidth={1.7} />
                <div>
                  <h2 className="text-base font-bold">Support</h2>
                  <a href="tel:+918422044453" className="mt-1 inline-block text-sm text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                    +91 84220 44453
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-white" strokeWidth={1.7} />
                <div>
                  <h2 className="text-base font-bold">Email</h2>
                  <a href="mailto:info@rkenggindia.com" className="mt-1 inline-block break-all text-sm text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                    info@rkenggindia.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-white" strokeWidth={1.7} />
                <div>
                  <h2 className="text-base font-bold">Our Address</h2>
                  <address className="mt-1 max-w-md text-sm not-italic leading-relaxed text-blue-100">
                    Unit-1 N-70, Factory Unit 2 - W 87 Anand Nagar,
                    <br />
                    Additional M.I.D.C, Ambernath (E), Dist. Thane-
                    <br />
                    421501, INDIA.
                  </address>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Contact Us</p>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[1.75rem]">HAVE ANY QUESTIONS ?</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Fill out the form to connect with us today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-bold text-slate-800">
                    Name<RequiredMark />
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Enter your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-mobile" className="text-sm font-bold text-slate-800">
                    Mobile Number<RequiredMark />
                  </label>
                  <input
                    id="contact-mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    required
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                    title="Enter a 10-digit mobile number."
                    value={formData.mobile}
                    onChange={updateField}
                    placeholder="Enter 10-digit mobile number"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="text-sm font-bold text-slate-800">
                    Email<RequiredMark />
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={updateField}
                    placeholder="Enter your email"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-country" className="text-sm font-bold text-slate-800">Country</label>
                  <input
                    id="contact-country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    maxLength={100}
                    value={formData.country}
                    onChange={updateField}
                    placeholder="Enter Your Country"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid items-start gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-product" className="text-sm font-bold text-slate-800">
                    Products<RequiredMark />
                  </label>
                  <select
                    id="contact-product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={updateField}
                    className={`${inputClasses} cursor-pointer`}
                  >
                    <option value="">--- Select Choice ---</option>
                    {MAIN_PRODUCTS.map((product) => (
                      <option key={product.id} value={product.name}>{product.name}</option>
                    ))}
                  </select>
                </div>

                {formData.product && (
                  <div>
                    <label htmlFor="contact-quantity" className="text-sm font-bold text-slate-800">
                      Quantity (m)<RequiredMark />
                    </label>
                    <input
                      id="contact-quantity"
                      name="quantity"
                      type="number"
                      inputMode="numeric"
                      required
                      min={500}
                      step={1}
                      onKeyDown={(event) => {
                        if (['-', '+', 'e', 'E', '.'].includes(event.key)) event.preventDefault();
                      }}
                      value={formData.quantity}
                      onChange={updateField}
                      onBlur={(event) => {
                        const quantity = Number(event.currentTarget.value);
                        if (!Number.isFinite(quantity) || quantity < 500) {
                          setFormData((current) => ({ ...current, quantity: '500' }));
                        }
                      }}
                      placeholder="Minimum 500 m"
                      aria-describedby="contact-quantity-hint"
                      className={inputClasses}
                    />
                    <p id="contact-quantity-hint" className="mt-1 text-xs text-slate-500">
                      Minimum quantity: 500 m
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm font-bold text-slate-800">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  value={formData.message}
                  onChange={updateField}
                  placeholder="Enter your message"
                  className={`${inputClasses} min-h-28 resize-y`}
                />
              </div>

              {status && (
                <p
                  role={status.type === 'error' ? 'alert' : 'status'}
                  className={`rounded-md border px-4 py-3 text-sm leading-relaxed ${
                    status.type === 'error'
                      ? 'border-red-200 bg-red-50 text-red-800'
                      : status.type === 'success'
                        ? 'border-green-200 bg-green-50 text-green-800'
                        : 'border-blue-200 bg-blue-50 text-blue-900'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-36"
              >
                {isSubmitting ? 'Sending…' : 'Send'}
                {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
