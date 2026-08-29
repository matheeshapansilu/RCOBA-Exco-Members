import React from 'react';
import { Bell } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | RCOBA',
  description: 'Important updates for members of Richmond College Old Boys Association',
};

async function getNotices() {
  try {
    const res = await fetch('https://www.rcoba.lk/api/notices', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const json = await res.json();
    return json.data.filter((n: any) => n.isActive);
  } catch (error) {
    return [
      {
        id: '1',
        title: '2026 Big Match Event Plan',
        imageUrl: '/images/news-1.jpg'
      },
      {
        id: '2',
        title: 'Official T-Shirt',
        imageUrl: '/images/news-2.jpg'
      },
      {
        id: '3',
        title: 'RICHMOND NIGHT\'26',
        imageUrl: '/images/news-3.jpg'
      }
    ];
  }
}

export default async function NewsPage() {
  const notices = await getNotices();

  return (
    <main className="main-content container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          Upcoming News
        </h1>
        <p style={{ color: '#4a5568', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 24px' }}>
          Important updates for members of Richmond College Old Boys' Association
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#64748b', fontSize: '0.95rem', fontWeight: 500 }}>
          <Bell size={18} style={{ color: '#64748b' }} />
          <span>{notices.length} notices published</span>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px',
        alignItems: 'start'
      }}>
        {notices.map((notice: any) => (
          <div key={notice.id} style={{ 
            background: '#ffffff', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            borderTop: '6px solid var(--color-navy)',
            borderLeft: '6px solid var(--color-navy)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '24px' }}>
              <h2 style={{ 
                color: 'var(--color-navy)', 
                fontSize: '1.25rem', 
                fontWeight: 700,
                lineHeight: 1.3
              }}>
                {notice.title}
              </h2>
            </div>
            <div style={{ width: '100%', flex: 1 }}>
              <img 
                src={notice.imageUrl} 
                alt={notice.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  objectFit: 'contain' 
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
