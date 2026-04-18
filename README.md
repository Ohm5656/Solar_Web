# Web Solar

A marketing website for a solar energy and electrical engineering business, built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.

The project is structured as a reusable company profile site for a solar installation business, with sections for services, projects, company information, and contact details.

## Tech Stack

- Next.js 16.2.4
- React 19
- TypeScript 5
- Tailwind CSS 4
- Lucide React icons

## Fonts

The site uses:

- `Sarabun` as the primary font for Thai content
- `Inter` for English text and selected brand-related labels
- System font fallbacks: `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`

Font setup lives in `src/app/layout.tsx` and `src/app/globals.css`.

## Main Routes

- `/` - homepage / landing page
- `/about` - company background and certifications
- `/services` - service overview
- `/projects` - project showcase
- `/contact` - contact information and inquiry form

## Project Structure

```text
src/
  app/
    about/
    contact/
    projects/
    services/
    globals.css
    layout.tsx
    page.tsx
  components/
    FloatingContact.tsx
    Footer.tsx
    Navbar.tsx

public/
  images/
    hero_solar.png
    project_house.png
    service_battery.png
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - run the production build locally
- `npm run lint` - run ESLint

## Customization Notes

This project is currently set up as a reusable template for a solar business website. Before deploying for a real client, you will likely want to update:

- company name and brand text
- contact details
- address, phone, email, and social links
- service descriptions
- project showcase content
- metadata in `src/app/layout.tsx`
- image assets inside `public/images`

## Deployment

Build the project with:

```bash
npm run build
```

Then deploy it to your preferred hosting platform, such as Vercel.
