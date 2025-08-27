-- Update the security definer function to set search_path for security
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- For now, we'll check if user is authenticated as a basic admin check
  -- In future, this can be expanded to check actual roles from a user_roles table
  RETURN auth.uid() IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';