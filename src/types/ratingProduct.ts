import { Product } from "./product";
import { User } from "./user";

export interface RatingProduct {
  id: string;
  product_id: string;
  product: Product;
  user_id: string;
  user: User;
  rating: number;
  review: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
}
