import Link from "next/link";
import {getProducts} from "@/service/products";
import MeowArticle from "@/Components/MeowArticle";
import clothesImage from '../../../public/images/test.jpg';
import Image from "next/image";

// export const revalidate = 3;

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지! t1</h1>
      {/*<Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={400}
        height={400}
      />*/}
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