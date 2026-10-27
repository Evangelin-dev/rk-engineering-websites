import type { ContactFormData } from '../data/contact.ts';

export type ContactEnquiryStatus = {
  type: 'info' | 'error' | 'success';
  message: string;
};

export async function submitContactEnquiry(formData: ContactFormData): Promise<ContactEnquiryStatus> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    const subject = encodeURIComponent(
      `Website enquiry${formData.enquiryType ? ` - ${formData.enquiryType}` : ''}: ${formData.product}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Company: ${formData.companyName || 'Not provided'}`,
        `Mobile: ${formData.mobile}`,
        `Email: ${formData.email}`,
        `Country: ${formData.country || 'Not provided'}`,
        `Product: ${formData.product}`,
        `Cable tray type: ${formData.cableTrayType || 'Not specified'}`,
        `Enquiry type: ${formData.enquiryType || 'Not specified'}`,
        `Quantity: ${formData.quantity} m`,
        '',
        'Message:',
        formData.message || 'Not provided',
      ].join('\n'),
    );
    window.location.href = `mailto:info@rkenggindia.com?subject=${subject}&body=${body}`;
    return {
      type: 'info',
      message: 'Your email app will open with this enquiry as a draft. Please send the email there; this website cannot confirm delivery.',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      return {
        type: 'error',
        message: `We could not send your enquiry (server returned ${response.status}). Please email info@rkenggindia.com instead.`,
      };
    }
    return { type: 'success', message: 'Your enquiry was sent successfully.' };
  } catch {
    return {
      type: 'error',
      message: 'We could not connect to the enquiry service. Please email info@rkenggindia.com instead.',
    };
  }
}
