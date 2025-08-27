# EmailJS Setup Guide for Portfolio

This guide will help you set up EmailJS to receive emails from your portfolio's contact form.

## 📧 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your frontend JavaScript code without a backend server. It's perfect for portfolio websites and contact forms.

## 🚀 Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Templates

#### Contact Form Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it "Contact Form Template"
4. Use this template structure:

```html
Subject: New Contact from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio
```

5. Save the template and note down the **Template ID**

#### Notification Template (Optional)
1. Create another template for notifications to yourself
2. Name it "Notification Template"
3. Use this structure:

```html
Subject: Portfolio Contact Notification

Hello {{to_name}},

A new contact form submission was received:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}

Time: {{time}}

Best regards,
Your Portfolio System
```

### 4. Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Update Configuration

1. Open `src/config/emailConfig.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  NOTIFICATION_TEMPLATE_ID: 'your_notification_template_id_here',
};
```

### 6. Install Dependencies

Run this command in your portfolio directory:

```bash
npm install @emailjs/browser
```

### 7. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the contact form
4. Submit and check if you receive the email

## 🔧 Configuration Options

### Customizing Email Templates

You can customize the email templates in EmailJS dashboard:

- **Subject Line**: Change the subject format
- **Email Content**: Modify the message structure
- **Styling**: Add HTML/CSS for better formatting
- **Variables**: Use any variables you send from the form

### Available Template Variables

The following variables are automatically sent to your EmailJS templates:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (recipient)
- `{{reply_to}}` - Reply-to email address

## 🛡️ Security & Best Practices

### Rate Limiting
- EmailJS free plan has rate limits
- Consider upgrading for higher limits
- Implement client-side validation

### Spam Protection
- Use CAPTCHA for production
- Implement server-side validation
- Monitor for spam submissions

### Error Handling
- The code includes comprehensive error handling
- Users get feedback on success/failure
- Failed submissions are logged

## 📱 Mobile Compatibility

The email functionality works on all devices:
- ✅ Desktop browsers
- ✅ Mobile browsers
- ✅ Tablet browsers
- ✅ Progressive Web Apps

## 🔍 Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check your EmailJS credentials
   - Verify template IDs are correct
   - Check browser console for errors

2. **Template variables not working**
   - Ensure variable names match exactly
   - Check for typos in template
   - Verify data is being sent correctly

3. **Rate limiting errors**
   - Upgrade your EmailJS plan
   - Implement delays between submissions
   - Add user feedback for rate limits

### Debug Mode

To enable debug mode, add this to your EmailJS initialization:

```javascript
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY, undefined, {
  useBeta: true,
  debug: true
});
```

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Review browser console errors
3. Test with EmailJS sandbox
4. Contact EmailJS support

## 🎉 Success!

Once configured, your portfolio will:
- ✅ Receive contact form submissions
- ✅ Send professional email responses
- ✅ Provide user feedback
- ✅ Handle errors gracefully
- ✅ Work across all devices

Your contact form is now fully functional and ready to receive emails from potential clients and collaborators!
