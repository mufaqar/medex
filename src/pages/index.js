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
  BlogPostsQuery,
} from '../config/quries';
import Footer from '../components/footer'
import YoastSeo from '../components/YoastSeo';

export default function Home({ AllProducts, AllCategories, HomePage, blogs }) {
  return (
    <>
      <YoastSeo {...HomePage} />
      <Banner />
      {/* <CategoryBox /> */}
      <ProductBox products={AllProducts.slice(0, 5)} />
      <Feature_Category categories={AllCategories.slice(0, 4)} />
      {/* <ProductBox products={AllProducts.slice(5, 10)} /> */}
      <Cta />
      <Footer blogs={blogs}  />
    </>
  );
}

export async function getServerSideProps() {
  const response = await client.query({
    query: FillerProducts,
  });
  const categories = await client.query({
    query: ProductsCategories,
  });
  const FrontPageseo = await client.query({
    query: FrontPage,
  });
  const blog = await client.query({
    query: BlogPostsQuery,
  });

  const AllProducts = response.data.products.nodes;
  const AllCategories = categories.data.types.nodes;
  const HomePage = FrontPageseo.data.page;
  const blogs = blog.data.posts.nodes;
  return {
    props: {
      AllProducts,
      AllCategories,
      HomePage,
      blogs,
    },
  };
}
