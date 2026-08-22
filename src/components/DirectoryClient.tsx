'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, UserX, Users, GraduationCap, Calendar, BookOpen, PenTool, Award, Shield, Star, Landmark, Coins } from 'lucide-react';
import { Member } from '../data/members';
import MemberCard from './MemberCard';
import DashboardCharts from './DashboardCharts';
import MemberModal from './MemberModal';
import SponsorshipMessage from './SponsorshipMessage';
import { useRouter } from 'next/navigation';
import { deleteMember } from '@/app/admin/actions';

export default function DirectoryClient({ initialMembers, isAdmin = false }: { initialMembers: Member[], isAdmin?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const itemsPerPage = 20;

  // Dashboard calculations
  const totalMembers = initialMembers.length;
  const principalsCount = initialMembers.filter(m => 
    m.occupation && m.occupation.toLowerCase().includes('principal')
  ).length;

  let secretaries = 0;
  let assistantSecretaries = 0;
  let vicePresidents = 0;
  let patrons = 0;
  let vicePatrons = 0;
  let treasurers = 0;
  let assistantTreasurers = 0;

  initialMembers.forEach(m => {
    const hasRole = (condition: (title: string) => boolean) => 
      m.positions.some(p => condition(p.title.toLowerCase()));

    if (hasRole(t => t.includes('assistant secretary'))) assistantSecretaries++;
    if (hasRole(t => t.includes('secretary') && !t.includes('assistant'))) secretaries++;
    
    if (hasRole(t => t.includes('vice president'))) vicePresidents++;
    
    if (hasRole(t => t.includes('vice patron'))) vicePatrons++;
    if (hasRole(t => t.includes('patron') && !t.includes('vice'))) patrons++;
    
    if (hasRole(t => t.includes('assistant treasurer') || t.includes('assistant treasure'))) assistantTreasurers++;
    if (hasRole(t => (t.includes('treasurer') || t.includes('treasure')) && !t.includes('assistant'))) treasurers++;
  });

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Extract all unique years from positions to populate the dropdown
  const availableYears = useMemo(() => {
    const years = new Set<number>();
    initialMembers.forEach(m => {
      m.positions.forEach(p => years.add(p.year));
    });
    return Array.from(years).sort((a, b) => b - a); // Sort newest first
  }, [initialMembers]);

  const filteredMembers = useMemo(() => {
    return initialMembers.filter(m => {
      // Check search query
      const matchesSearch = !query.trim() || 
        m.fullName.toLowerCase().includes(query.toLowerCase()) ||
        (m.membershipNumber && m.membershipNumber.toLowerCase().includes(query.toLowerCase()));
      
      // Check year filter
      const matchesYear = selectedYear === 'All' || 
        m.positions.some(p => p.year.toString() === selectedYear);

      // Check role filter
      const matchesRole = !selectedRole || (() => {
        const hasRole = (condition: (title: string) => boolean) => 
          m.positions.some(p => condition(p.title.toLowerCase()));

        switch (selectedRole) {
          case 'Principal':
            return m.occupation && m.occupation.toLowerCase().includes('principal');
          case 'Secretary':
            return hasRole(t => t.includes('secretary') && !t.includes('assistant'));
          case 'Asst Secretary':
            return hasRole(t => t.includes('assistant secretary'));
          case 'Vice President':
            return hasRole(t => t.includes('vice president'));
          case 'Patron':
            return hasRole(t => t.includes('patron') && !t.includes('vice'));
          case 'Vice Patron':
            return hasRole(t => t.includes('vice patron'));
          case 'Treasurer':
            return hasRole(t => (t.includes('treasurer') || t.includes('treasure')) && !t.includes('assistant'));
          case 'Asst Treasurer':
            return hasRole(t => t.includes('assistant treasurer') || t.includes('assistant treasure'));
          default:
            return true;
        }
      })();

      return matchesSearch && matchesYear && matchesRole;
    });
  }, [initialMembers, query, selectedYear, selectedRole]);

  // Pagination Logic
  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / itemsPerPage));
  const currentMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't change pages if the user is typing in the search bar
      if (document.activeElement?.tagName === 'INPUT') return;

      if (e.key === 'ArrowRight') {
        setCurrentPage(p => Math.min(totalPages, p + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage(p => Math.max(1, p - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const downloadCSV = () => {
    // Define CSV headers
    const headers = ['Membership No', 'Full Name', 'Email', 'Phone', 'Occupation', 'Positions'];
    
    // Convert members to CSV rows
    const rows = filteredMembers.map(member => {
      // Format positions as a single string
      const positionsStr = member.positions.map(p => `${p.title} (${p.year})`).join('; ');
      
      // Escape fields that might contain commas
      return [
        `"${member.membershipNumber || ''}"`,
        `"${member.fullName || ''}"`,
        `"${member.email || ''}"`,
        `"${member.phoneNumber || ''}"`,
        `"${member.occupation || ''}"`,
        `"${positionsStr}"`
      ].join(',');
    });
    
    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows].join('\n');
    
    // Create a blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `rcoba_members_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="main-content container">
      {isAdmin && (
        <div className="admin-controls animate-fade-in" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', gap: '12px' }}>
          <button 
            onClick={async () => {
              const { adminLogout } = await import('@/app/admin/actions');
              await adminLogout();
            }}
            style={{ padding: '12px 24px', background: 'var(--color-maroon)', color: 'white', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            🔒 Log Out (View as Public)
          </button>
          <button 
            onClick={downloadCSV}
            style={{ padding: '12px 24px', background: '#10b981', color: 'white', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            📥 Export CSV
          </button>
          <button 
            onClick={() => { setEditingMember(null); setIsModalOpen(true); }}
            style={{ padding: '12px 24px', background: '#2563eb', color: 'white', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            + Add New Member
          </button>
        </div>
      )}
      
      {/* Sponsorship Message Section */}
      <SponsorshipMessage />

      {/* Dashboard Section */}
      <div className="dashboard-grid animate-fade-in">
        <div 
          className={`dashboard-card clickable ${selectedRole === null ? 'active' : ''}`}
          onClick={() => { setSelectedRole(null); setCurrentPage(1); }}
        >
          <Users size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Total Members</span>
            <span className="dashboard-value">{totalMembers}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Principal' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Principal'); setCurrentPage(1); }}
        >
          <GraduationCap size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Principals</span>
            <span className="dashboard-value">{principalsCount}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Secretary' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Secretary'); setCurrentPage(1); }}
        >
          <BookOpen size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Secretaries</span>
            <span className="dashboard-value">{secretaries}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Asst Secretary' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Asst Secretary'); setCurrentPage(1); }}
        >
          <PenTool size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Asst Secretaries</span>
            <span className="dashboard-value">{assistantSecretaries}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Vice President' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Vice President'); setCurrentPage(1); }}
        >
          <Award size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Vice Presidents</span>
            <span className="dashboard-value">{vicePresidents}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Patron' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Patron'); setCurrentPage(1); }}
        >
          <Shield size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Patrons</span>
            <span className="dashboard-value">{patrons}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Vice Patron' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Vice Patron'); setCurrentPage(1); }}
        >
          <Star size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Vice Patrons</span>
            <span className="dashboard-value">{vicePatrons}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Treasurer' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Treasurer'); setCurrentPage(1); }}
        >
          <Landmark size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Treasurers</span>
            <span className="dashboard-value">{treasurers}</span>
          </div>
        </div>
        <div 
          className={`dashboard-card clickable ${selectedRole === 'Asst Treasurer' ? 'active' : ''}`}
          onClick={() => { setSelectedRole('Asst Treasurer'); setCurrentPage(1); }}
        >
          <Coins size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Asst Treasurers</span>
            <span className="dashboard-value">{assistantTreasurers}</span>
          </div>
        </div>
        <div className="dashboard-card glass">
          <Calendar size={24} className="dashboard-icon" />
          <div className="dashboard-info">
            <span className="dashboard-label">Today</span>
            <span className="dashboard-value date-value">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      {selectedRole === null && (
        <DashboardCharts members={initialMembers} />
      )}

      <div className="search-filter-container animate-fade-in">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search members by name or membership number..." 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1); // Reset page on search
            }}
          />
          <Search className="search-icon" size={24} />
        </div>

        <select 
          className="year-filter"
          value={selectedRole || 'All'}
          onChange={(e) => {
            setSelectedRole(e.target.value === 'All' ? null : e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Roles</option>
          <option value="Patron">Patrons</option>
          <option value="Vice Patron">Vice Patrons</option>
          <option value="Principal">Principals</option>
          <option value="President">Presidents</option>
          <option value="Vice President">Vice Presidents</option>
          <option value="Secretary">Secretaries</option>
          <option value="Asst Secretary">Asst Secretaries</option>
          <option value="Treasurer">Treasurers</option>
          <option value="Asst Treasurer">Asst Treasurers</option>
          <option value="Committee Member">Committee Members</option>
        </select>

        <select 
          className="year-filter"
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
            setCurrentPage(1); // Reset page on filter
          }}
        >
          <option value="All">All Years</option>
          {availableYears.map(year => (
            <option key={year} value={year}>Committee of {year}</option>
          ))}
        </select>
      </div>

      {currentMembers.length > 0 ? (
        <>
          <div className="members-grid">
            {currentMembers.map(member => (
              <MemberCard 
                key={member.id} 
                member={member} 
                isAdmin={isAdmin}
                onEdit={(m) => {
                  setEditingMember(m);
                  setIsModalOpen(true);
                }}
                onDelete={async (m) => {
                  if (confirm(`Are you sure you want to delete ${m.fullName}?`)) {
                    try {
                      await deleteMember(m.id);
                      router.refresh();
                    } catch (e) {
                      console.error(e);
                      alert('Failed to delete member');
                    }
                  }
                }}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination-container glass">
              <button 
                className="pagination-button"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <span className="pagination-text">
                Page {currentPage} of {totalPages}
              </span>
              
              <button 
                className="pagination-button"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state animate-fade-in glass" style={{ borderRadius: '20px' }}>
          <UserX className="empty-state-icon" size={64} />
          <h2>No members found</h2>
          <p>We couldn't find anyone matching your search and filter criteria. Try adjusting them.</p>
        </div>
      )}
      {/* Admin Member Modal */}
      <MemberModal 
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingMember(null); }}
        member={editingMember}
        onSuccess={() => {
          // Refresh the data to show the new/updated member
          router.refresh();
        }}
      />
    </main>
  );
}
