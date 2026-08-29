'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Banner Image */}
      <section style={{ width: '100%', overflow: 'hidden' }}>
        <img 
          src="/images/RCG_Contact_Us_2.jpg" 
          alt="Vintage Richmond College Gathering" 
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
        />
      </section>

      {/* Page Title */}
      <div style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          color: '#2d3748',
          fontFamily: 'Inter, sans-serif'
        }}>
          Contact Us
        </h1>
      </div>

      {/* Contact Form */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 4%' }}>
        <form 
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Row 1: Name & Email */}
          <div className="contact-form-row">
            <input 
              type="text" 
              placeholder="Name" 
              style={{
                width: '100%',
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '0',
                fontSize: '0.95rem',
                outline: 'none',
                color: '#2d3748',
                backgroundColor: '#ffffff'
              }}
            />
            <input 
              type="email" 
              placeholder="Email" 
              style={{
                width: '100%',
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '0',
                fontSize: '0.95rem',
                outline: 'none',
                color: '#2d3748',
                backgroundColor: '#ffffff'
              }}
            />
          </div>

          {/* Row 2: Phone */}
          <input 
            type="tel" 
            placeholder="Phone" 
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #e2e8f0',
              borderRadius: '0',
              fontSize: '0.95rem',
              outline: 'none',
              color: '#2d3748',
              backgroundColor: '#ffffff'
            }}
          />

          {/* Row 3: Comment */}
          <textarea 
            placeholder="Comment" 
            rows={8}
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #e2e8f0',
              borderRadius: '0',
              fontSize: '0.95rem',
              outline: 'none',
              color: '#2d3748',
              resize: 'vertical',
              backgroundColor: '#ffffff'
            }}
          />

          {/* Submit Button */}
          <div style={{ marginTop: '10px' }}>
            <button 
              type="submit"
              style={{
                padding: '12px 24px',
                border: '1px solid #718096',
                backgroundColor: '#ffffff',
                color: '#2d3748',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f7fafc';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>

    </main>
  );
}
