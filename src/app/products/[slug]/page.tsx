import {notFound} from "next/navigation";
import Head from "next/head";
import {getProduct, getProducts} from "@/service/products";
import Image from "next/image";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export default async function Product({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name}!! in app</h1>
      <Image
        src={`/images/${product?.image}`}
        alt={product?.name}
        width='300'
        height='300'
      />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}