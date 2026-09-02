import React from 'react';

export default function TermsOfServicePage() {
  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', textAlign: 'center' }}>
        Terms of Service
      </h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', textAlign: 'center' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left', lineHeight: '1.8', color: '#334155' }}>
        
        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          1. Terms
        </h2>
        <p>
          By accessing the website at rcoba-web.vercel.app, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          2. Use License
        </h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Richmond College Old Boys' Association's website for personal, non-commercial transitory viewing only.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          3. Disclaimer
        </h2>
        <p>
          The materials on Richmond College Old Boys' Association's website are provided on an 'as is' basis. Richmond College Old Boys' Association makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          4. Limitations
        </h2>
        <p>
          In no event shall Richmond College Old Boys' Association or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Richmond College Old Boys' Association's website.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px 0' }}>
          5. Revisions and Errata
        </h2>
        <p>
          The materials appearing on Richmond College Old Boys' Association's website could include technical, typographical, or photographic errors. Richmond College Old Boys' Association does not warrant that any of the materials on its website are accurate, complete or current.
        </p>
        
      </div>
      
    </main>
  );
}
