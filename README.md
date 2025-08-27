# Coralum Landing Page

A modern, responsive landing page for Coralum - "Software as a Reef". Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design with beautiful animations
- 🚀 Built with Next.js 14 and React 18
- 🎭 Smooth animations powered by Framer Motion
- 🎨 Styled with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive across all devices
- ⚡ Optimized for performance

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
landing/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
├── pages/                # Page components
│   └── Home.jsx         # Main home page
├── sections/             # Landing page sections
│   ├── HeroSection.jsx
│   ├── ProblemSection.jsx
│   ├── ApproachSection.jsx
│   ├── ServicesSection.jsx
│   ├── ProcessSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── styles/              # Global styles
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The project uses a custom color palette defined in the Tailwind config. The main brand colors are:
- Primary: `#fe5620` (Coral Orange)
- Secondary: `#fd8246` (Light Coral)
- Background: `#155e63` (Deep Teal)

### Components
All UI components are built using shadcn/ui and can be customized in their respective files in the `components/ui/` directory.

## Deployment

This project can be deployed to any platform that supports Next.js:


- **Vercel** (Recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

## License

This project is private and proprietary to Coralum.

---

Built with ❤️ by the Coralum team