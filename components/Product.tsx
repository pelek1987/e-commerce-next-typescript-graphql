import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ReactMarkdownWithLink } from "./ReactMarkdownWithLink";
import { MarkdownResult } from "../types/utils";
import { useCartState } from "./Cart/CartContext";

interface IProductDetails {
  id: string;
  title: string;
  description: string;
  longDescription: MarkdownResult;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductDetailsProps {
  data: IProductDetails;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <NextSeo
          title={data.title}
          description={data.description}
          canonical={`https://e-commerce-nest-typescript-graphqlt.vercel.app/products/${data.id}`}
          openGraph={{
            url: `https://e-commerce-nest-typescript-graphqlt.vercel.app/products/${data.id}`,
            title: data.title,
            description: data.description,
            images: [
              {
                url: data.thumbnailUrl,
                width: 800,
                height: 600,
                alt: data.thumbnailAlt,
                type: "image/jpeg",
              },
            ],
            site_name: "Mój sklep",
          }}
        />
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <h2 className="p-4 text-4xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
        <ReactMarkdownWithLink>{data.longDescription}</ReactMarkdownWithLink>
      </article>
      <Rating rating={data.rating} />
    </>
  );
};

type ProductListItemType = Pick<
  IProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItemType;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const { addItemToCart } = useCartState();

  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <div className="p-4">
        <Link href={`/products/${data.id}`}>
          <a>
            <h2 className="pb-6 text-2xl font-bold">{data.title}</h2>
          </a>
        </Link>
        <button
          onClick={() =>
            addItemToCart({
              id: data.id,
              title: data.title,
              price: 19.99,
              count: 1,
            })
          }
          className="text-white bg-gradient-to-r hover:bg-gradient-to-l from-purple-800 to-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
