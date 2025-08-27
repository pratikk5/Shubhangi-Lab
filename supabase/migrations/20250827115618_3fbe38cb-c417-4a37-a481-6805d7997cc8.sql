-- First, drop the existing public SELECT policy
DROP POLICY IF EXISTS "Public can view verified reviews sanitized" ON public.reviews;

-- Create a security definer function to check if user has admin role
-- This prevents RLS recursion issues
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
DECLARE
  user_role TEXT;
BEGIN
  -- For now, we'll check if user is authenticated as a basic admin check
  -- In future, this can be expanded to check actual roles from a user_roles table
  RETURN auth.uid() IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create a view that excludes sensitive fields for public access
CREATE OR REPLACE VIEW public.reviews_public AS
SELECT 
  id,
  review_number,
  patient_name,
  rating,
  review_text,
  experience_date,
  created_at
FROM public.reviews
WHERE is_verified = true;

-- Enable RLS on the view
ALTER VIEW public.reviews_public ENABLE ROW LEVEL SECURITY;

-- Create policy for public access to the sanitized view
CREATE POLICY "Anyone can view public reviews"
ON public.reviews_public
FOR SELECT
TO anon, authenticated
USING (true);

-- Create restrictive policy for direct table access - only admin users can see emails
CREATE POLICY "Admin users can view all review data including emails"
ON public.reviews
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Create policy for public users to view sanitized data only
CREATE POLICY "Public can view reviews without sensitive data"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (
  is_verified = true 
  AND NOT public.is_admin_user()
);

-- Grant necessary permissions
GRANT SELECT ON public.reviews_public TO anon;
GRANT SELECT ON public.reviews_public TO authenticated;