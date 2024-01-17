import { Product } from "./product";

export interface OrderItem {
  id: string;
  product_id: string;
  product: Product;
  price: number;
  quantity: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
  order_id: string;
}
