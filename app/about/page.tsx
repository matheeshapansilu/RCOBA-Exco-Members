import React from 'react';

export default function AboutPage() {
  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
          Richmond College Old Boys' Association
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>
          A legacy of unity, excellence, and unwavering brotherhood since 1894
        </p>
      </div>
      
      <div style={{ background: 'white', borderRadius: '12px', padding: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>
          Our Rich History
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', marginBottom: '20px' }}>
          The Richmond College Old Boys' Association (RCOBA) was founded on December 24, 1894, marking a significant milestone in the history of Richmond College. The establishment of the RCOBA was largely due to the tireless efforts and vision of Mr. W.H. Solomons, who was the esteemed headmaster of the college at the time. Reverend Horatius Hartley, serving as the Principal, became the first ex-officio President of the Association, highlighting the close ties between the school's administration and its alumni. 
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', marginBottom: '20px' }}>
          Mr. C.C. De Silva took on the role of the first Honorary Secretary, while Mr. G.D. Lee served as the Honorary Treasurer. Their leadership and commitment laid the foundation for a lasting legacy, fostering a strong network of former students dedicated to supporting the college and each other. Over the past century, the RCOBA has evolved into one of the most prominent alumni networks in Sri Lanka, standing as a testament to the enduring spirit of Richmondites everywhere.
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.8rem', fontWeight: 700, margin: '40px 0 20px 0' }}>
          Mission & Vision
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', marginBottom: '20px' }}>
          <strong>Our Vision:</strong> To be a globally connected, empowered, and dynamic alumni association that continuously elevates the standards of Richmond College while contributing positively to the broader community and society. We envision a future where every Richmondite, regardless of where they are in the world, remains deeply connected to their alma mater and actively participates in its ongoing success story.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', marginBottom: '20px' }}>
          <strong>Our Mission:</strong> To unite past pupils of Richmond College under a common umbrella, fostering fellowship, mutual support, and professional networking. We are committed to safeguarding the traditions of our beloved school, providing financial and structural support for its development, and ensuring that current students have access to the best educational and extracurricular facilities available. 
        </p>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.8rem', fontWeight: 700, margin: '40px 0 20px 0' }}>
          Key Objectives
        </h2>
        <ul style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Fostering Brotherhood:</strong> To encourage, promote, and foster a spirit of unity, friendship, and brotherhood among the past students of Richmond College.</li>
          <li style={{ marginBottom: '10px' }}><strong>Supporting Education:</strong> To assist the Principal and the staff of Richmond College in maintaining high standards of discipline, academic excellence, and sportsmanship.</li>
          <li style={{ marginBottom: '10px' }}><strong>Infrastructural Development:</strong> To initiate, finance, and oversee projects that improve the physical infrastructure of the school, including classrooms, laboratories, and sports facilities.</li>
          <li style={{ marginBottom: '10px' }}><strong>Scholarships and Welfare:</strong> To provide financial assistance and scholarships to deserving students, ensuring that financial constraints do not hinder their educational pursuits.</li>
          <li style={{ marginBottom: '10px' }}><strong>Preserving Heritage:</strong> To protect and preserve the rich heritage, traditions, and historical artifacts of Richmond College for future generations.</li>
        </ul>

        <h2 style={{ color: 'var(--color-navy)', fontSize: '1.8rem', fontWeight: 700, margin: '40px 0 20px 0' }}>
          Global Reach
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', marginBottom: '20px' }}>
          Today, the RCOBA is not just limited to Galle or Sri Lanka. We have a vast network of international branches across Australia, the United Kingdom, the United States, Canada, the Middle East, and many other regions. These overseas branches play a crucial role in mobilizing resources, organizing global reunions, and ensuring that the Richmond spirit remains vibrant across borders. Through collaborative efforts, our global chapters have funded numerous large-scale projects, proving that distance cannot diminish the love a Richmondite holds for his school.
        </p>
        
        <div style={{ marginTop: '40px', padding: '30px', background: 'var(--color-navy)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Join the RCOBA</h3>
          <p style={{ fontSize: '1.05rem', marginBottom: '20px', opacity: 0.9 }}>
            Are you a past pupil of Richmond College? Join the association today to reconnect with your batchmates, stay updated on school events, and contribute to the legacy of our great institution.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-maroon)', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Get in Touch
          </a>
        </div>

      </div>
      
    </main>
  );
}
