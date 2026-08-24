import React from 'react';

export default function ContactPage() {
  return (
    <main className="main-content container" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '12px', marginTop: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: 'var(--color-maroon)', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ lineHeight: '1.6', marginBottom: '24px', fontSize: '16px' }}>
        We welcome inquiries from alumni, supporters, and the general public. Whether you need to update 
        your directory listing, ask a question about the association, or discuss sponsorship opportunities, 
        we are here to help.
      </p>
      <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
        <h3 style={{ color: '#1e293b', marginBottom: '12px' }}>General Inquiries</h3>
        <p style={{ marginBottom: '8px' }}><strong>Email:</strong> admin@rcoba.org</p>
        <p style={{ marginBottom: '8px' }}><strong>WhatsApp:</strong> +94 77 559 5824</p>
      </div>
      <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ color: '#1e293b', marginBottom: '12px' }}>Office Hours</h3>
        <p style={{ marginBottom: '8px' }}>Monday - Friday: 9:00 AM - 5:00 PM (IST)</p>
        <p>Please note that responses may take up to 48 hours as our committee members serve on a voluntary basis.</p>
      </div>
    </main>
  );
}
