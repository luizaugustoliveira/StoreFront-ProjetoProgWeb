import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // Garante que a página será regenerada a cada request

const storeId = "072c9388-3551-466d-9faa-943bf41a073b"; // StoreId fixo temporariamente

const HomePage = async () => {
  try {
    const [products, billboard] = await Promise.all([
      getProducts({ storeId, isFeatured: true }),
      getBillboard(storeId, "651de0afa1d6c343ce68fa8b"),
    ]);

    return (
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Failed to load homepage data:", error);
    return (
      <Container>
        <div className="p-10 text-center text-red-600 font-bold">
          Falha ao carregar os dados. Tente novamente mais tarde.
        </div>
      </Container>
    );
  }
};

export default HomePage;
