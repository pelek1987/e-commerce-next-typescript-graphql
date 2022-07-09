import { InferGetStaticPropsType } from "next";
import { ProductListItem } from "../../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => (
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
      ))}
    </ul>
  );
};

export default ProductsPage;

export interface FakeStoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getStaticProps = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: FakeStoreApiResponse[] = await res.json();
  return {
    props: {
      data,
    },
  };
};
