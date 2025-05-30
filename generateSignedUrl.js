// generateSignedUrl.js

const { createClient } = require('@supabase/supabase-js');

// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://xuzpvjqeospaevrhekkg.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1enB2anFlb3NwYWV2cmhla2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTQ4NzMsImV4cCI6MjA2MzIzMDg3M30.upcCHTMwrM1lj1SpJ63R104Uf1DUl0NNQKlz9hkJevM';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function generateSignedUrl(bucket, path, expiresInSeconds) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, expiresInSeconds);

  if (error) {
    console.error('Error creating signed URL:', error.message);
    process.exit(1);
  }

  console.log('✅ Signed URL:', data.signedUrl);
}

// Usage
generateSignedUrl('assessment-tracker', 'post_hidden.test.js', 1440);
