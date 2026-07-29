'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticate(formData: FormData) {
  const passcode = formData.get('passcode');

  // We check against the environment variable or a fallback password for local testing
  const correctPasscode = process.env.SITE_PASSCODE || 'RICHMOND100';

  if (passcode === correctPasscode) {
    // Set a secure HTTP-only cookie (using v3 to log out old devices)
    cookies().set('rcoba_auth_v3', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 1, // 1 hour
      path: '/',
    });
    
    redirect('/');
  } else {
    return { error: 'Incorrect passcode' };
  }
}
