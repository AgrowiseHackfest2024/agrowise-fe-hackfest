import { Order } from "./order";
import { RatingFarmer } from "./ratingFarmer";
import { RatingProduct } from "./ratingProduct";

export interface User {
  id: string;
  nama: string;
  email: string;
  password: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
  RatingFarmer: RatingFarmer[] | null;
  RatingProduct: RatingProduct[] | null;
  Order: Order[] | null;
}
