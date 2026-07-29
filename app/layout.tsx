import './globals.css'
import type { Metadata } from 'next'
import SecurityWrapper from '@/src/components/SecurityWrapper'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/src/components/ThemeProvider'
import { ThemeToggle } from '@/src/components/ThemeToggle'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <SecurityWrapper>
          <header className="header">
            <div className="container header-content">
              <img src="/logo.jpg" alt="RCOBA Logo" className="logo" />
              <h1 className="header-title" style={{ flexGrow: 1, textAlign: 'center' }}>RCOBA Exco Members (1976 - 2026)</h1>
              {/* Second Logo placeholder */}
              <img src="/logo2.png" alt="Second Logo" className="logo" />
              <ThemeToggle />
            </div>
          </header>
          {children}
        </SecurityWrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
