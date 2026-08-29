'use client';

import React from 'react';
import { ShoppingCart, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react';

export default function CollectionPage() {
  const products = [
    {
      id: 1,
      name: '150th Anniversary T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/Frnt-adults.jpg',
      hoverImage: '/images/shop/Back.png',
      soldOut: false,
    },
    {
      id: 2,
      name: '150th Anniversary Kids T-Shirt',
      price: 'Rs 2,600.00 LKR',
      image: '/images/shop/Frnt-kids.jpg',
      hoverImage: '/images/shop/Back.png',
      soldOut: false,
    },
    {
      id: 3,
      name: 'Commemorative Pin Badge - Blue',
      price: 'Rs 5,000.00 LKR',
      image: '/images/shop/Commemorative_Pin_Badge_-_Blue.jpg',
      hoverImage: null,
      soldOut: true,
    },
    {
      id: 4,
      name: 'Commemorative Pin Badge - White',
      price: 'Rs 1,000.00 LKR',
      image: '/images/shop/CommemorativePinBadge-White.jpg',
      hoverImage: null,
      soldOut: true,
    }
  ];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Collection Hero */}
      <section style={{ 
        backgroundColor: '#e6eff5', 
        padding: '60px 4% 80px 4%',
        width: '100%',
        color: '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            marginBottom: '16px',
            fontFamily: 'Inter, sans-serif',
            color: '#2d3748'
          }}>
            150th Anniversary Merch
          </h1>
          <p style={{ 
            fontSize: '0.95rem', 
            lineHeight: 1.6, 
            color: '#4a5568',
            maxWidth: '600px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Be a part of the monumental milestone that is the 150th Anniversary of our beloved alma mater with the Official Merch of the 150th Celebrations.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4%' }}>
        
        {/* Filter and Sort Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '24px 0',
          borderBottom: '1px solid #e2e8f0',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              color: '#4a5568', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              cursor: 'pointer'
            }}>
              Availability <ChevronDown size={16} />
            </button>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              color: '#4a5568', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              cursor: 'pointer'
            }}>
              Price <ChevronDown size={16} />
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', fontSize: '0.9rem', color: '#718096' }}>
            <span>4 items</span>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              color: '#4a5568', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              cursor: 'pointer'
            }}>
              Sort <ChevronDown size={16} />
            </button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a202c' }}>
                <Grid3X3 size={20} />
              </button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a0aec0' }}>
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
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
                padding: '0',
                backgroundColor: '#ffffff',
                marginBottom: '16px',
                overflow: 'hidden'
              }}>
                {product.soldOut && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#e2e8f0',
                    color: '#4a5568',
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
      </div>
    </main>
  );
}
