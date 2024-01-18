import { Product } from "./product";
import { RatingFarmer } from "./ratingFarmer";

export interface Farmer {
  id: string;
  nama: string;
  alamat: string;
  luas_lahan: string;
  no_telp: string;
  jenis_sawah: string;
  foto: string[];
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date | null;
  RatingFarmer: RatingFarmer[];
  Products: Product[];
}
