import { Member, MemberPosition } from '../data/members';

export function parseMembersCSV(csvContent: string): Member[] {
  const lines = csvContent.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  // Skip the header row
  const dataLines = lines.slice(1);
  const members: Member[] = [];

  for (const line of dataLines) {
    // Basic CSV split by comma (assuming no commas inside fields for this simple implementation)
    const [id, fullName, membershipNumber, occupation, email, phoneNumber, positionsStr] = line.split(',');

    const positions: MemberPosition[] = [];
    if (positionsStr && positionsStr.trim()) {
      const posArray = positionsStr.split('|');
      for (const pos of posArray) {
        const [title, yearStr] = pos.split(':');
        if (title && yearStr) {
          positions.push({
            title: title.trim(),
            year: parseInt(yearStr.trim(), 10)
          });
        }
      }
    }

    members.push({
      id: id || Math.random().toString(),
      fullName: fullName || '',
      membershipNumber: membershipNumber || '',
      occupation: occupation || '',
      email: email || '',
      phoneNumber: phoneNumber || '',
      positions
    });
  }

  return members;
}
