## My Portfolio

A personal portfolio website built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com), showcasing my projects, skills, and ways to get in touch.

## Features

- **Home page** – introduction and links to key sections.
- **About page** – background, skills, and experience.
- **Projects page** – list of selected projects from `data/projects.tsx`.
- **Contact page** – ways to reach me (email / social links).
- **Responsive design** – works on desktop, tablet, and mobile.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package manager:** pnpm

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Installation

Clone the repo and install dependencies:

```bash
git clone <your-repo-url> my-portfolio
cd my-portfolio
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Main routes:

- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/projects` → `app/projects/page.tsx`
- `/contact` → `app/contact/page.tsx`

## Building for Production

```bash
pnpm build
pnpm start
```

This creates an optimized production build and serves it on [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
.
├─ app/
│  ├─ layout.tsx       # Root layout and metadata
│  ├─ globals.css      # Global styles (Tailwind + custom)
│  ├─ page.tsx         # Home page
│  ├─ about/
│  │  └─ page.tsx      # About page
│  ├─ contact/
│  │  └─ page.tsx      # Contact page
│  └─ projects/
│     └─ page.tsx      # Projects page
├─ data/
│  └─ projects.tsx     # Project data
├─ public/             # Static assets
├─ tailwind.config.ts  # Tailwind configuration
├─ next.config.ts      # Next.js configuration
└─ tsconfig.json       # TypeScript configuration
```

## Customization

- Update page content in the files under `app/`.
- Edit project entries in `data/projects.tsx`.
- Adjust styles in `app/globals.css` and `tailwind.config.ts`.

## Deployment

You can deploy this portfolio to any Next.js-compatible host. Deploying to [Vercel](https://vercel.com) is recommended for easiest setup.

