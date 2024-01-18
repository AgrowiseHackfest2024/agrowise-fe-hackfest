import { Farmer } from "./farmer";
import { OrderItem } from "./orderItem";
import { User } from "./user";

type StatusPembayaran = "pending" | "success" | "failed";

export interface Order {
  id: string;
  user_id: string;
  user: User;
  farmer_id: string;
  farmer: Farmer;
  total: number;
  status: StatusPembayaran;
  snap_token?: string;
  snap_redirect_url?: string;
  payment_method?: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
  OrderItem: OrderItem[];
}
