import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', textAlign: 'center' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', textAlign: 'center' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left', lineHeight: '1.8', color: '#334155' }}>
        
        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          1. Introduction
        </h2>
        <p>
          Richmond College Old Boys' Association ("RCOBA", "we", "us", or "our") operates the rcoba-web.vercel.app website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          2. Information Collection and Use
        </h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our service to you. This includes Personal Data (such as email address, first name and last name, phone number, cookies, and usage data) when you register, contact us, or interact with our platform.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          3. Google AdSense and Cookies
        </h2>
        <p>
          Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-maroon)'}}>Ads Settings</a>.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          4. Security of Data
        </h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          5. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us by email at info@rcoba.lk.
        </p>
        
      </div>
      
    </main>
  );
}
