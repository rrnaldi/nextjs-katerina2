import { TCategory } from "@/components/Categories/types";
import { TCity } from "../Cities/types";
import { TTier } from "../Tiers/types";
import { TKitchen } from "../Kitchen/types";

export type TShow = "popular" | "newest"
export type TPackage = {
     "id": number,
            "name": string,
            "slug":string,
            "is_popular": 0 | 1,
            "thumbnail": string,
            "about":string,
            "city": TCity,
            "category": TCategory,
            "kitchen": TKitchen,
            "tiers": TTier[]
};