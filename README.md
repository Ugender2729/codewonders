# Ugender Dharavath - Portfolio

A modern, responsive portfolio website built with React.js, showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Professional dark theme with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Image Carousel**: Dynamic background carousel in the hero section
- **Professional Styling**: Tailwind CSS with custom animations and effects

## 🛠️ Technologies Used

- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Sections

1. **Hero Section**: Introduction with animated background carousel
2. **About**: Professional background and skills overview
3. **Skills**: Technical skills with progress indicators
4. **Experience**: Work experience and achievements
5. **Projects**: Portfolio projects with detailed descriptions
6. **Contact**: Contact form with EmailJS integration

## 🎯 Key Highlights

- **JEE 2017 AIR 1472**: Selected as NITian
- **4+ Years Experience**: Full Stack Development
- **React Specialist**: Expert in React.js ecosystem
- **API Integration**: Experience with various APIs
- **Deployment**: Railway, Render, and other platforms
- **Modern Technologies**: React Native, D3.js, and more

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ugender2729/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📧 Email Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Follow the setup guide in `EMAIL_SETUP.md`
2. Update your EmailJS credentials in `src/config/emailConfig.js`
3. Test the contact form

## 🎨 Customization

### Colors and Theme
- Edit `src/App.css` for custom CSS variables
- Modify Tailwind classes in components
- Update background images and gradients

### Content
- Update personal information in component files
- Add/remove projects in `src/components/Projects.jsx`
- Modify skills and experience in respective components

### Styling
- Custom animations in `src/App.css`
- Component-specific styles in each component
- Responsive breakpoints using Tailwind classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### EmailJS Configuration
Update `src/config/emailConfig.js` with your EmailJS credentials:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
};
```

### Personal Information
Update your personal details in:
- `src/components/Hero.jsx` - Name, title, contact info
- `src/components/About.jsx` - About section content
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project details

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Deploy: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: ugenderdharavath1@gmail.com
- **LinkedIn**: [Ugender Dharavath](https://www.linkedin.com/in/ugender-dharavath-856573323)
- **GitHub**: [Ugender2729](https://github.com/Ugender2729)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Unsplash](https://unsplash.com/) for background images

---

⭐ Star this repository if you found it helpful!
