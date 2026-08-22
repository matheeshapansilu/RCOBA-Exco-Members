import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function SponsorshipMessage() {
  return (
    <div className="sponsorship-box-container animate-fade-in glass">
      <div className="sponsorship-content">
        <div className="sponsorship-text">
          <span className="sponsor-badge">Sponsored</span>
          <h3>Support RCOBA's Future</h3>
          <p>Promote your business to hundreds of Richmond College alumni. Contact us today to secure this exclusive spot.</p>
        </div>
        <a href="mailto:admin@rcoba.org" className="sponsorship-cta">
          Sponsor Us <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
