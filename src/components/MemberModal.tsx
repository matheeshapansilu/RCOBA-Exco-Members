import React, { useState, useEffect } from 'react';
import { Member } from '../data/members';
import { addMember, updateMember } from '@/app/admin/actions';
import { X } from 'lucide-react';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member | null; // If null, we are adding a new member. If provided, we are editing.
  onSuccess: () => void;
}

export default function MemberModal({ isOpen, onClose, member, onSuccess }: MemberModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [fullName, setFullName] = useState('');
  const [membershipNumber, setMembershipNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  
  // Positions state
  const [positions, setPositions] = useState<{year: number | string, title: string}[]>([]);

  useEffect(() => {
    if (member) {
      setFullName(member.fullName);
      setMembershipNumber(member.membershipNumber);
      setEmail(member.email || '');
      setPhoneNumber(member.phoneNumber || '');
      setOccupation(member.occupation || '');
      setPositions(member.positions || []);
    } else {
      setFullName('');
      setMembershipNumber('');
      setEmail('');
      setPhoneNumber('');
      setOccupation('');
      setPositions([]);
    }
  }, [member, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const payload = {
      fullName,
      membershipNumber,
      email,
      phoneNumber,
      occupation,
      positions
    };

    try {
      if (member) {
        await updateMember(member.id, payload);
      } else {
        await addMember(payload);
      }
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong while saving.');
    } finally {
      setIsLoading(false);
    }
  };

  const addPosition = () => {
    setPositions([...positions, { year: new Date().getFullYear().toString(), title: '' }]);
  };

  const removePosition = (index: number) => {
    setPositions(positions.filter((_, i) => i !== index));
  };

  const updatePosition = (index: number, field: 'year' | 'title', value: string) => {
    const newPositions = [...positions];
    newPositions[index][field] = value;
    setPositions(newPositions);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass animate-fade-in">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>{member ? 'Edit Member' : 'Add New Member'}</h2>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Full Name *</label>
            <input required type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Membership Number</label>
              <input type="text" value={membershipNumber} onChange={e => setMembershipNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Occupation</label>
              <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </div>
          </div>

          <div className="form-group positions-group">
            <div className="positions-header">
              <label>Positions</label>
              <button type="button" onClick={addPosition} className="add-position-btn">+ Add Role</button>
            </div>
            
            {positions.map((pos, idx) => (
              <div key={idx} className="position-row">
                <input 
                  type="text" 
                  placeholder="Year (e.g. 2024)" 
                  value={pos.year} 
                  onChange={e => updatePosition(idx, 'year', e.target.value)}
                  style={{ width: '100px' }}
                />
                <input 
                  type="text" 
                  placeholder="Title (e.g. Secretary)" 
                  value={pos.title} 
                  onChange={e => updatePosition(idx, 'title', e.target.value)}
                  style={{ flex: 1 }}
                />
                <button type="button" onClick={() => removePosition(idx)} className="remove-btn"><X size={18}/></button>
              </div>
            ))}
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose} disabled={isLoading}>Cancel</button>
            <button type="submit" className="save-btn" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Member'}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          width: 100%;
          max-width: 600px;
          background: white;
          padding: 30px;
          border-radius: 16px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          color: #0f172a;
        }
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
        }
        h2 { margin-bottom: 24px; color: #1e293b; }
        .form-row {
          display: flex;
          gap: 16px;
        }
        .form-row > .form-group {
          flex: 1;
        }
        .form-group {
          margin-bottom: 16px;
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 14px;
        }
        input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
        }
        input:focus { border-color: #3b82f6; }
        .positions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .add-position-btn {
          background: #e0f2fe;
          color: #0284c7;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
        .position-row {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }
        .remove-btn {
          background: #fee2e2;
          color: #ef4444;
          border: none;
          border-radius: 6px;
          padding: 0 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .error-message {
          color: #ef4444;
          background: #fee2e2;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 14px;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        .cancel-btn {
          padding: 10px 16px;
          background: transparent;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
        }
        .save-btn {
          padding: 10px 24px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        .save-btn:disabled { opacity: 0.7; }
      `}</style>
    </div>
  );
}
