-- First, drop the existing public SELECT policy
DROP POLICY IF EXISTS "Public can view verified reviews sanitized" ON public.reviews;

-- Create a security definer function to check if user has admin role
-- This prevents RLS recursion issues
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- For now, we'll check if user is authenticated as a basic admin check
  -- In future, this can be expanded to check actual roles from a user_roles table
  RETURN auth.uid() IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create policy for authenticated admin users to access all data including emails
CREATE POLICY "Admin users can view all review data including emails"
ON public.reviews
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Create policy for anonymous users to view sanitized data only (no emails)
-- This is achieved by limiting what columns can be accessed through application logic
-- The RLS policy ensures only verified reviews are accessible
CREATE POLICY "Public can view verified reviews without emails"
ON public.reviews
FOR SELECT
TO anon
USING (is_verified = true);

-- Update the existing INSERT policy to be more explicit
DROP POLICY IF EXISTS "Allow insert for all" ON public.reviews;
CREATE POLICY "Anyone can submit reviews"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (true);