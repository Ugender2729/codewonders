import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, MESSAGES } from '../config/emailConfig';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

/**
 * Send email using EmailJS
 * @param {Object} formData - The form data containing name, email, subject, message
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Ugender Dharavath', // Your name
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: MESSAGES.SUCCESS.EMAIL_SENT,
      data: response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: MESSAGES.ERROR.EMAIL_FAILED,
      error: error
    };
  }
};

/**
 * Send notification email to yourself when someone contacts you
 * @param {Object} formData - The form data
 * @returns {Promise} - Promise that resolves when notification is sent
 */
export const sendNotificationEmail = async (formData) => {
  try {
    const notificationParams = {
      from_name: 'Portfolio Contact Form',
      subject: `New Contact from ${formData.name}`,
      message: `
        New contact form submission:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
        
        Time: ${new Date().toLocaleString()}
      `,
      to_name: 'Ugender Dharavath',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.NOTIFICATION_TEMPLATE_ID,
      notificationParams
    );

    return {
      success: true,
      message: MESSAGES.SUCCESS.NOTIFICATION_SENT,
      data: response
    };
  } catch (error) {
    console.error('Notification sending failed:', error);
    return {
      success: false,
      message: MESSAGES.ERROR.EMAIL_FAILED,
      error: error
    };
  }
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with success and errors
 */
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = MESSAGES.VALIDATION.NAME_TOO_SHORT;
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = MESSAGES.VALIDATION.EMAIL_INVALID;
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = MESSAGES.VALIDATION.SUBJECT_TOO_SHORT;
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = MESSAGES.VALIDATION.MESSAGE_TOO_SHORT;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default {
  sendEmail,
  sendNotificationEmail,
  validateEmail,
  validateFormData
};
