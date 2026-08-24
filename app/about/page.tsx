import React from 'react';

export default function AboutPage() {
  return (
    <main className="main-content container" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '12px', marginTop: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: 'var(--color-maroon)', marginBottom: '20px' }}>About Us</h1>
      <p style={{ lineHeight: '1.6', marginBottom: '16px', fontSize: '16px' }}>
        Welcome to the Richmond College Old Boys' Association (RCOBA) Executive Committee Members Directory. 
        This platform serves as a digital archive and networking resource celebrating the dedicated individuals 
        who have guided our association from 1976 through 2026.
      </p>
      <p style={{ lineHeight: '1.6', marginBottom: '16px', fontSize: '16px' }}>
        Richmond College, a premier educational institution, has a rich history of producing outstanding citizens. 
        The RCOBA Executive Committee represents a diverse group of alumni who volunteer their time and expertise 
        to support the school's development, foster alumni relations, and uphold the proud traditions of our alma mater.
      </p>
      <h2 style={{ color: 'var(--color-maroon)', marginTop: '30px', marginBottom: '15px' }}>Our Mission</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '16px', fontSize: '16px' }}>
        Our mission is to maintain a comprehensive, accurate, and easily accessible record of past and present 
        committee members. By digitizing this historical data, we ensure that the contributions of our predecessors 
        are never forgotten, while providing a seamless way for current members to connect, collaborate, and continue 
        serving Richmond College.
      </p>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <img src="/logo.jpg" alt="Richmond College Logo" style={{ width: '100px', height: 'auto', marginBottom: '16px' }} />
        <p style={{ lineHeight: '1.6', fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', color: 'var(--color-maroon)' }}>
          Nisi Dominus Frustra.
        </p>
      </div>
    </main>
  );
}
