import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType, MarkdownResult } from "../../types/utils";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetOneProductDetailsBySlugDocument,
  GetOneProductDetailsBySlugQuery,
  GetOneProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../generated/graphql";

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
          id: data.slug,
          title: data.name,
          description: data.description,
          longDescription: data.longDescription,
          thumbnailUrl: data.images[0].url,
          thumbnailAlt: data.name,
          rating: 5,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((el) => ({
      params: {
        productId: el.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPathsType<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<
    GetOneProductDetailsBySlugQuery,
    GetOneProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: params.productId,
    },
    query: GetOneProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};
