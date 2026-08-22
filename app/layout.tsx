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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3718115976306201"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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
        </SecurityWrapper>
        <Analytics />
      </body>
    </html>
  )
}
