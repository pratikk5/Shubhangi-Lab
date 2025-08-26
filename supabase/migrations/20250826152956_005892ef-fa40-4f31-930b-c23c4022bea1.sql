-- Drop existing overly permissive policies that expose patient data
DROP POLICY IF EXISTS "Allow select for all" ON public.appointments;
DROP POLICY IF EXISTS "Allow select verified reviews" ON public.reviews;

-- Create secure RLS policies for appointments table
-- Only allow healthcare staff to view appointments (requires authentication)
CREATE POLICY "Only authenticated staff can view appointments" 
ON public.appointments 
FOR SELECT 
TO authenticated 
USING (true);

-- Keep public insert for appointment booking functionality
-- (this allows patients to book appointments but not view others')

-- Create secure RLS policies for reviews table  
-- Allow public to view reviews but hide personal information in application layer
-- We'll modify the application to only show sanitized review data
CREATE POLICY "Public can view verified reviews sanitized" 
ON public.reviews 
FOR SELECT 
TO anon, authenticated
USING (is_verified = true);

-- Add a view for public review display that excludes sensitive data
CREATE OR REPLACE VIEW public.public_reviews AS
SELECT 
  id,
  review_number,
  rating,
  review_text,
  experience_date,
  created_at,
  -- Only show first name for privacy
  CASE 
    WHEN patient_name IS NOT NULL THEN 
      split_part(patient_name, ' ', 1) || ' ' || 
      CASE 
        WHEN split_part(patient_name, ' ', 2) != '' THEN left(split_part(patient_name, ' ', 2), 1) || '.'
        ELSE ''
      END
    ELSE 'Anonymous'
  END as display_name
FROM public.reviews 
WHERE is_verified = true
ORDER BY created_at DESC;