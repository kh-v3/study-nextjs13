import Link from "next/link";
import {getProducts} from "@/service/products";
import MeowArticle from "@/Components/MeowArticle";

// export const revalidate = 3;

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}