import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use service role for inserts bypassing RLS

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Simple CSV parser
function parseCSV(content) {
  const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const result = [];
  
  // Start from line 1 to skip headers (ID,FullName,MembershipNumber,Occupation,Email,PhoneNumber,Positions)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const columns = [];
    let currentColumn = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        columns.push(currentColumn.trim());
        currentColumn = '';
      } else {
        currentColumn += char;
      }
    }
    columns.push(currentColumn.trim());
    
    if (columns.length >= 6) {
      result.push({
        id: columns[0] || '',
        fullName: columns[1] || '',
        membershipNumber: columns[2] || '',
        occupation: columns[3] || '',
        email: columns[4] || '',
        phoneNumber: columns[5] || '',
        positionsString: columns[6] || ''
      });
    }
  }
  return result;
}

async function run() {
  console.log("Cleaning up old corrupted data...");
  // Delete all members (positions will cascade if we set it up, but let's be safe and delete both)
  await supabase.from('positions').delete().neq('id', 0);
  await supabase.from('members').delete().neq('id', 0);

  console.log("Reading CSV...");
  const csvPath = path.join(__dirname, '../public/members.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const rawRows = parseCSV(csvContent);

  console.log(`Found ${rawRows.length} rows in CSV.`);

  console.log("Uploading to Supabase...");

  for (const row of rawRows) {
    if (!row.fullName) continue;

    // 1. Insert Member
    const { data: memberData, error: memberError } = await supabase
      .from('members')
      .insert({
        name: row.fullName,
        phone: row.phoneNumber,
        email: row.email,
        address: row.membershipNumber, // Using address column temporarily for membershipNumber
        occupation: row.occupation
      })
      .select('id')
      .single();

    if (memberError) {
      console.error(`Failed to insert member ${row.fullName}:`, memberError);
      continue;
    }

    // 2. Parse and Insert Positions
    // format: "Role:Year|Role:Year"
    const positionStrings = row.positionsString.split('|').filter(p => p.trim() !== '');
    const positionsToInsert = [];

    for (const posStr of positionStrings) {
      const parts = posStr.split(':');
      if (parts.length >= 2) {
        const title = parts[0].trim();
        const year = parseInt(parts[1].trim());
        if (title && year) {
          positionsToInsert.push({
            member_id: memberData.id,
            year: year,
            title: title
          });
        }
      }
    }

    if (positionsToInsert.length > 0) {
      const { error: posError } = await supabase
        .from('positions')
        .insert(positionsToInsert);

      if (posError) {
        console.error(`Failed to insert positions for ${row.fullName}:`, posError);
      }
    }
  }

  console.log("✅ Migration complete!");
}

run().catch(console.error);
