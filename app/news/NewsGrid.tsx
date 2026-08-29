'use client';

import React, { useState, useEffect } from 'react';

export default function NewsGrid({ notices }: { notices: any[] }) {
  const [selectedNotice, setSelectedNotice] = useState<any | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedNotice) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNotice]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: 
        .news-img-container {
          position: relative;
          cursor: pointer;
          width: 100%;
          flex: 1;
          display: flex;
        }
        .news-img-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .news-img-container:hover .news-img-overlay {
          opacity: 1;
        }
        .click-to-view-pill {
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 8px 24px;
          border-radius: 24px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(4px); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      }} />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px',
        alignItems: 'start',
        marginBottom: '80px'
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
            <div className="news-img-container" onClick={() => setSelectedNotice(notice)}>
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
              <div className="news-img-overlay">
                <div className="click-to-view-pill">Click to view</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Image Modal */}
      {selectedNotice && (
        <div 
          onClick={() => setSelectedNotice(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'modalFadeIn 0.2s ease-out forwards'
          }}
        >
          <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center', animation: 'scaleUp 0.3s ease-out forwards' }}>
            {selectedNotice.title}
          </h2>
          
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'relative',
              maxHeight: 'calc(100vh - 160px)',
              maxWidth: '90vw',
              display: 'flex',
              justifyContent: 'center',
              animation: 'scaleUp 0.3s ease-out forwards'
            }}
          >
            <img 
              src={selectedNotice.imageUrl} 
              alt={selectedNotice.title} 
              style={{
                maxHeight: 'calc(100vh - 160px)',
                maxWidth: '100%',
                borderRadius: '16px',
                objectFit: 'contain',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }} 
            />
          </div>
          
          <p style={{ color: '#a0aec0', marginTop: '24px', fontSize: '0.95rem', animation: 'scaleUp 0.3s ease-out forwards' }}>
            Click outside to close
          </p>
        </div>
      )}
    </>
  );
}
