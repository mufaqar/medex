import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { client } from '../../config/client';
import { BlogPostsQuery, Products } from '../../config/quries';
import ReactPaginate from 'react-paginate';
import Footer from '../../components/footer';

function ProductsPage({ AllProducts, blogs }) {

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = AllProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(AllProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % AllProducts.length;
    setItemOffset(newOffset);
  };


  return (
    <main>
      <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
        <div className="w-full">
          <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
            Products Page
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
        <div className="my-8 lg:my-12">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5">
            {currentItems?.map((item, index) => (
              <div key={index} className="mx-auto">
                <figure className="bg-gray-50 w-full h-[395px] flex justify-center items-center">
                  <Link
                    href={`/product/${item?.slug}`}
                    className='w-full'>
                    <img
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      className='w-full object-cover h-[395px]'
                      alt=""
                    />
                  </Link>
                </figure>
                <h4 className="text-base leading-6 text-primary mt-1.5 mb-1.5">
                  {item?.types.nodes[0]?.name}
                </h4>
                <Link
                  href={`/product/${item?.slug}`}
                  className="text-lg font-medium leading-5 mb-2 text-title-color hover:text-Brown "
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="container pagination mx-auto mb-20 mt-20 md:px-0 px-4">
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
    </main>
  );
}

export default ProductsPage;

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
