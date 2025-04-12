import { Color } from "@/types";

interface Query {
  storeId: string;
}

const getColors = async ({ storeId }: Query): Promise<Color[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/colors`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch colors");
  }

  return res.json();
};

export default getColors;
