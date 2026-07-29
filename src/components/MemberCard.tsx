import React from 'react';
import { Mail, Phone, Briefcase, Award, Edit2, Trash2 } from 'lucide-react';
import { Member } from '../data/members';

export default function MemberCard({ 
  member, 
  isAdmin = false,
  onEdit,
  onDelete
}: { 
  member: Member, 
  isAdmin?: boolean,
  onEdit?: (m: Member) => void,
  onDelete?: (m: Member) => void 
}) {
  return (
    <div className="member-card animate-fade-in glass" style={{ position: 'relative' }}>
      {isAdmin && (
        <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px', zIndex: 10 }}>
          <button onClick={(e) => { e.stopPropagation(); onEdit && onEdit(member); }} style={{ background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '6px', border: 'none', cursor: 'pointer', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Edit2 size={16} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onDelete && onDelete(member); }} style={{ background: 'rgba(239,68,68,0.8)', padding: '6px', borderRadius: '6px', border: 'none', cursor: 'pointer', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Trash2 size={16} />
          </button>
        </div>
      )}
      <div className="member-card-header">
        <div className="member-avatar-wrapper">
          {member.photoUrl ? (
            <img src={member.photoUrl} alt={member.fullName} className="member-avatar" />
          ) : (
            <div className="member-avatar-fallback">
              {member.fullName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <h3 className="member-name">{member.fullName}</h3>
        <p className="member-occupation">{member.occupation}</p>
      </div>
      
      <div className="member-card-body">
        <div className="info-row">
          <Award className="info-icon" size={18} />
          <div className="info-text">
            <span className="info-label">Membership No</span>
            <span className="info-value">{member.membershipNumber}</span>
          </div>
        </div>

        <div className="info-row">
          <Mail className="info-icon" size={18} />
          <div className="info-text">
            <span className="info-label">Email</span>
            <span className="info-value">{member.email || 'N/A'}</span>
          </div>
        </div>

        <div className="info-row">
          <Phone className="info-icon" size={18} />
          <div className="info-text">
            <span className="info-label">Phone</span>
            <span className="info-value">{member.phoneNumber || 'N/A'}</span>
          </div>
        </div>



        {member.positions.length > 0 && (
          <div className="positions-badge-container">
            {member.positions.map((pos, idx) => (
              <div key={idx} className="position-badge">
                <Briefcase size={14} />
                <span>{pos.title} ({pos.year})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
