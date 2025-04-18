-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add row level security policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" 
  ON contact_submissions 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users
CREATE POLICY "Allow reads for authenticated users only" 
  ON contact_submissions 
  FOR SELECT 
  TO authenticated
  USING (true);
