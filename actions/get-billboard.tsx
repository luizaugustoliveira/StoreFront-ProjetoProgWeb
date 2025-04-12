import { Billboard } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getBillboard = async (
  storeId: string,
  billboardId: string
): Promise<Billboard> => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/${storeId}/billboards/${billboardId}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch billboard:", res.status, errorText);
      throw new Error("Failed to fetch billboard");
    }

    const data: Billboard = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getBillboard:", error);
    throw error;
  }
};

export default getBillboard;
