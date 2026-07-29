import DirectoryClient from '@/src/components/DirectoryClient';
import { supabase } from '@/src/lib/supabase';
import { createClient } from '@/src/lib/supabase-server';
import { Member } from '@/src/data/members';

export default async function Home() {
  const supabaseServer = createClient();
  const { data: { user } } = await supabaseServer.auth.getUser();
  const isAdmin = !!user;

  // Fetch members and their nested positions from Supabase
  const { data: rawMembers, error } = await supabase
    .from('members')
    .select(`
      id,
      name,
      phone,
      email,
      address,
      occupation,
      positions ( year, title )
    `);

  if (error) {
    console.error("Failed to fetch members from Supabase", error);
  }

  // Format the data to match the expected Member type
  const members: Member[] = (rawMembers || []).map(m => ({
    id: m.id.toString(),
    fullName: m.name,
    membershipNumber: m.address || '',
    phoneNumber: m.phone || '',
    email: m.email || '',
    occupation: m.occupation || '',
    positions: m.positions || []
  }));

  return <DirectoryClient initialMembers={members} isAdmin={isAdmin} />;
}
