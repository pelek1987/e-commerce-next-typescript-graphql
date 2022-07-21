import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { ProductListItem } from "../../components/Product";
import {
  GetAllProductsDocument,
  GetAllProductsQuery,
} from "../../generated/graphql";
import { apolloClient } from "../../graphql/apolloClient";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = data;

  return (
    <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <li key={product.slug} className="shadow-lg border-2">
          <ProductListItem
            data={{
              id: product.slug,
              title: product.name,
              thumbnailUrl: product.images[0].url,
              thumbnailAlt: product.name,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;

// export interface FakeStoreApiResponse {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   longDescription: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetAllProductsQuery>({
    query: GetAllProductsDocument,
  });

  return {
    props: {
      data,
    },
  };
};
