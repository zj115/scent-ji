# Scent-Ji 香玑

A boutique e-commerce site for traditional Chinese aroma jewellery, focused on brand presentation and a calm shopping experience.

**Live site:** https://scent-ji.vercel.app

## Overview

Scent-Ji is a small e-commerce project for an aromatherapy jewellery brand. The goal of the build was to make browsing and buying feel calm rather than busy — a single product grid, a quick-view that opens in place instead of pulling the user to a new page, and a checkout flow that stays out of the way.

The frontend is React with Vite. Authentication and order storage run on Supabase, and the site is deployed on Vercel.

## Screenshots

![Homepage](screenshots/homepage-hero.jpg)
*Landing page introducing the brand and featured pieces.*

![Product collection](screenshots/product-collection.jpg)
*Responsive product grid with images, names, and pricing.*

![Quick view](screenshots/product-quick-view.jpg)
*Quick-view modal for product detail without leaving the catalogue.*

## Tech Stack

- React with React Router
- Vite as the build tool
- Plain CSS (no utility framework)
- Supabase for authentication and order data
- Vercel for hosting

## Key Features

- Product collection pages with a responsive grid.
- Quick-view modal for inline product detail and cart adds.
- Shopping cart with quantity adjustment.
- Supabase-backed authentication and account management.
- Checkout flow with an order summary step.
- A small wellness content section for brand storytelling.

## Project Structure

```
scent-ji/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route components
│   ├── context/          # State management
│   ├── hooks/            # Custom React hooks
│   ├── data/             # Product data
│   └── lib/              # Utilities
├── public/               # Static assets
├── screenshots/
├── supabase-schema.sql
└── SUPABASE_SETUP.md
```

## Setup

```bash
git clone https://github.com/zj115/scent-ji.git
cd scent-ji
npm install
```

Create a Supabase project, run the SQL from `supabase-schema.sql` in its SQL editor (see `SUPABASE_SETUP.md` for the longer walkthrough), then add your credentials to `.env`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Then:

```bash
npm run dev
```

## Implementation Notes

I built this as a smaller-scale e-commerce project to focus on UI behaviour rather than backend complexity. The product grid and quick-view modal were the part that took the most iteration — the quick-view needs to feel instantaneous, so it lives inside the same page rather than pushing a new route.

Cart and checkout state live in a React context provider so component state stays out of individual pages. Supabase handles user accounts and order rows; the schema is small and intentionally so.

The site is deployed on Vercel with automatic builds.

## Security and Privacy

Credentials live in environment variables, never the repository. User data is protected by row-level security policies in Supabase. The repo is shared for portfolio purposes with no real customer data.

## License

*Shared for portfolio and demonstration purposes only.*
