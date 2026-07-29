'use server';

import { createClient } from '@/src/lib/supabase-server';
import { redirect } from 'next/navigation';

export async function adminLogin(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  // Redirect to homepage on successful admin login
  redirect('/');
}

export async function adminLogout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/');
}

// Add Member
export async function addMember(data: any) {
  const supabase = createClient();
  
  // Verify Admin
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: memberData, error: memberError } = await supabase
    .from('members')
    .insert({
      name: data.fullName,
      phone: data.phoneNumber,
      email: data.email,
      address: data.membershipNumber,
      occupation: data.occupation
    })
    .select('id')
    .single();

  if (memberError) throw memberError;

  if (data.positions && data.positions.length > 0) {
    const positionsToInsert = data.positions.map((p: any) => ({
      member_id: memberData.id,
      year: p.year,
      title: p.title
    }));

    const { error: posError } = await supabase
      .from('positions')
      .insert(positionsToInsert);

    if (posError) throw posError;
  }

  return { success: true };
}

// Update Member
export async function updateMember(id: string, data: any) {
  const supabase = createClient();
  
  // Verify Admin
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { error: memberError } = await supabase
    .from('members')
    .update({
      name: data.fullName,
      phone: data.phoneNumber,
      email: data.email,
      address: data.membershipNumber,
      occupation: data.occupation
    })
    .eq('id', id);

  if (memberError) throw memberError;

  // For positions, easiest is to delete all existing and re-insert
  if (data.positions) {
    await supabase.from('positions').delete().eq('member_id', id);
    
    if (data.positions.length > 0) {
      const positionsToInsert = data.positions.map((p: any) => ({
        member_id: id,
        year: p.year,
        title: p.title
      }));

      const { error: posError } = await supabase
        .from('positions')
        .insert(positionsToInsert);

      if (posError) throw posError;
    }
  }

  return { success: true };
}

// Delete Member
export async function deleteMember(id: string) {
  const supabase = createClient();
  
  // Verify Admin
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Positions will cascade delete if foreign key is setup, but we'll do it manually just in case
  await supabase.from('positions').delete().eq('member_id', id);
  const { error } = await supabase.from('members').delete().eq('id', id);

  if (error) throw error;
  return { success: true };
}
