'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Shirt, Star, Heart } from 'lucide-react';

export default function ShopPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    '/images/shop/legendary-banner-1.png',
    '/images/shop/legendary-banner-2.png',
    '/images/shop/legendary-banner-3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Legendary - Collared Dites T-Shirt',
      price: 'Rs 2,950.00 LKR',
      image: '/images/shop/legendary-collared.png',
      soldOut: true,
    },
    {
      id: 2,
      name: 'Legendary - Chinese Collar T-Shirt',
      price: 'Rs 2,650.00 LKR',
      image: '/images/shop/legendary-chinese.png',
      soldOut: true,
    },
    {
      id: 3,
      name: '150th Anniversary T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/150-anniv-closeup.png',
      soldOut: false,
    },
    {
      id: 4,
      name: '150th Anniversary Kids T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/150-anniv-kids-front.png',
      soldOut: false,
    },
    {
      id: 5,
      name: 'College Cufflinks',
      price: 'Rs 3,000.00 LKR',
      image: '/images/shop/cufflinks.png',
      soldOut: false,
    },
    {
      id: 6,
      name: 'Commemorative Pin Badge - Blue',
      price: 'Rs 5,000.00 LKR',
      image: '/images/shop/pin-badge.png',
      soldOut: false,
    }
  ];

  return (
    <main className="main-content" style={{ paddingBottom: 0 }}>
      {/* Hero Banner Slider */}
      <section style={{ width: '100%', marginBottom: '40px', position: 'relative', background: 'white' }}>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img 
            src={banners[currentSlide]} 
            alt="Legendary T-Shirts Banner" 
            style={{ width: '100%', display: 'block', objectFit: 'contain' }} 
          />
          
          <button 
            onClick={() => setCurrentSlide(prev => prev === 0 ? 2 : prev - 1)}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronLeft size={24} color="#333" />
          </button>
          
          <button 
            onClick={() => setCurrentSlide(prev => prev === 2 ? 0 : prev + 1)}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronRight size={24} color="#333" />
          </button>
          
          {/* Slide indicators */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: currentSlide === index ? 'var(--color-navy)' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '0 20px 40px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
            Shop
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
            Official Richmond College Merchandise
          </p>
        </div>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px', color: 'var(--color-navy)' }}>
            Handpicked Favorites
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            {products.map((product) => (
              <div key={product.id} className="glass" style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                cursor: 'pointer'
              }}>
                {product.soldOut && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    zIndex: 10
                  }}>
                    Sold out
                  </div>
                )}
                
                <div style={{ 
                  height: '300px', 
                  backgroundColor: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} 
                  />
                </div>
                
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 600, 
                    color: 'var(--color-navy)',
                    marginBottom: '8px',
                    lineHeight: 1.4
                  }}>
                    {product.name}
                  </h3>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontWeight: 500 }}>
                      {product.price}
                    </span>
                    
                    {!product.soldOut && (
                      <button style={{
                        background: 'var(--color-maroon)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}>
                        <ShoppingCart size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 150th Anniversary Merch Banner */}
        <section style={{ marginBottom: '60px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
          <img 
            src="/images/shop/150-anniv-banner.png" 
            alt="150th Anniversary Merch" 
            style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
          />
        </section>
      </div>

      {/* Features Section */}
      <section style={{ 
        background: '#eef2f6', 
        borderTop: '6px solid var(--color-maroon)',
        borderBottom: '6px solid var(--color-navy)',
        padding: '60px 20px',
        width: '100%'
      }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Shirt size={48} strokeWidth={1} style={{ marginBottom: '20px', color: '#333' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#1a1a1a' }}>Wear Your Richmond Pride</h3>
            <p style={{ fontSize: '0.95rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Showcase your Richmondite identity with quality merchandise that elevates our school's brand visibility across communities and inspires collective pride in our alma mater.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Star size={48} strokeWidth={1} style={{ marginBottom: '20px', color: '#333' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#1a1a1a' }}>Build Tomorrow's Richmond</h3>
            <p style={{ fontSize: '0.95rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Proceeds strengthen school infrastructure and educational facilities, ensuring future generations inherit a world-class institution worthy of Richmond's 150-year legacy.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Heart size={48} strokeWidth={1} style={{ marginBottom: '20px', color: '#333' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#1a1a1a' }}>Empower Richmond Sports</h3>
            <p style={{ fontSize: '0.95rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Every purchase directly funds sports programs and athletic facilities, helping Richmondites achieve their full potential on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* School Building Footer Image */}
      <section style={{ width: '100%', display: 'flex' }}>
        <img 
          src="/images/shop/school-building.png" 
          alt="Richmond College" 
          style={{ width: '100%', objectFit: 'cover', display: 'block' }} 
        />
      </section>
    </main>
  );
}
