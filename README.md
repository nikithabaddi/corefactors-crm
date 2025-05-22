# Corefactors CRM Demo Booking Platform

A modern, accessible, and responsive web application for booking CRM software demos. Built with React.js, Tailwind CSS, and integrated with Calendly for seamless appointment scheduling.

![Corefactors CRM Demo](screenshot.png)

## 🔥 Latest Updates (2024)

- **Full-Screen, Sectioned Layout:** Each main section (Hero, Features, CRM Boxes, Workflows, Testimonials, CTA) uses `min-h-screen` and flex utilities for a visually immersive, professional look.
- **Interactive Cards:** Features and workflow cards now have dynamic hover effects—cards overlap by default, and on hover, the active card rises and scales up while others blur and scale down.
- **Typography & Design:** Strong, bold headings (`text-gray-900 font-bold`), refined card text, and consistent spacing for a modern, readable interface.
- **Calendly API Integration:** Uses a secure API token (set in `.env` or Netlify environment variables) to fetch invitee details and send booking data to Google Sheets.
- **Troubleshooting & Deployment Tips:** See below for Netlify-specific notes and troubleshooting.

## 🔗 Live Demo

Check out the live demo: [Corefactors CRM Demo](https://corefactors-crm.netlify.app/)

## 🌟 Features

- **Modern UI/UX Design**
  - Clean and professional interface
  - Responsive design for all devices
  - Smooth animations and transitions
  - WCAG AAA compliant accessibility

- **Booking System**
  - Integrated Calendly widget
  - Custom booking form
  - Automatic Google Sheets integration
  - Real-time availability updates

- **Technical Features**
  - React.js for frontend
  - Tailwind CSS for styling
  - SCSS for custom styles
  - Responsive design
  - Accessibility compliance
  - Performance optimized

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/corefactors-crm.git
   cd corefactors-crm
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Project Structure

```
corefactors-crm/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── HeroSection/
│   │   ├── FeatureCards/
│   │   ├── Features/
│   │   ├── Workflows/
│   │   ├── Testimonials/
│   │   ├── Cta/
│   │   ├── CrmBoxes/
│   │   └── CookieDialog/
│   ├── styles/
│   │   ├── tailwind.scss
│   │   └── custom.scss
│   └── App.jsx
├── public/
│   └── logo.svg
└── package.json
```

## 🔧 Configuration

### Calendly Integration
1. Create a Calendly account
2. Set up your event type
3. Update the iframe URL in `CookieDialog.jsx`
4. **Set your Calendly API token:**
   - Locally: add `REACT_APP_CALENDLY_API_TOKEN=your_token` to your `.env` file
   - On Netlify: add `REACT_APP_CALENDLY_API_TOKEN` in Site settings → Build & deploy → Environment → Environment variables

### Google Sheets Integration
1. Set up Google Cloud Project
2. Enable Google Sheets API
3. Create service account credentials
4. Configure environment variables:
   ```
   GOOGLE_SHEETS_ID=your_sheet_id
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
   GOOGLE_PRIVATE_KEY=your_private_key
   ```

## 🎨 Customization

### Styling
- Edit `src/styles/custom.scss` for custom styles
- Modify `tailwind.config.js` for Tailwind customization

### Components
- Update `Header.jsx` for logo and navigation
- Modify `HeroSection.jsx` for main content
- Customize `CookieDialog.jsx` for booking form
- Use `FeatureCards.jsx` for interactive feature cards
- Use `Features.jsx` for the features section
- Use `Workflows.jsx` for the workflows section
- Use `Testimonials.jsx` for the testimonials section
- Use `Cta.jsx` for the call-to-action section
- Use `CrmBoxes.jsx` for the CRM boxes section

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## ♿ Accessibility

- WCAG AAA compliant
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus management

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages)

### Netlify Deployment & Troubleshooting
- **Auto-deploy:** Netlify redeploys automatically when you push to the connected branch.
- **Environment Variables:** If you add or change environment variables (e.g., `REACT_APP_CALENDLY_API_TOKEN`), update them in Netlify's dashboard and redeploy.
- **Cache Issues:** If changes don't appear, use "Clear cache and deploy site" in Netlify's deploys page.
- **Tailwind Issues:** If styles don't update, check your `tailwind.config.js` and try a hard refresh (Ctrl+Shift+R).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Nikitha Baddi - Initial work

## 🙏 Acknowledgments

- Calendly for the booking system
- Google Sheets API for automation
- React.js community
- Tailwind CSS team
