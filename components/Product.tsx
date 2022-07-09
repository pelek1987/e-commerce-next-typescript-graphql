import Link from "next/link";
import { Rating } from "./Rating";
import ReactMarkdown from "react-markdown";

interface IProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className="p-4 text-4xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
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
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};
