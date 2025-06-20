
-- Create a table for patient reviews
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  review_number SERIAL,
  patient_name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  experience_date DATE,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert reviews (public submissions)
CREATE POLICY "Allow insert for all" ON public.reviews
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to select approved/verified reviews
CREATE POLICY "Allow select verified reviews" ON public.reviews
  FOR SELECT
  USING (is_verified = true);

-- Create index for better performance
CREATE INDEX idx_reviews_rating ON public.reviews(rating);
CREATE INDEX idx_reviews_created_at ON public.reviews(created_at DESC);
CREATE UNIQUE INDEX idx_reviews_number ON public.reviews(review_number);

-- Add constraint to limit review_number to reasonable range
ALTER TABLE public.reviews
ADD CONSTRAINT check_review_number_limit
CHECK (review_number <= 1000000);
