'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
          Contact Us
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          We'd love to hear from you. Please reach out with any questions about admissions,
          programs, or general inquiries about our college.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '60px' }}>
        
        {/* Left Column: Get In Touch */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #6C152B, #19234A)' }}></div>
          
          <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Get In Touch
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'var(--color-navy)', color: 'white', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '4px' }}>Phone</div>
                <div style={{ color: '#64748b' }}>+94 91 222 2886</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'var(--color-navy)', color: 'white', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '4px' }}>Email</div>
                <div style={{ color: '#64748b' }}>info@rcoba.lk</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'var(--color-navy)', color: 'white', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '4px' }}>Address</div>
                <div style={{ color: '#64748b', lineHeight: 1.5 }}>
                  Dr. CWW Kannangara Auditorium,<br/>
                  Richmond College,<br/>
                  Galle.<br/>
                  80000<br/>
                  Sri Lanka
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'var(--color-navy)', color: 'white', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Clock size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '4px' }}>Office Hours</div>
                <div style={{ color: '#64748b', lineHeight: 1.5 }}>
                  Monday - Friday: 8:00 AM - 4:30 PM<br/>
                  Saturday: 9:00 AM - 12:00 PM
                </div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '16px' }}>Connect With Us</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ background: '#3b5998', color: 'white', padding: '12px', borderRadius: '50%', display: 'flex' }}><Facebook size={20} /></a>
              <a href="#" style={{ background: '#e1306c', color: 'white', padding: '12px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} /></a>
              <a href="#" style={{ background: '#0077b5', color: 'white', padding: '12px', borderRadius: '50%', display: 'flex' }}><Linkedin size={20} /></a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #6C152B, #19234A)' }}></div>
          
          <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
            />
            <select 
              style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', background: 'white', color: '#64748b' }}
            >
              <option value="">Subject</option>
              <option value="general">General Inquiry</option>
              <option value="membership">Membership Update</option>
              <option value="sponsorship">Sponsorship</option>
            </select>
            <textarea 
              placeholder="Your Message" 
              required
              rows={5}
              style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
            ></textarea>
            
            <button 
              type="submit" 
              style={{ 
                background: '#0ea5e9', 
                color: 'white', 
                border: 'none', 
                padding: '16px', 
                borderRadius: '8px', 
                fontSize: '1.1rem', 
                fontWeight: 600, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#0284c7'}
              onMouseOut={(e) => e.currentTarget.style.background = '#0ea5e9'}
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Map Section */}
      <div style={{ background: 'var(--color-navy)', borderRadius: '16px', overflow: 'hidden', color: 'white', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '30px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Find Us</h2>
            <div style={{ width: '40px', height: '4px', background: 'white', borderRadius: '2px' }}></div>
          </div>
          <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>Visit our School and experience Richmond College firsthand</p>
        </div>
        
        <div style={{ width: '100%', height: '400px', background: '#e2e8f0' }}>
          <iframe 
            src="https://maps.google.com/maps?q=6.052398167254285,80.20432535652021&hl=en&z=15&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', color: 'var(--color-text)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '4px', height: '24px', background: '#0ea5e9', borderRadius: '2px' }}></div>
            <span style={{ fontSize: '1.1rem', color: '#64748b' }}>Richmond College, Richmond Hill Rd, Galle 80000</span>
          </div>
          <a href="https://maps.google.com/?q=Richmond+College+Galle" target="_blank" rel="noreferrer" style={{ background: 'var(--color-navy)', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>
            Get Directions ?
          </a>
        </div>
      </div>

    </main>
  );
}
