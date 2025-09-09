import { TCategory } from "@/components/Categories/types";
import { TCity } from "../Cities/types";
import { TTier } from "../Tiers/types";
import { TKitchen } from "../Kitchen/types";
import { TTestimonials } from "../Testimonials/types";
import { TBonus } from "../Bonuses/types";

export type TShow = "popular" | "newest";
export type TPackage = {
  id: number;
  name: string;
  slug: string;
  is_popular: 0 | 1;
  thumbnail: string;
  about: string;
  city: TCity;
  category: TCategory;
  kitchen: TKitchen;
  tiers: TTier[];
};

export type TPackageDetails = {
  photos: {
    id: number;
    photo: string;
    catering_package_id: number;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
  }[];
  bonuses: TBonus[];
  testimonials: TTestimonials[];
} & TPackage;
