import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../data/contact.ts';

export type ContactEnquiryStatus = {
  type: 'info' | 'error' | 'success';
  message: string;
};

export interface EmailJSTemplateParams extends Record<string, string> {
  name: string;
  company_name: string;
  mobile: string;
  email: string;
  destination_country: string;
  product: string;
  enquiry_type: string;
  message: string;
}

export interface ContactSelectDisplayValues {
  product?: string;
  cableTrayType?: string;
  enquiryType?: string;
}

let emailJsInitialized = false;

export function getSelectedOptionLabel(form: HTMLFormElement, name: string): string | undefined {
  const field = form.elements.namedItem(name);
  if (!(field instanceof HTMLSelectElement)) return undefined;
  return field.selectedOptions.item(0)?.textContent?.trim() || undefined;
}

export function createEmailTemplateParams(
  formData: ContactFormData,
  selectedValues: ContactSelectDisplayValues = {},
): EmailJSTemplateParams {
  const messageParts = [
    formData.cableTrayType && `Cable tray type: ${selectedValues.cableTrayType || formData.cableTrayType}`,
    formData.quantity && `Quantity: ${formData.quantity} m`,
    formData.message.trim() && `Message:\n${formData.message.trim()}`,
  ].filter((part): part is string => Boolean(part));

  return {
    name: formData.name.trim(),
    company_name: formData.companyName?.trim() ?? '',
    mobile: formData.mobile.trim(),
    email: formData.email.trim(),
    destination_country: formData.country.trim() || 'Not specified',
    product: selectedValues.product || 'Not specified',
    enquiry_type: selectedValues.enquiryType || 'Not specified',
    message: messageParts.join('\n\n') || 'No additional message provided.',
  };
}

export async function submitContactEnquiry(
  formData: ContactFormData,
  selectedValues: ContactSelectDisplayValues = {},
): Promise<ContactEnquiryStatus> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  const missingConfiguration = [
    !serviceId && 'VITE_EMAILJS_SERVICE_ID',
    !templateId && 'VITE_EMAILJS_TEMPLATE_ID',
    !publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
  ].filter((key): key is string => Boolean(key));

  if (missingConfiguration.length > 0) {
    if (import.meta.env.DEV) {
      console.error(
        `EmailJS configuration is missing required Vite environment variables: ${missingConfiguration.join(', ')}`,
      );
    }

    return {
      type: 'error',
      message: `The enquiry service is not configured. Missing ${missingConfiguration.join(', ')}. Please email info@rkenggindia.com instead.`,
    };
  }

  try {
    if (!emailJsInitialized) {
      emailjs.init({ publicKey });
      emailJsInitialized = true;
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      createEmailTemplateParams(formData, selectedValues),
    );
    if (response.status !== 200) {
      throw new Error(`EmailJS returned status ${response.status}.`);
    }
    return { type: 'success', message: 'Your enquiry was sent successfully.' };
  } catch (error) {
    console.error('EmailJS enquiry submission failed.', error);
    return {
      type: 'error',
      message: 'We could not send your enquiry. Please try again or email info@rkenggindia.com instead.',
    };
  }
}
