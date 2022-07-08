import { useQuery } from "react-query";
import { ProductListItem } from "../../components/Product";
import { useRouter } from "next/router";
import { first } from "../../utils/functions";

const getProducts = async (page: number): Promise<StoreApiResponse[]> => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${page * 25}`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { query } = useRouter();
  const pageIndex = parseInt(first(query.pageIndex) || "1", 10);
  const { data, isLoading, error } = useQuery(["products", pageIndex], () =>
    getProducts(pageIndex)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>Coś poszło nie tak</h1>;
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data ? (
          data.map((product) => (
            <li key={product.id} className="p-4 shadow-lg border-2">
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                }}
              />
            </li>
          ))
        ) : (
          <div>Brak danych</div>
        )}
      </ul>
      <nav className="border-t border-gray-200 px-4 w-full flex items-center justify-between sm:px-0">
        <div className="hidden md:-mt-px md:flex">
          {new Array(10).fill(0).map((_, index) => {
            return (
              <a
                key={index}
                href={`/products-csr/${index + 1}`}
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                {index + 1}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default ProductsCSRPage;

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}
