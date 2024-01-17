import { RatingFarmer } from "@/types/ratingFarmer";
import { RatingProduct } from "@/types/ratingProduct";

export const calculateAverageRating = (ratings: RatingFarmer[] | RatingProduct[] | null) => {
  if (!ratings || ratings.length === 0) return 0;

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = totalRating / ratings.length;

  return parseFloat(averageRating.toFixed(1));
};