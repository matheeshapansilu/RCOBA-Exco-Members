import './globals.css'
import type { Metadata } from 'next'
import SecurityWrapper from '@/src/components/SecurityWrapper'
import { Analytics } from '@vercel/analytics/react'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'RCOBA Exco Members Directory',
  description: "Official Richmond College Old Boys' Association (RCOBA) Exco Members Directory from 1976 to 2026. Explore alumni, leadership, and our rich history in Galle, Sri Lanka.",
  keywords: ['RCOBA', 'Richmond College', 'Old Boys Association', 'Galle', 'Sri Lanka', 'Alumni', 'Exco Members', 'Directory'],
  openGraph: {
    title: 'RCOBA Exco Members Directory',
    description: "Official Richmond College Old Boys' Association (RCOBA) Exco Members Directory.",
    type: 'website',
    locale: 'en_LK',
    url: 'https://rcoba-web.vercel.app',
    siteName: 'RCOBA'
  }
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
          
          {/* Official Header */}
          <header className="official-header">
            <div className="header-brand">
              <img src="/logo.jpg" alt="RCOBA Logo" />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>RCOBA</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>RICHMOND COLLEGE OLD BOYS' ASSOCIATION</div>
              </div>
            </div>
            <nav className="header-nav">
              <a href="/">Home</a>
              <a href="#">Shop</a>
              <a href="/about">About Us</a>
              <a href="/news">News</a>
              <a href="/contact" className="btn-contact">Contact</a>
            </nav>
          </header>

          {children}

          {/* Official Footer */}
          <footer className="official-footer">
            <div className="footer-grid">
              
              {/* Brand Column */}
              <div className="footer-brand">
                <div className="footer-logo-row">
                  <img src="/logo.jpg" alt="RCOBA Logo" />
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}>RCOBA</div>
                    <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>RICHMOND COLLEGE<br/>Old Boys' Association</div>
                  </div>
                </div>
                <div className="footer-brand-title">
                  RICHMOND COLLEGE<br/>OLD BOYS' ASSOCIATION
                </div>
                <div className="footer-brand-desc">
                  150 Years of Greatness,<br/>
                  One Legacy of Faith and Excellence
                </div>
              </div>

              {/* Links Column */}
              <div>
                <h3 className="footer-heading">Quick Links</h3>
                <div className="footer-links">
                  <a href="/">Home</a>
                  <a href="#">Shop</a>
                  <a href="/about">About Us</a>
                  <a href="/news">News & Updates</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>

              {/* Contact Column */}
              <div>
                <h3 className="footer-heading">Get In Touch</h3>
                <div className="footer-contact">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><MapPin size={18} /></div>
                    <div>Dr. C W W Kannangara Auditorium,<br/>Richmond College,<br/>Galle,<br/>80000<br/>Sri Lanka</div>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><Phone size={18} /></div>
                    <div>+94 91 222 2886</div>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><Mail size={18} /></div>
                    <div>info@rcoba.lk</div>
                  </div>
                </div>
              </div>

              {/* Social Column */}
              <div>
                <h3 className="footer-heading">Follow Us</h3>
                <div className="footer-social">
                  <a href="#"><Facebook size={24} /></a>
                  <a href="#"><Instagram size={24} /></a>
                  <a href="#"><Linkedin size={24} /></a>
                </div>
              </div>

            </div>
            
            <div className="footer-bottom">
              &copy; 2026 Richmond College Old Boys' Association | All Rights Reserved
            </div>
          </footer>

        </SecurityWrapper>
        <Analytics />
      </body>
    </html>
  )
}
