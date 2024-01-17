import { OrderItem } from "./orderItem";
import { RatingProduct } from "./ratingProduct";

export interface Product {
  id: string;
  nama: string;
  deskripsi: string;
  stok: number;
  harga: number;
  foto: string[];
  sold: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
  RatingProduct: RatingProduct[];
  OrderItem: OrderItem[];
}
