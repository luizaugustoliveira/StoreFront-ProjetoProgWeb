import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

interface Query {
  storeId?: string; // Adicionado storeId
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  if (!query.storeId) {
    throw new Error("storeId is required in getProducts");
  }

  const url = qs.stringifyUrl({
    url: `${URL}/${query.storeId}/products`,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("[GET_PRODUCTS_ERROR]", await res.text());
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getProducts;
