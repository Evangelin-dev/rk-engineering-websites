# Deployment configuration

## EmailJS contact form

The Contact Us form and enquiry popup send email directly through EmailJS from
the browser. Configure these Vite environment variables in the local `.env`
file for development and in the deployment platform's build environment for
production:

```text
VITE_EMAILJS_SERVICE_ID=service_noowy6j
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Copy `.env.example` to `.env` for local development and replace the placeholders
with the Service ID, Template ID, and Public Key from the EmailJS account. In
production, configure the same values in the deployment platform's build
environment and rebuild/redeploy the site after changing them; Vite embeds
`VITE_` variables into the client bundle. Restart the Vite development server
after changing `.env`; Vite reads these values when the server starts. The form
reports which EmailJS variables are missing when it cannot submit.

### Vercel

In the Vercel project, open **Settings → Environment Variables** and add
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY` for the environments where the site is deployed
(Production, and Preview/Development if needed). Use `service_noowy6j` for the
Service ID and copy the Template ID and Public Key from EmailJS. Save the
variables, then redeploy so Vite can include them in the client build.

Configure the EmailJS template to use these parameter names:
`name`, `company_name`, `mobile`, `email`, `destination_country`, `product`,
`enquiry_type`, and `message`. In the EmailJS dashboard template settings, set
**To Email** to `rahul@botdigitalsolutions.com`, **Reply-To** to `{{email}}`,
and **CC** to `info@rkenggindia.com` if CC is supported by the selected Gmail
service. Recipient and CC settings must be set in EmailJS; adding frontend
parameters alone does not configure recipients.

Add the production site domain to EmailJS's allowed origins. The EmailJS public
key is designed for browser use; do not put private credentials or SMTP
passwords in frontend environment variables.
