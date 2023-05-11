import Banner from '@/components/banner';
import Head from 'next/head';
import parse from 'html-react-parser';
import {
  CategoryBox,
  ProductBox,
  Cta,
  Feature_Category,
} from '../components/imports';
import { client } from '../config/client';
import {
  FillerProducts,
  Products,
  ProductsCategories,
  FrontPage,
} from '../config/quries';

export default function Home({ AllProducts, AllCategories, HomePage }) {
  //console.log(HomePage);
  const fullHead = parse(HomePage);
  return (
    <>
      <Head>
        <title>
          Best Quality Medical Equipment in Pakistan! - Medex Worldwide
        </title>
        {fullHead}
      </Head>
      <Banner />
      <CategoryBox />
      <ProductBox products={AllProducts.slice(0, 5)} />
      <Feature_Category categories={AllCategories.slice(0, 4)} />
      {/* <ProductBox products={AllProducts.slice(5, 10)} /> */}
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: FillerProducts,
  });
  const categories = await client.query({
    query: ProductsCategories,
  });
  const FrontPageseo = await client.query({
    query: FrontPage,
  });

  const AllProducts = response.data.products.nodes;
  const AllCategories = categories.data.productCategories.nodes;
  const HomePage = FrontPageseo.data.page.seo.fullHead;
  return {
    props: {
      AllProducts,
      AllCategories,
      HomePage,
    },
  };
}
