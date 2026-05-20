# Scent-Ji

A modern e-commerce website for aromatherapy products, built with React and Supabase.

## Live Demo

🔗 [View Live Site](https://scent-ji.vercel.app) *(if deployed)*

## Overview

Scent-Ji is a full-stack e-commerce platform designed for browsing and purchasing aromatherapy products. The site features user authentication, shopping cart functionality, order management, and a content section for wellness articles. This project demonstrates integration between a React frontend and Supabase backend for authentication and data persistence.

**Project Type:** E-commerce / Content Website

**Target Users:** Customers interested in aromatherapy and wellness products

## Tech Stack

**Frontend:**
- React
- React Router (client-side routing)
- Vite (build tool)
- CSS Modules

**Backend & Database:**
- Supabase (PostgreSQL database)
- Supabase Auth (user authentication)
- Row-Level Security (RLS) policies

**Deployment:**
- Vercel (frontend hosting)
- Supabase (backend hosting)

## Key Features

- User registration and login with email verification
- Password reset functionality
- Protected user account dashboard
- Shopping cart with quantity management
- Product browsing and filtering
- Product collections and categories
- Checkout flow with order summary
- Order history tracking
- Wellness blog section with articles
- FAQ and contact pages
- Responsive design for mobile and desktop
- Newsletter subscription

## Architecture

**Frontend Structure:**
- React Router handles client-side navigation
- Context API manages global state (authentication, shopping cart)
- Custom hooks for scroll effects and body scroll locking
- Component-based architecture with reusable UI elements

**Backend Integration:**
- Supabase client initialized with environment variables
- Authentication handled through Supabase Auth API
- Orders and user profiles stored in PostgreSQL
- Row-Level Security ensures users can only access their own data

**Routing:**
- SPA configuration with Vercel rewrites for React Router
- Protected routes redirect unauthenticated users to login

**Database Schema:**
- `orders` table: stores order details with user relationship
- `user_profiles` table: extends auth.users with additional profile data
- RLS policies enforce data access control

## Project Structure

```
scent-ji/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── QuickViewModal.jsx
│   │   └── ...
│   ├── pages/           # Route components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Account.jsx
│   │   └── ...
│   ├── context/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Static data (products, collections)
│   ├── lib/             # Utility functions
│   │   └── supabase.js  # Supabase client setup
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main app component with routes
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── supabase-schema.sql  # Database schema
├── .env.example         # Environment variable template
├── vercel.json          # Vercel deployment config
└── package.json
```

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/zj115/scent-ji.git
   cd scent-ji
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema from `supabase-schema.sql` in the Supabase SQL Editor
   - See `SUPABASE_SETUP.md` for detailed instructions

4. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note:** Never commit the `.env` file to version control.

## Deployment

**Vercel Deployment:**
1. Import the repository to Vercel
2. Add environment variables in Vercel project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy

The `vercel.json` file configures SPA routing to work correctly with React Router.

## Screenshots

### Homepage
The landing page features a clean hero section with brand identity, navigation menu, and featured product imagery.

<img src="./screenshots/homepage-hero.png" width="100%" alt="Scent-Ji Homepage Hero Section" />

### Product Collection Grid
Product browsing interface displaying aromatherapy items with images, names, and pricing in a responsive grid layout.

<img src="./screenshots/product-collection.jpg" width="100%" alt="Product Collection Grid View" />

### Quick View Modal
Interactive product quick view modal allowing users to see product details, select quantity, and add items to cart without leaving the current page.

<img src="./screenshots/product-quick-view.jpg" width="100%" alt="Product Quick View Modal" />

## My Contribution

I built this project from scratch as a full-stack e-commerce application. My work included:

- Designed and implemented the frontend UI with React and CSS
- Set up React Router for client-side navigation with multiple page routes
- Integrated Supabase for user authentication (registration, login, password reset)
- Implemented shopping cart functionality using React Context API
- Created the database schema with proper row-level security policies
- Built the checkout flow and order management system
- Deployed the application to Vercel with environment variable configuration
- Ensured responsive design for mobile and desktop devices

## Security and Privacy

- All sensitive credentials are managed through environment variables
- No API keys or database credentials are committed to the repository
- Supabase Row-Level Security (RLS) policies protect user data
- Only the `anon` public key is used in the frontend (not the `service_role` key)
- User passwords are handled securely by Supabase Auth

## Future Improvements

- Add payment gateway integration (Stripe or similar)
- Implement product search functionality
- Add product reviews and ratings
- Create an admin dashboard for product management
- Add email notifications for order confirmations
- Implement inventory tracking
- Add product image zoom and gallery features

## Notes

This repository is shared for portfolio and demonstration purposes. Some business-specific details have been simplified or removed for privacy. The project demonstrates my ability to build a full-stack web application with modern technologies and best practices.

## License

This repository is shared for portfolio and demonstration purposes only.
