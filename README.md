# Patrick Nandom Portfolio

A personal portfolio website built with Next.js to present my background, product thinking, technical capabilities, and work experience to recruiters, clients, and collaborators.

## Why this project exists

This portfolio is more than a landing page — it is a professional showcase of how I approach software engineering, product delivery, and user-centered design. It communicates:

- my technical foundation
- the kind of problems I enjoy solving
- the web and mobile products I can help build
- the experience and discipline I bring as a developer
- a simple way to contact me for opportunities or collaboration

For a personal portfolio, the README should help both humans and potential employers quickly understand the project’s purpose and how to run or customize it.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn-style UI patterns
- Lucide React icons
- Resend for contact email delivery
- next-themes for light/dark mode

## What the portfolio includes

- Responsive, mobile-friendly layout
- Hero section with personal branding
- About section summarizing my background and focus
- Tooling and technology stack overview
- Service offerings for web and mobile development
- Professional experience timeline
- GitHub CTA linking to my public work
- Contact form with validation and email integration
- Theme toggle for better UX
- Clean, accessible UI suitable for portfolio and hiring use

## Project structure

```text
patrick-nandom-portfolio/
├── actions/
│   └── contact.ts            # Server action for sending contact emails
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # App shell and metadata
│   ├── page.tsx              # Main portfolio page
│   └── custom.d.ts          # Type declarations
├── components/
│   ├── ui/                  # Reusable UI primitives
│   ├── ContactForm.tsx      # Contact form + validation
│   ├── Footer.tsx           # Footer section
│   ├── Hero.tsx             # Hero section
│   ├── ModeToggle.tsx       # Theme switch
│   ├── Navbar.tsx           # Navigation bar
│   ├── SectionTitle.tsx     # Standard section heading
│   ├── ServiceCard.tsx      # Service cards
│   ├── StackRow.tsx         # Stack layout helper
│   ├── TechStack.tsx       # Stack section
│   ├── WorkExperience.tsx  # Experience cards
│   └── theme-provider.tsx  # Theme provider wrapper
├── data/
│   └── data.ts              # Static portfolio/data content
├── lib/
│   ├── schemas/
│   │   └── contact.ts       # Zod validation for contact form
│   └── utils.ts             # Helper functions
├── public/
│   ├── patrick_nandom.jpeg  # Profile image
│   └── résumé.pdf          # Resume PDF
├── types/
│   └── type.ts             # Shared TypeScript types
├── components.json         # shadcn config
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts and dependencies
├── postcss.config.mjs      # PostCSS config
├── tsconfig.json           # TypeScript config
├── next-env.d.ts           # Next.js environment types
├── README.md               # Project documentation
├── .gitignore
└── .env.local              # Local env file (not committed)
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/PatrickNandom/patrick-nandom-portfolio.git
cd patrick-nandom-portfolio
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root directory and configure your email delivery API key:

```env
RESEND_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the portfolio locally.

## Scripts

```bash
npm run dev     # Start the development server
npm run build   # Production build
npm run start   # Run production server
npm run lint    # Run ESLint checks
```

## Deployment

This project is intended for deployment on Vercel, which is a natural fit for a Next.js portfolio. The app is already structured for standard production deployment and should work with Vercel’s default setup.

To deploy:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add the required environment variable: `RESEND_API_KEY`
4. Deploy the project

## Customization guide

If you want to adapt this portfolio for your own profile, update the following:

- `app/page.tsx` for content sections and personal messaging
- `data/data.ts` for technology stacks and static content
- `public/patrick_nandom.jpeg` for your profile image
- `public/résumé.pdf` for your resume
- `actions/contact.ts` for the email receiver or behavior
- `components/` for styling and structure changes

## Contact

- GitHub: https://github.com/PatrickNandom
- Email: patricknandom82@gmail.com

## Final note

A personal portfolio should feel like a polished, trust-building product. The README should therefore communicate not only how to run the site, but why it exists, what it showcases, and how it reflects your professional identity. This version is more recruiter-friendly and better reflects the value of the project as a professional portfolio rather than just a codebase.
