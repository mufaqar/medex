import React from 'react';
import { client } from '../config/client';
import { ProductsCategories } from '../config/quries';
import Link from 'next/link';
import Head from 'next/head';

const Categories = ({ AllCategories }) => {
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
            <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
              Categories
            </h2>
          </div>
        </div>
        <div>
          <div className="grid container mx-auto my-20 px-4 gap-4 grid-cols-2 md:grid-cols-4 2xl:gap-5">
            {AllCategories?.map((item, index) => (
              <div key={index} className="mx-auto group relative">
                <Link href={item?.slug}>
                  <figure className="w-full overflow-hidden ">
                    <img
                      src={item?.image?.mediaItemUrl}
                      alt=""
                      className="object-cover w-full h-[250px] lg:h-[320px] group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 ease-out"
                    />
                  </figure>
                  <div className="bg-black/20 absolute top-0 right-0 left-0 bottom-0" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-5 text-center flex flex-col items-center justify-center group">
                    <h4 className="text-lg leading-5 font-bold mb-2 text-white group-hover:text-[#BF1800] ">
                      {item?.name}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

export async function getStaticProps() {
  const categories = await client.query({
    query: ProductsCategories,
  });

  const AllCategories = categories.data.productCategories.nodes;
  return {
    props: {
      AllCategories,
    },
  };
}
