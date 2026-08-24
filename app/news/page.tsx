'use client';

import React from 'react';
import { Calendar, ChevronRight, Image as ImageIcon, Video, FileText } from 'lucide-react';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "RCOBA 150th Anniversary Preparations Underway",
      date: "August 15, 2026",
      category: "Announcements",
      type: "video",
      excerpt: "As Richmond College approaches its historic 150th anniversary, the RCOBA has officially launched the organizing committee. Watch the inaugural meeting highlights and see how you can contribute.",
      image: "/logo2.png",
      content: "The Richmond College Old Boys' Association (RCOBA) is thrilled to announce the commencement of planning for the school's 150th-year celebrations. A special committee comprising past presidents and current Exco members convened last week..."
    },
    {
      id: 2,
      title: "Annual General Meeting 2026 Concludes Successfully",
      date: "July 28, 2026",
      category: "Events",
      type: "article",
      excerpt: "The 2026 AGM saw a record turnout of alumni. We welcome the newly appointed Executive Committee who will steer the association through this pivotal year.",
      image: "/logo.jpg",
      content: "Held at the Dr. C W W Kannangara Auditorium, this year's AGM was a resounding success. The outgoing committee presented the annual financial report, highlighting significant growth in our scholarship funds..."
    },
    {
      id: 3,
      title: "New Sports Pavilion Renovation Project",
      date: "June 10, 2026",
      category: "Projects",
      type: "image",
      excerpt: "Take a look at the architectural blueprints for the upcoming renovation of the main college sports pavilion, funded entirely by RCOBA overseas branches.",
      image: "/logo.jpg",
      content: "We are excited to share the final architectural drafts for the new sports pavilion. Thanks to the generous contributions from our international alumni chapters, construction is scheduled to begin next month..."
    }
  ];

  return (
    <main className="main-content container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
          News & Updates
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Stay up to date with the latest articles, event highlights, and media from the Richmond College Old Boys' Association.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {newsItems.map((item) => (
          <article key={item.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            
            {/* Image Header */}
            <div style={{ height: '200px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e2e8f0', position: 'relative' }}>
              <img src={item.image} alt={item.title} style={{ maxHeight: '120px', width: 'auto', objectFit: 'contain' }} />
              
              {/* Content Type Badge */}
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(25, 35, 74, 0.9)', color: 'white', padding: '6px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                {item.type === 'video' && <Video size={14} />}
                {item.type === 'image' && <ImageIcon size={14} />}
                {item.type === 'article' && <FileText size={14} />}
                <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                <span style={{ color: '#0ea5e9', fontWeight: 600 }}>{item.category}</span>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} />
                  {item.date}
                </div>
              </div>
              
              <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>
                {item.title}
              </h2>
              
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                {item.excerpt}
              </p>
              
              <button style={{ background: 'transparent', border: 'none', color: '#6C152B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: 0, fontSize: '1rem', marginTop: 'auto' }}>
                Read Full Story <ChevronRight size={18} />
              </button>
            </div>
            
          </article>
        ))}
      </div>
    </main>
  );
}
