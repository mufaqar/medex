import { useRouter } from "next/router";
import React from "react";
import { client } from "../../config/client";
import { Products, BlogPostsQuery } from "../../config/quries";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Head from "next/head";
import NotFound from "../../components/404";
import Footer from "../../components/footer";
import YoastSeo from "../../components/YoastSeo";

const Categories = ({ AllProducts, blogs }) => {
  const router = useRouter();
  console.log("🚀 ~ file: [slug].jsx:16 ~ Categories ~ router:", router);
  const params = router?.query?.slug;

  const FilterProduct = AllProducts?.filter(
    (item) => item?.types?.nodes[0].slug === params
  );

  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = FilterProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(FilterProduct.length / itemsPerPage);

  console.log(currentItems);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % FilterProduct.length;
    setItemOffset(newOffset);
  };

  const seoMeta = {
    title: router.query.slug.replace(/-/g, " "),
  };

  return (
    <>
      <YoastSeo {...seoMeta} />
      <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
        <div className="w-full">
          <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
            {params}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
        <div className="my-8 lg:my-12">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5">
            {currentItems.length > 0 &&
              currentItems?.map((item, index) => (
                <div key={index} className="mx-auto">
                  <figure className="flex bg-gray-50 justify-center items-center overflow-hidden">
                    <Link href={`/product/${item.slug}`}>
                      <img
                        src={item?.featuredImage?.node?.mediaItemUrl}
                        alt={item.title}
                        className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                    </Link>
                  </figure>
                  <h4 className="text-base leading-6 text-primary mt-1.5 mb-1.5">
                    {item?.types.nodes[0]?.name}
                  </h4>
                  <Link
                    href={`/product/${item.slug}`}
                    className="text-lg font-medium leading-5 mb-2 text-title-color hover:text-Brown "
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      {currentItems.length <= 0 && <NotFound />}
      <section className="container pagination mx-auto mb-40 mt-20 md:px-0 px-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          pageClassName="bg-gray-100 px-2 p-1 hover:bg-Brown hover:text-white"
          activeClassName="active text-white bg-title-color"
          containerClassName="flex space-x-4 pagination_wrapper"
          previousClassName="previous bg-Brown text-white px-2 p-1 hover:bg-title-color hover:text-white"
          nextClassName="next bg-Brown text-white px-2 p-1 hover:bg-title-color hover:text-white"
        />
      </section>
      <Footer blogs={blogs} />
    </>
  );
};

export default Categories;

export async function getStaticProps() {
  const response = await client.query({
    query: Products,
  });
  const blog = await client.query({
    query: BlogPostsQuery,
  });

  const AllProducts = response.data.products.nodes;
  const blogs = blog.data.posts.nodes;
  return {
    props: {
      AllProducts,
      blogs,
    },
  };
}
export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
