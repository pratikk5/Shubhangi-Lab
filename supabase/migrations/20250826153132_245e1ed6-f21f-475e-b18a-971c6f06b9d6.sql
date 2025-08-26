-- Remove the problematic security definer view
DROP VIEW IF EXISTS public.public_reviews;

-- Instead, we'll handle the data sanitization in the application layer
-- The RLS policy already restricts to verified reviews only
-- The application will be responsible for showing only sanitized data