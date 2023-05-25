import Link from 'next/link';
import React, { useState } from 'react';
import { BlogPage, BlogPostsQuery } from '../../config/quries';
import { client } from '../../config/client';
import parse from 'html-react-parser';
import Head from 'next/head';
import ReactPaginate from 'react-paginate';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';

const BlogPosts = ({ blogs, blogPage }) => {
  // console.log('🚀 ~ file: index.js:7 ~ BlogPosts ~ blogs:', blogs);

  const seoHead = parse(blogPage?.seo.fullHead);

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Head>
        <title>Blog - Medex Worldwide</title>
        {seoHead}
      </Head>
      <section className="bg-slate-100">
        <div className="pt-7 md:pt-40 mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
              Blog
            </h1>
          </div>
          <div className="breadcrumb flex items-center py-10 ">
            <ol className="flex items-center w-full overflow-hidden">
              <li className="flex text-base font-medium px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 text-title-color hover:text-Brown">
                <Link className="inline-flex items-center" href="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-1.5 text-Brown text-base"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                    ></path>
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                    ></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li className="flex text-base font-medium px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 text-title-color hover:text-Brown">
                <Link className="inline-flex items-center" href="/blog">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-Brown text-base"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  ></path>
                </svg>
                  Blog
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 flex md:flex-row flex-col-reverse gap-10">
          <div className="md:w-1/4 w-full">
            <Sidebar />
          </div>
          <div className="md:w-3/4 w-full">
            <div className="grid grid-cols-1 gap-9">
              {currentItems.map((post, idx) => {
                return (
                  <article
                    key={idx}
                    className="flex flex-col sm:flex-row blog-card overflow-hidden w-full border border-black/10 rounded-xl"
                  >
                    <div className="relative flex-shrink-0 ">
                      <Link href={`/blog${post.uri}`}>
                        <figure className="md:max-w-[440px] max-w-360px h-full">
                          <img
                            src={post?.featuredImage?.node?.mediaItemUrl}
                            alt="blog-image"
                            
                            className="object-cover h-full w-full object-left-top"
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className="flex flex-col justify-center py-5 px-5 sm:px-8 h-full overflow-hidden relative">
                      <h2 className="font-semibold text-2xl lg:text-3xl mb-3.5 ">
                        <Link
                          href={`/blog${post.uri}`}
                          className="hover:text-Brown"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="post-exerpt mb-5 lg:mb-8 text-body-color">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between">
                        <div className="entry-meta text-[13px] text-body-color flex">
                          <span className="post-on pr-2.5 relative flex items-center gap-1.5">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 16 16"
                              className="transition "
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                            </svg>{' '}
                            {post.date}
                          </span>
                          <span className="px-2.5 relative">
                            {post.Views} Views
                          </span>
                        </div>
                        <Link
                          href={`/blog${post.uri}`}
                          className="text-body-color hover:text-Brown text-[13px] font-medium flex items-center gap-1.5"
                        >
                          Read More
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 16 16"
                            className="false "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
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
      <Footer blogs={blogs}  />
    </>
  );
};

export default BlogPosts;

export async function getStaticProps() {
  const res = await client.query({
    query: BlogPostsQuery,
  });
  const blogPageRes = await client.query({
    query: BlogPage,
  });

  const blogs = res.data.posts.nodes;
  const blogPage = blogPageRes.data.page;
  return {
    props: {
      blogs,
      blogPage,
    },
  };
}
