import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

export const revalidate = 0;

const storeId = "072c9388-3551-466d-9faa-943bf41a073b"; // mesmo storeId usado no HomePage

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  try {
    const product = await getProduct(params.productId, storeId);

    const suggestedProducts = await getProducts({
      storeId,
      categoryId: product?.category?.id,
    });

    return (
      <div className="bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Gallery images={product.images} />
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <Info data={product} />
              </div>
            </div>

            <hr className="my-10" />

            <ProductList title="Produtos sugeridos" items={suggestedProducts} />
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar produto:", error);
    return (
      <Container>
        <div className="p-10 text-center text-red-600 font-bold">
          Produto não encontrado ou erro ao carregar os dados.
        </div>
      </Container>
    );
  }
};

export default ProductPage;
