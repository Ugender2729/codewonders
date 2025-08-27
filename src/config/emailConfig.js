// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard)
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  
  // Your EmailJS Template ID for contact form
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',
  
  // Your EmailJS Public Key
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Optional: Template ID for notification emails to yourself
  NOTIFICATION_TEMPLATE_ID: 'YOUR_NOTIFICATION_TEMPLATE_ID',
};

// Email template variables that will be available in your EmailJS template
export const EMAIL_TEMPLATE_VARIABLES = {
  // These variables will be sent to your EmailJS template
  from_name: '', // Sender's name
  from_email: '', // Sender's email
  subject: '', // Email subject
  message: '', // Email message
  to_name: 'Ugender Dharavath', // Your name (recipient)
  reply_to: '', // Reply-to email (same as sender's email)
};

// Validation rules for the contact form
export const FORM_VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    required: true,
  },
};

// Success and error messages
export const MESSAGES = {
  SUCCESS: {
    EMAIL_SENT: 'Thank you! Your message has been sent successfully.',
    NOTIFICATION_SENT: 'Notification sent successfully!',
  },
  ERROR: {
    EMAIL_FAILED: 'Failed to send email. Please try again.',
    VALIDATION_FAILED: 'Please check your input and try again.',
    NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  },
  VALIDATION: {
    NAME_REQUIRED: 'Name is required',
    NAME_TOO_SHORT: 'Name must be at least 2 characters long',
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_INVALID: 'Please enter a valid email address',
    SUBJECT_REQUIRED: 'Subject is required',
    SUBJECT_TOO_SHORT: 'Subject must be at least 5 characters long',
    MESSAGE_REQUIRED: 'Message is required',
    MESSAGE_TOO_SHORT: 'Message must be at least 10 characters long',
  },
};
