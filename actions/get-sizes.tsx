import { Size } from "@/types";

interface Query {
  storeId: string;
}

const getSizes = async ({ storeId }: Query): Promise<Size[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/sizes`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sizes");
  }

  return res.json();
};

export default getSizes;
