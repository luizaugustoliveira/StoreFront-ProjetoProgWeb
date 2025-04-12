import { Product } from "@/types";

const getProduct = async (id: string, storeId: string): Promise<Product> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/products/${id}`;

  const res = await fetch(URL);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Erro ao buscar produto:", errorText);
    throw new Error(`Erro ao buscar produto: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export default getProduct;
