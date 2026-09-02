'use client';

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'var(--color-navy)',
      color: 'white',
      padding: '15px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9999,
      boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '10px', fontSize: '0.9rem', textAlign: 'center', maxWidth: '800px' }}>
        We use cookies and Google AdSense to personalize content and ads, to provide social media features and to analyze our traffic. 
        By clicking "Accept", you consent to our use of cookies. Read our <a href="/privacy" style={{ color: 'var(--color-lightblue)', textDecoration: 'underline' }}>Privacy Policy</a> for more details.
      </div>
      <button 
        onClick={acceptCookies}
        style={{
          background: 'var(--color-maroon)',
          color: 'white',
          border: 'none',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}
      >
        Accept
      </button>
    </div>
  );
}
