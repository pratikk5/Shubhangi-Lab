
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, Users, MessageSquare, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  review_number: number;
  patient_name: string;
  rating: number;
  review_text: string;
  experience_date: string | null;
  created_at: string;
}

// Separate interface for form submission that includes email
interface ReviewSubmission {
  patient_name: string;
  email: string;
  rating: number;
  review_text: string;
  experience_date: string | null;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    patient_name: '',
    email: '',
    rating: 5,
    review_text: '',
    experience_date: ''
  });

  // Fetch verified reviews
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, review_number, patient_name, rating, review_text, experience_date, created_at')
        .eq('is_verified', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        toast({
          title: "Error",
          description: "Failed to load reviews",
          variant: "destructive",
        });
      } else {
        setReviews(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([{
          patient_name: formData.patient_name,
          email: formData.email,
          rating: formData.rating,
          review_text: formData.review_text,
          experience_date: formData.experience_date || null,
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you for your review!",
        description: "Your review has been submitted and will be published after verification.",
      });

      // Reset form
      setFormData({
        patient_name: '',
        email: '',
        rating: 5,
        review_text: '',
        experience_date: ''
      });

    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Sanitize patient name for privacy (show only first name + last initial)
  const sanitizePatientName = (fullName: string): string => {
    if (!fullName) return 'Anonymous';
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 1) return nameParts[0];
    return `${nameParts[0]} ${nameParts[1].charAt(0)}.`;
  };

  // Render star rating
  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Patient Reviews & Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our patients say about their lab experience and share your own feedback
          </p>

          {/* Overall Rating Stats */}
          {reviews.length > 0 && (
            <div className="mt-8 flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mt-1">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="text-sm text-gray-500 mt-1">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{reviews.length}</div>
                <div className="text-sm text-gray-500">Total Reviews</div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Review Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <MessageSquare className="mr-2" />
                Share Your Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="patient_name">Your Name *</Label>
                  <Input
                    id="patient_name"
                    value={formData.patient_name}
                    onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience_date">Experience Date</Label>
                  <Input
                    id="experience_date"
                    type="date"
                    value={formData.experience_date}
                    onChange={(e) => setFormData({...formData, experience_date: e.target.value})}
                    placeholder="When did you visit us?"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Rating *</Label>
                  <div className="flex items-center space-x-2">
                    {renderStars(formData.rating, true, (rating) =>
                      setFormData({...formData, rating})
                    )}
                    <span className="text-sm text-gray-600">({formData.rating}/5)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review_text">Your Review *</Label>
                  <Textarea
                    id="review_text"
                    value={formData.review_text}
                    onChange={(e) => setFormData({...formData, review_text: e.target.value})}
                    required
                    placeholder="Share your experience with our lab services..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews Display */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <Users className="mr-2" />
              Patient Reviews
            </h3>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="h-16 bg-gray-200 rounded"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {reviews.map((review) => (
                  <Card key={review.id} className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{sanitizePatientName(review.patient_name)}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            {renderStars(review.rating)}
                            {review.experience_date && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(review.experience_date).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          #{review.review_number}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.review_text}</p>
                      <div className="text-xs text-gray-500 mt-3">
                        {new Date(review.created_at).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
