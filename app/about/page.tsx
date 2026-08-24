import React from 'react';

export default function AboutPage() {
  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      
      <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
        Richmond College Old Boys' Association
      </h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>
        Richmond College Old Boys' Association - A legacy of unity and excellence
      </p>
      
      <div style={{ background: 'white', borderRadius: '12px', padding: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>
          History of RCOBA
        </h2>
        
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', maxWidth: '800px', margin: '0 auto' }}>
          The Richmond College Old Boys' Association (RCOBA) was founded on December 24, 1894, marking a significant milestone 
          in the history of Richmond College. The establishment of the RCOBA was largely due to the efforts of Mr. W.H. Solomons, 
          who was the headmaster of the college at the time. Reverend Horatius Hartley, serving as the Principal, became the first ex-
          officio President of the Association, highlighting the close ties between the school's administration and its alumni. Mr. C.C. 
          De Silva took on the role of the first Honorary Secretary, while Mr. G.D. Lee served as the Honorary Treasurer. Their 
          leadership and commitment laid the foundation for a lasting legacy, fostering a strong network of former students 
          dedicated to supporting the college and each other.
        </p>
      </div>
      
    </main>
  );
}
