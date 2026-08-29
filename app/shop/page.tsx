'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Shirt, Star, Heart, ArrowRight, Check } from 'lucide-react';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

export default function ShopPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    '/images/shop/RCOBA_Legendary_Tee.jpg',
    '/images/shop/RCOBA_Legendary_Tee_2.jpg',
    '/images/shop/RCOBA_Legendary_Tee_3.jpg'
  ];

  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if URL has the Shopify customer_posted parameter (from original site behavior)
    if (typeof window !== 'undefined' && window.location.search.includes('customer_posted=true')) {
      setIsSubscribed(true);
    }

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
      image: '/images/shop/Legendaryfront.png',
      hoverImage: '/images/shop/Legendarypack.png',
      soldOut: true,
    },
    {
      id: 2,
      name: 'Legendary - Chinese Collar T-Shirt',
      price: 'Rs 2,650.00 LKR',
      image: '/images/shop/LegendaryChineseCollarfront.png',
      hoverImage: '/images/shop/LegendaryChineseCollarback.png',
      soldOut: true,
    },
    {
      id: 3,
      name: '150th Anniversary T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/Frnt-adults.jpg',
      hoverImage: '/images/shop/Back.png',
      soldOut: false,
    },
    {
      id: 4,
      name: '150th Anniversary Kids T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/Frnt-kids.jpg',
      hoverImage: '/images/shop/Back.png',
      soldOut: false,
    }
  ];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Hero Banner (Building) */}
      <section style={{ width: '100%', overflow: 'hidden' }}>
        <img 
          src="/images/shop/Untitled_design_12.jpg" 
          alt="Richmond College Building" 
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '70vh' }} 
        />
      </section>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 4%' }}>
        
        {/* 150th Anniversary Video */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#000' }}>
            <CustomVideoPlayer src="/videos/150-anniversary.mp4" posterTime={14.5} />
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: '20px',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '0 8px'
          }}>
            <p style={{ color: '#4a4a4a', fontSize: '1rem', margin: 0, fontFamily: 'Inter, sans-serif' }}>
              150 years of greatness, one legacy of faith and excellence
            </p>
            <a href="/shop" style={{ color: '#4a4a4a', fontSize: '0.95rem', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
              Buy 150 Anniversary Collection
            </a>
          </div>
        </section>

        {/* Handpicked Favorites */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            marginBottom: '32px', 
            color: '#1a1a1a',
            fontFamily: 'Inter, sans-serif'
          }}>
            Handpicked Favorites
          </h2>
          
          <div className="shop-grid-4">
            {products.map((product) => (
              <div key={product.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="product-image-container" style={{ 
                  position: 'relative',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  aspectRatio: '3/4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  marginBottom: '16px',
                  overflow: 'hidden'
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
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                  {product.hoverImage && (
                    <img 
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="product-image-hover"
                    />
                  )}

                  {!product.soldOut && (
                    <button style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: '#ffffff',
                      color: '#1a1a1a',
                      border: '1.5px solid #1a1a1a',
                      borderRadius: '50%',
                      width: '42px',
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      transition: 'transform 0.2s',
                      zIndex: 5
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <ShoppingCart size={20} strokeWidth={1.5} />
                    </button>
                  )}
                </div>
                
                <h3 style={{ 
                  fontSize: '1rem', 
                  color: '#1a1a1a',
                  fontWeight: 700,
                  marginBottom: '6px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {product.name}
                </h3>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#4a4a4a', 
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wear the Pride Section */}
        <section className="shop-split-section">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
            <img 
              src={banners[currentSlide]} 
              alt="Legendary T-Shirts Slider" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            
            <button 
              onClick={() => setCurrentSlide(prev => prev === 0 ? 2 : prev - 1)}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronLeft size={20} color="#333" />
            </button>
            
            <button 
              onClick={() => setCurrentSlide(prev => prev === 2 ? 0 : prev + 1)}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronRight size={20} color="#333" />
            </button>
            
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
                    background: currentSlide === index ? '#ffffff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <div style={{ paddingRight: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Wear the Pride. Wear the Legacy.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '20px' }}>
              The roars that fill the grounds. The colours that command the streets. The thrill that ignites the city. The Official Parade T-Shirt.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '24px' }}>
              That's <strong>LEGENDARY</strong>
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '40px' }}>
              Available at the Dr. <strong>C.W.W. Kannangara Auditorium</strong> from <strong>12.00PM - 3.00PM</strong>
            </p>
            
            <button style={{
              background: '#851d3b',
              color: '#ffffff',
              border: 'none',
              padding: '16px 40px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#6a172f'}
            onMouseOut={(e) => e.currentTarget.style.background = '#851d3b'}
            >
              Shop now
            </button>
          </div>
        </section>

        {/* 150th Anniversary Merch Section */}
        <section className="shop-split-section">
          <div style={{ paddingRight: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              150<sup style={{ fontSize: '1.25rem' }}>th</sup> Anniversary Merch
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '32px' }}>
              Be a part of the monumental milestone that is the 150th Anniversary of our beloved alma mater with the Official Merch of the 150th Celebrations.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '40px' }}>
              Purchases can be made from <strong>10:00 a.m. to 12:00 p.m.</strong> on <strong>Saturday, October 11th</strong>, at the <strong>College Memento Shop and the official online store</strong>
            </p>
            
            <button style={{
              background: '#851d3b',
              color: '#ffffff',
              border: 'none',
              padding: '16px 40px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#6a172f'}
            onMouseOut={(e) => e.currentTarget.style.background = '#851d3b'}
            >
              Shop now
            </button>
          </div>
          
          <div style={{ width: '100%', height: '100%' }}>
            <img 
              src="/images/shop/Untitled_design_13_1.jpg" 
              alt="150th Anniversary Merchandise" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </section>

      </div>

      {/* Features Section */}
      <section style={{ 
        background: '#eef2f6', 
        borderTop: '6px solid #851d3b',
        borderBottom: '6px solid #1a202c',
        padding: '60px 4%',
        width: '100%',
        marginTop: '20px'
      }}>
        <div className="features-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Shirt size={32} strokeWidth={1.5} style={{ marginBottom: '16px', color: '#1a1a1a' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#1a1a1a' }}>Wear Your Richmond Pride</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Showcase your Richmondite identity with quality merchandise that elevates our school's brand visibility across communities and inspires collective pride in our alma mater.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Star size={32} strokeWidth={1.5} style={{ marginBottom: '16px', color: '#1a1a1a' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#1a1a1a' }}>Build Tomorrow's Richmond</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Proceeds strengthen school infrastructure and educational facilities, ensuring future generations inherit a world-class institution worthy of Richmond's 150-year legacy
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Heart size={32} strokeWidth={1.5} style={{ marginBottom: '16px', color: '#1a1a1a' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#1a1a1a' }}>Empower Richmond Sports</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a4a4a', lineHeight: 1.6 }}>
              Every purchase directly funds sports programs and athletic facilities, helping Richmondites achieve their full potential on and off the field
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ 
        padding: '60px 4%', 
        textAlign: 'center',
        background: '#ffffff',
        width: '100%'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: '#1a1a1a',
            marginBottom: '12px'
          }}>
            Get Product Updates....
          </h2>
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#4a4a4a', 
            marginBottom: '32px'
          }}>
            Be the first to know about new collections and special offers.
          </p>
          
          <form 
            style={{ 
              position: 'relative',
              maxWidth: '480px',
              margin: '0 auto',
              marginBottom: '16px'
            }}
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubscribed(true);
            }}
          >
            <input 
              type="email" 
              placeholder="Email address" 
              required
              style={{
                width: '100%',
                padding: '14px 20px',
                paddingRight: '50px',
                borderRadius: '50px',
                border: '1px solid #e5e7eb',
                background: '#f8fafc',
                fontSize: '0.95rem',
                outline: 'none',
                color: '#1a1a1a'
              }}
            />
            <button 
              type="submit"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#4a4a4a',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>

          {isSubscribed && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-start',
              maxWidth: '480px',
              margin: '0 auto',
              color: '#16a34a',
              fontSize: '0.9rem',
              gap: '8px'
            }}>
              <Check size={16} strokeWidth={2.5} />
              <span>Thanks for subscribing!</span>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
