# Hummingbird Care Initiative (HCI) Waitlist Landing Page

A modern, responsive landing page for the Hummingbird Care Initiative waitlist, built with React and Tailwind CSS. This platform connects caregivers with families seeking compassionate elderly care services.

## Overview

The HCI Waitlist Landing Page is designed to capture early interest from both caregivers and families looking for elderly care services. The platform serves as a marketplace where caregivers can offer their services and families can find trusted care providers for their loved ones.

## Features

### Core Functionality
- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Waitlist Registration**: Simple form for users to join the waitlist
- **Multi-role Support**: Supports both caregivers and family members
- **Location-based**: Currently supports Lagos, Abuja, and other locations

### User Interface
- **Modern Design**: Clean, professional design with blue color scheme (#357ABB)
- **Interactive Elements**: Hover effects, smooth transitions, and engaging CTAs
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Mobile-First**: Optimized for mobile devices with collapsible navigation

### Sections

#### Header
- Fixed navigation bar with logo and menu
- Mobile-responsive hamburger menu
- Direct links to "Join the Waitlist" CTA

#### Hero Section
- Compelling headline about compassionate care
- Call-to-action buttons for joining waitlist and learning more
- Background image with overlay
- Prominent visual elements

#### Mission Section
- Clear mission statement
- Emphasizes dignity and value for both elderly and caregivers

#### Who Section
- Targeted messaging for two user types:
  - **Families/Loved Ones**: Seeking trusted care for elderly relatives
  - **Caregivers**: Offering professional heartfelt care services

#### Benefits Section
- **Priority Access**: Early onboarding and verification
- **Exclusive Benefits**: Special offers for early members
- **Trusted & Secure**: Access to quality, verified caregivers

#### How It Works
- 3-step process:
  1. **Sign Up**: Fill out quick registration form
  2. **Get Notified**: Early notification when service launches
  3. **Start Care**: Onboard and connect with verified caregivers/families

#### Waitlist Form
- Comprehensive registration form with:
  - Full Name
  - Email Address
  - Role Selection (Caregiver/Family Member/Other)
  - Location Selection (Lagos/Abuja/Other)
- Direct integration with external waitlist system (bit.ly link)

#### Footer
- Company branding and description
- Social media links (Twitter, Instagram, LinkedIn)
- App store badges (placeholder)
- Contact information
- Quick navigation links

## Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.17
- **Icons**: React Icons 5.5.0
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── Components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Hero.jsx            # Main hero section with CTA
│   ├── Mission.jsx         # Mission statement section
│   ├── Who.jsx             # Target audience explanation
│   ├── Benefit.jsx         # Benefits of joining waitlist
│   ├── HowSection.jsx      # Step-by-step process
│   ├── WaitList.jsx        # Registration form
│   └── Footer.jsx          # Footer with contact info
├── assets/                 # Images and icons
│   ├── LogoIcon.png
│   ├── Image.png
│   ├── backgd.png
│   ├── familycare.png
│   ├── caregiver.png
│   ├── keyicon.png
│   ├── staricon.png
│   ├── shieldicon.png
│   ├── love.png
│   ├── appstore.png
│   └── playstore.png
├── App.css                # Global styles
├── App.jsx                # Main app component
├── index.css              # Base styles and Tailwind imports
└── main.jsx               # App entry point
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SpitalLabs-02/HCI-WAITLIST.git
   cd HCI-WAITLIST
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

### Styling
The project uses Tailwind CSS for styling. Key design elements:
- **Primary Color**: `#357ABB` (Blue)
- **Background Colors**: Various shades for different sections
- **Typography**: Responsive text sizing with proper hierarchy

### Content Updates
To modify content:
1. Update text in respective component files
2. Replace images in the `src/assets/` directory
3. Update links and contact information in components

### Form Integration
The waitlist form currently links to an external service via `bit.ly/HCI-WAITLIST`. To integrate with a custom backend:
1. Modify the form submission in `WaitList.jsx`
2. Add form validation and error handling
3. Implement API calls for data submission

## Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible mobile navigation
- Flexible grid layouts
- Responsive typography
- Optimized image sizing

## External Integrations

- **Waitlist Form**: Links to external registration system
- **Social Media**: Direct links to Twitter, Instagram, and LinkedIn
- **Email Contact**: Mailto link for customer inquiries

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary to Hummingbird Care Initiative. All rights reserved.

## Contact

- **Email**: info@hcareinitiative.org
- **Twitter**: [@humingbirdscare](https://x.com/humingbirdscare)
- **Instagram**: [@hummingbirdscare](https://www.instagram.com/hummingbirdscare)
- **LinkedIn**: [Hummingbird Care Initiative](https://www.linkedin.com/company/hummingbirdscare)

## Future Enhancements

- [ ] Backend integration for waitlist management
- [ ] User authentication and dashboard
- [ ] Real-time waitlist position tracking
- [ ] Multi-language support
- [ ] Advanced form validation
- [ ] Analytics integration
- [ ] A/B testing capabilities
