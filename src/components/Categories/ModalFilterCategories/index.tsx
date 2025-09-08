import React from "react";
import { getAllCategories } from "../action";
import { getAllCities } from "@/components/Cities/action";
import { TCategory } from "../types";
import { TCity } from "@/components/Cities/types";
import FormFilterCategories from "./Form";

type Props = {
  categorySlug: string;
};

async function ModalFilterCategories({ categorySlug }: Props) {
  const { data: categories }: { data: TCategory[] } = await getAllCategories();
  const { data: cities }: { data: TCity[] } = await getAllCities();
  return (
    <FormFilterCategories
      categories={categories}
      cities={cities}
      categorySlug={categorySlug}
    />
  );
}

export default ModalFilterCategories;
