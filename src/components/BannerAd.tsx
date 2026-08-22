import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function BannerAd() {
  return (
    <div className="banner-ad-container animate-fade-in glass">
      <div className="banner-content">
        <div className="banner-text">
          <span className="sponsor-badge">Sponsored</span>
          <h3>Support RCOBA's Future</h3>
          <p>Promote your business to hundreds of Richmond College alumni. Contact us today to secure this exclusive banner spot.</p>
        </div>
        <a href="mailto:admin@rcoba.org" className="banner-cta">
          Sponsor Us <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
