import React from 'react';
import { client } from '../config/client';
import { ProductsCategories, BlogPostsQuery } from '../config/quries';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/footer';


const Categories = ({ AllCategories,blogs }) => {
  //const fullHead = parse(AllCategories.seo.fullHead);
  return (
    <>
      <Head>
        <title> All Categories - Medex Worldwide</title>
        {/* {fullHead} */}
      </Head>
      <section>
        <div className="flex mt-10 justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
              Categories
            </h1>
          </div>
        </div>
        <div>
          <div className="grid container mx-auto my-20 px-4 gap-4 grid-cols-2 md:grid-cols-4 2xl:gap-5">
            {AllCategories?.map((item, index) => (
              <div key={index} className="mx-auto group relative">
                <Link href={"product-category/"+item?.slug}>
                  <figure className="w-full overflow-hidden ">
                    <img
                      src={item?.typesInfo?.featureImage?.mediaItemUrl}
                      alt={item?.name}
                      className="object-cover w-full h-[250px] lg:h-[320px] group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 ease-out"
                    />
                  </figure>
                  <div className="bg-black/20 absolute top-0 right-0 left-0 bottom-0" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-5 text-center flex flex-col items-center justify-center group">
                    <h4 className="text-lg leading-5 font-bold mb-2 text-white group-hover:text-Brown">
                      {item?.name}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer blogs={blogs}  />
    </>
  );
};

export default Categories;

export async function getStaticProps() {
  const categories = await client.query({
    query: ProductsCategories,
  });
  const blog = await client.query({
    query: BlogPostsQuery,
  });

  const AllCategories = categories.data.types.nodes;
  const blogs = blog.data.posts.nodes;
  return {
    props: {
      AllCategories,
      blogs,
    },
  };
}
