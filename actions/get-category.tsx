import { Category } from "@/types";

const getCategory = async (id: string, storeId: string): Promise<Category> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/categories/${id}`;

  const res = await fetch(URL);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Erro ao buscar categoria: ${res.status} ${res.statusText}`
    );
    console.error("Erro na resposta da API:", errorText);
  }

  return res.json();
};

export default getCategory;
