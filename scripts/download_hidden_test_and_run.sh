#!/bin/bash
set -e

# Extract assessment name
IFS='_' read -ra parts <<< "$REPO_NAME"
export ASSESSMENT_NAME="${parts[0]}"
export FLOW_NAME="$ASSESSMENT_NAME"

echo "Flow Name derived from REPO_NAME: $ASSESSMENT_NAME"

# Run Node.js script to fetch and download test case
node <<'EOF'
const { createClient } = require('@supabase/supabase-js');
const { execSync } = require('child_process');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
  const Assessment_Name = process.env.FLOW_NAME;

  const { data, error } = await supabase
    .from('assessments')           
    .select('*')                
    .eq('name', Assessment_Name);  

  if (error) {
    console.error('Supabase error:', error);
    process.exit(1);
  }
  if (!data || data.length === 0) {
    console.error('No rows returned from Supabase.');
    process.exit(1);
  }

  const url = data[0]?.hidden_test_cases_link;
  if (!url) {
    console.error('No S3 URL found in record.');
    process.exit(1);
  }

  try {
    execSync(`curl -f -o tests/test-case-private.test.js "${url}"`, { stdio: 'inherit' });
  } catch (e) {
    console.error('Failed to download test case from S3:', e.message);
    process.exit(1);
  }
})();
EOF

# Run unit tests silently
echo "Running unit tests..."
npm run unit > /dev/null 2>&1
TEST_EXIT_CODE=$?

# Always exit 0
exit 0
