<div align="center">
  <img src="public/logo.jpg" alt="Richmond College Logo" width="120" />

  <h1>Richmond College OBA - Exco Members</h1>
  
  <p>
    <strong>A secure, high-performance directory application for the Richmond College Old Boys' Association Executive Committee.</strong>
  </p>

  <p>
    <a href="https://rcoba-web.vercel.app/"><img src="https://img.shields.io/badge/Live_Website-rcoba--web.vercel.app-2563eb?style=for-the-badge&logo=vercel" alt="Live Website" /></a>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Supabase-Database-3ecf8e?style=for-the-badge&logo=supabase" alt="Supabase" />
    <img src="https://img.shields.io/badge/Vercel-Analytics-000000?style=for-the-badge&logo=vercel" alt="Vercel Analytics" />
  </p>
</div>

<br />

## 🌟 Overview

The **RCOBA Exco Directory** is a modern, full-stack web application built to digitize and manage the historical and current records of the Richmond College Old Boys' Association Executive Committee (1976 - 2026). 

It features a public-facing directory with advanced search and filtering, alongside a highly secure, authenticated Admin Portal for data management.

## ✨ Key Features

- 🔍 **Advanced Search & Filtering**: Instantly search across 480+ members by name or membership number, and filter by specific Exco Years or Roles (e.g., President, Secretary).
- 📊 **Dynamic Analytics Dashboard**: Real-time charts and statistics showing committee size over time and role distribution.
- 🔐 **Secure Admin Portal**: Protected by Supabase Row Level Security (RLS) and server-side authentication cookies.
- 📝 **Full CRUD Capabilities**: Admins can seamlessly Add, Edit, and Delete member records directly from the UI.
- 📥 **CSV Export**: Admins can export the currently filtered directory into an Excel-ready `.csv` file.
- 📈 **Vercel Analytics**: Built-in privacy-friendly analytics to track page views and visitor demographics.
- ⚡ **Optimized Performance**: Built on Next.js 14 App Router for lightning-fast server-side rendering and static generation.

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL, Supabase SSR)
- **Styling**: Vanilla CSS (Glassmorphism design system)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) & React Testing Library
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/rcoba-directory.git
cd rcoba-directory
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your Supabase and application keys:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SITE_PASSCODE=your_local_passcode
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

This project includes a robust suite of automated unit tests to ensure component stability and security.

Run the test suite:
```bash
npm run test
```

## 🔒 Security

This application implements several layers of security:
- **Global Passcode**: The entire site is protected by a global environment variable passcode (`SITE_PASSCODE`).
- **Supabase Authentication**: The `/admin` routes require explicit email/password authentication via Supabase.
- **Row Level Security (RLS)**: The database is strictly locked down at the Postgres level. Only authenticated admins can perform `INSERT`, `UPDATE`, or `DELETE` operations.

---
<div align="center">
  <i>Built with pride for Richmond College.</i>
</div>
