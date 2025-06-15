
-- Create table for storing appointments
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  additional_info TEXT,
  tests TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointments (must use only WITH CHECK for INSERT)
CREATE POLICY "Allow insert for all" ON public.appointments
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to select appointments
CREATE POLICY "Allow select for all" ON public.appointments
  FOR SELECT
  USING (true);

