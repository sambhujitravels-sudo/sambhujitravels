// Uses Supabase Management API to run SQL migration
// Requires a personal access token from https://supabase.com/dashboard/account/tokens
// OR we can use the REST API with service role to insert test data

const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhb3l1Z2xzbnJwanp6bnNrdXVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTk3NDI2OCwiZXhwIjoyMTA1NTUwMjY4fQ.JepxthYawm2wvk5LK3dIXhl2P7HC3u3YWCJFxQo8Th0';
const projectRef = 'uaoyuglsnrpjzznskuuj';

// Check what tables exist
fetch(`https://${projectRef}.supabase.co/rest/v1/booking_queries?limit=1`, {
  headers: {
    'apikey': serviceKey,
    'Authorization': 'Bearer ' + serviceKey,
    'Content-Type': 'application/json'
  }
}).then(r => {
  console.log('Table check status:', r.status);
  return r.text();
}).then(t => {
  if (t.includes('relation') && t.includes('does not exist')) {
    console.log('TABLE DOES NOT EXIST — need to create it via SQL Editor');
  } else {
    console.log('Response:', t.slice(0, 200));
  }
});
