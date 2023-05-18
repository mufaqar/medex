import { useRouter } from "next/router";
import React from "react";
import { client } from "../../config/client";
import { Products } from "../../config/quries";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Head from "next/head";
import NotFound from "../../components/404";

const Categories = ({ AllProducts }) => { 

  const router = useRouter();
  const params = router?.query?.slug;
  const FilterProduct = AllProducts?.filter(
    (item) => item?.productCategories?.nodes[0].slug === params
  );

  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = FilterProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(FilterProduct.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % FilterProduct.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <section className="container mx-auto mt-40 grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5">
        {currentItems.length > 0 && (
          currentItems?.map((item, index) => (
            <div key={index} className="mx-auto">
              <figure className="flex bg-gray-50 justify-center items-center overflow-hidden">
                <Link href={`/product/${item.slug}`}>
                  <img
                    src={item?.featuredImage?.node?.mediaItemUrl}
                    alt= {item.title}
                    className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </figure>
              <h4 className="text-base leading-6 text-gray-400 mt-1.5 mb-1.5">
                {item?.productCategories.nodes[0]?.name}
              </h4>
              <Link
                href={`/product/${item.slug}`}
                className="text-lg leading-5 mb-2 hover:text-[#BF1800] "
              >
                {item.title}
              </Link>
            </div>
          ))
        )
        }
      </section>
      {currentItems.length <= 0 && <NotFound/>}
      <section className="container pagination mx-auto mb-40 mt-20">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          pageClassName="bg-gray-100 px-2 p-1 rounded-md hover:bg-[#BF1800] hover:text-white"
          activeClassName="active text-white"
          containerClassName="flex space-x-4 pagination_wrapper"
          previousClassName="previous bg-[#BF1800] text-white px-2 p-1 rounded-md hover:bg-black hover:text-white"
          nextClassName="next bg-[#BF1800] text-white px-2 p-1 rounded-md hover:bg-black hover:text-white"
        />
      </section>
    </>
  );
};

export default Categories;

export async function getStaticProps() {
  const response = await client.query({
    query: Products,
  });

  const AllProducts = response.data.products.nodes;
  return {
    props: {
      AllProducts,
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
