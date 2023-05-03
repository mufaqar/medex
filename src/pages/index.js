import Banner from "@/components/banner";
import {
  CategoryBox,
  ProductBox,
  Cta,
  Feature_Category,
} from "../components/imports";
import { client } from "../config/client";
import { Products, ProductsCategories } from "../config/quries";

export default function Home({AllProducts,AllCategories}) {
  return (
    <>
      <Banner />
      <CategoryBox />
      <ProductBox products={AllProducts.slice(0,5)} />
      <Feature_Category categories={AllCategories.slice(0,5)}/>
      <ProductBox products={AllProducts.slice(5,10)}/>
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: Products,
  });
  const categories = await client.query({
    query: ProductsCategories,
  });
  
  const AllProducts = response.data.products.nodes;
  const AllCategories = categories.data.productCategories.nodes;
  return {
    props: {
      AllProducts,
      AllCategories
    },
  };
}
