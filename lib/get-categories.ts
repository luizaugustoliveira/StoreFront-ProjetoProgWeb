// lib/get-categories.ts (na loja)
import { Category } from "@/types"; // ou defina seu tipo

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const getCategories = async (storeId: string): Promise<Category[]> => {
  const res = await fetch(`${URL}/${storeId}/categories`, {
    next: { revalidate: 60 }, // revalidação opcional
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
