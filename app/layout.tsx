import './globals.css'
import type { Metadata } from 'next'
import SecurityWrapper from '@/src/components/SecurityWrapper'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'RCOBA Exco Members (1976 - 2026)',
  description: "Richmond College Old Boys' Association - Members Directory",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3718115976306201"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <SecurityWrapper>
          <header className="header">
            <div className="container header-content">
              <img src="/logo.jpg" alt="RCOBA Logo" className="logo" />
              <h1 className="header-title" style={{ flexGrow: 1, textAlign: 'center' }}>RCOBA Exco Members (1976 - 2026)</h1>
              {/* Second Logo placeholder */}
              <img src="/logo2.png" alt="Second Logo" className="logo" />
            </div>
          </header>
          {children}
          <footer style={{ textAlign: 'center', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid #e2e8f0', color: '#64748b' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
              <a href="/" style={{ color: 'var(--color-maroon)', textDecoration: 'none', fontWeight: '500' }}>Home</a>
              <a href="/about" style={{ color: 'var(--color-maroon)', textDecoration: 'none', fontWeight: '500' }}>About Us</a>
              <a href="/contact" style={{ color: 'var(--color-maroon)', textDecoration: 'none', fontWeight: '500' }}>Contact Us</a>
            </div>
            <p>© {new Date().getFullYear()} Richmond College Old Boys' Association. All rights reserved.</p>
          </footer>
        </SecurityWrapper>
        <Analytics />
      </body>
    </html>
  )
}
