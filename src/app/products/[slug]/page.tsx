import {notFound} from "next/navigation";
import Head from "next/head";

type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }
  return (
    <h1>{params.slug}!! in app</h1>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product
  }));
}