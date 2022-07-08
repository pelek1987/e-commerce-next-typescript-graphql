import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import { InferGetStaticPaths } from "../../types/InferGetStaticPaths";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Something went wrong {":-("}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Link href="/products">
        <a>Wróc na stronę główną</a>
      </Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          description: data.description,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export interface FakeStoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: FakeStoreApiResponse[] = await res.json();

  return {
    paths: data.map((el) => ({
      params: {
        productId: el.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: FakeStoreApiResponse | null = await res.json();
  return {
    props: {
      data,
    },
  };
};
