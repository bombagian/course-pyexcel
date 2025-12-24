-- Supabase Database Schema for Python in Excel Landing Page
-- Run this in your Supabase SQL Editor to create the leads table

-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL,
  interest_type TEXT NOT NULL CHECK (interest_type IN ('individual', 'corporate')),
  company_name TEXT,
  team_size TEXT,
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create an index on interest_type for filtering
CREATE INDEX IF NOT EXISTS idx_leads_interest_type ON leads(interest_type);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anonymous users (for the signup form)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read all leads
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for lead analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT
  DATE_TRUNC('day', created_at) AS date,
  interest_type,
  COUNT(*) AS lead_count
FROM leads
GROUP BY DATE_TRUNC('day', created_at), interest_type
ORDER BY date DESC;
