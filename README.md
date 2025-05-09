# Users List Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Responsive user list display
- SEO optimized
- WCAG 2.1 compliant
- TypeScript implementation
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/schwert-gottes/user-list
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO Implementation

The application implements several SEO best practices:

1. **Metadata Optimization**

   - Dynamic metadata configuration using Next.js metadata API
   - Proper title and description tags
   - OpenGraph tags for social media sharing
   - Canonical URL implementation

2. **Structured Data**

   - JSON-LD implementation for rich snippets
   - Schema.org markup for User List and Person entities
   - Proper itemListElement structure for better search engine understanding

3. **Sitemap**
   - Dynamic sitemap generation
   - Proper URL structure with priorities
   - Last modified dates for content freshness

## WCAG Compliance

The application follows WCAG 2.1 guidelines:

1. **Semantic HTML**

   - Proper heading hierarchy (h1, h2, h3)
   - Semantic HTML elements (main, article)
   - ARIA landmarks and roles

2. **Accessibility Features**

   - Proper alt text for images
   - ARIA labels for interactive elements
   - Proper color contrast ratios
   - Responsive design for all screen sizes

3. **Navigation**
   - Keyboard navigable interface
   - Clear focus indicators
   - Proper heading structure

## Project Structure

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
