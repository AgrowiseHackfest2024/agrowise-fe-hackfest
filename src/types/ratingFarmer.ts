import { Farmer } from "./farmer";
import { User } from "./user";

export interface RatingFarmer {
  id: string;
  farmer_id: string;
  farmer: Farmer;
  user_id: string;
  user: User;
  rating: number;
  review: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
}
