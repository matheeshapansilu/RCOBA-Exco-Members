'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isShopRoute = pathname?.startsWith('/shop') || pathname?.startsWith('/collections');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      {/* Conditional Header Rendering */}
      {isShopRoute ? (
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1.25rem 4%', 
          background: '#ffffff',
          borderBottom: '1px solid #eaeaea',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src="/images/shop/rcoba-logo_1.png" alt="RCOBA Logo" style={{ height: '48px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a202c', lineHeight: 1.1, letterSpacing: '0.5px' }}>RCOBA</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#4a5568', letterSpacing: '0.2px' }}>RICHMOND COLLEGE<br/>OLD BOYS' ASSOCIATION</span>
              </div>
            </a>
            
            <nav style={{ display: 'flex', gap: '24px', marginLeft: '24px' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#4a5568', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Home</a>
              <a href="/shop" style={{ textDecoration: 'none', color: '#4a5568', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Shop</a>
              <a href="/collections/150th-anniversary-merch" style={{ textDecoration: 'none', color: '#4a5568', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>150th Anniversary Merch</a>
              <a href="/shop/contact" style={{ textDecoration: 'none', color: '#4a5568', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Contact Us</a>
            </nav>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={() => setIsSearchOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568' }}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </button>
          </div>
        </header>
      ) : (
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
            <a href="/shop">Shop</a>
            <a href="/about">About Us</a>
            <a href="/news">News</a>
            <a href="/contact" className="btn-contact">Contact</a>
          </nav>
        </header>
      )}

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div 
          onClick={() => setIsSearchOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              padding: '32px 4%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              animation: 'slideDown 0.3s ease-out'
            }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              
              {/* Search Input Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderBottom: '1px solid #eaeaea',
                paddingBottom: '16px',
                position: 'relative'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '16px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                
                <form action="/search" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input 
                    ref={searchInputRef}
                    type="search" 
                    name="q"
                    placeholder="Search" 
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '1.25rem',
                      color: '#1a1a1a',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </form>
                
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#1a1a1a',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              {/* Predictive Results */}
              <div style={{ marginTop: '24px', width: '100%' }}>
                <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '20px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                  Products
                </h3>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(4, 1fr)', 
                  gap: '24px' 
                }}>
                  {/* Item 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '1/1.1', marginBottom: '12px', overflow: 'hidden' }}>
                      <img src="/images/shop/Frnt-kids.jpg" alt="150th Anniversary Kids T-Shirt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '4px', fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>150th Anniversary Kids T-Shirt</div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}>Rs 2,600.00</div>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '1/1.1', marginBottom: '12px', overflow: 'hidden' }}>
                      <img src="/images/shop/Frnt-adults.jpg" alt="150th Anniversary T-Shirt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '4px', fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>150th Anniversary T-Shirt</div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}>Rs 2,600.00</div>
                  </div>

                  {/* Item 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '1/1.1', marginBottom: '12px', overflow: 'hidden' }}>
                      <img src="/images/shop/cufflinks.jpg" alt="College Cufflinks" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '4px', fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>College Cufflinks</div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}>Rs 3,000.00</div>
                  </div>

                  {/* Item 4 */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '1/1.1', marginBottom: '12px', overflow: 'hidden', backgroundColor: '#e2e2e2' }}>
                      <img src="/images/shop/Commemorative_Pin_Badge_-_Blue.jpg" alt="Commemorative Pin Badge - Blue" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '4px', fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>Commemorative Pin Badge - Blue</div>
                    <div style={{ fontSize: '0.95rem', color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}>Rs 5,000.00</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </>
  );
}
