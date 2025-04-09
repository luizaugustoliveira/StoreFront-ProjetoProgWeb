// app/actions/get-categories.ts

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const getCategories = async (storeId: string): Promise<Category[]> => {
  const res = await fetch(`${URL}/${storeId}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export default getCategories;
