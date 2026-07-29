import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MemberCard from '../src/components/MemberCard';
import { Member } from '../src/data/members';

describe('MemberCard Component', () => {
  const mockMember: Member = {
    id: 1,
    fullName: 'Test User',
    membershipNumber: 'RC-1234',
    email: 'test@example.com',
    phoneNumber: '0712345678',
    occupation: 'Software Engineer',
    positions: [
      { year: '2024', title: 'President' }
    ]
  };

  it('renders member information correctly', () => {
    render(<MemberCard member={mockMember} isAdmin={false} />);
    
    // Check if name and occupation render
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    
    // Check if contact info renders
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('0712345678')).toBeInTheDocument();
    expect(screen.getByText('RC-1234')).toBeInTheDocument();

    // Check if positions render
    expect(screen.getByText('President (2024)')).toBeInTheDocument();
  });

  it('hides edit and delete buttons when isAdmin is false', () => {
    const { container } = render(<MemberCard member={mockMember} isAdmin={false} />);
    
    // The buttons have inline styles and use lucide-react icons, 
    // we can check that there are no buttons rendered inside the absolute div.
    // An easy way is to check that the absolute div doesn't exist, but since it's conditionally rendered:
    const editButton = container.querySelector('button');
    expect(editButton).not.toBeInTheDocument();
  });

  it('shows edit and delete buttons when isAdmin is true', () => {
    const mockOnEdit = jest.fn();
    const mockOnDelete = jest.fn();

    const { container } = render(
      <MemberCard 
        member={mockMember} 
        isAdmin={true} 
        onEdit={mockOnEdit} 
        onDelete={mockOnDelete} 
      />
    );
    
    // Check that there are two buttons rendered for admin
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(2);

    // Simulate clicks
    fireEvent.click(buttons[0]); // Edit button
    expect(mockOnEdit).toHaveBeenCalledWith(mockMember);

    fireEvent.click(buttons[1]); // Delete button
    expect(mockOnDelete).toHaveBeenCalledWith(mockMember);
  });
});
