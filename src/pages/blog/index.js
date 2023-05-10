import Link from "next/link";
import React, { useState } from "react";
import { BlogPage, BlogPostsQuery } from "../../config/quries";
import { client } from "../../config/client";
import parse from "html-react-parser";
import Head from "next/head";
import ReactPaginate from "react-paginate";

const BlogPosts = ({ blogs, blogPage }) => {
  console.log("🚀 ~ file: index.js:7 ~ BlogPosts ~ blogs:", blogs);

  const seoHead = parse(blogPage?.seo.fullHead)

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
    <Head>{seoHead}</Head>
      <div className="flex mt-10 justify-center items-center pt-16 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
            Blogs
          </h2>
        </div>
      </div>
      <section className="container mx-auto my-10">
        {currentItems.map((post, idx) => {
          return (
            <Link href={`/blog/${post.uri}`} key={idx}>
              {post.title}
            </Link>
          );
        })}
      </section>
      <section className="container pagination mx-auto mb-20 mt-20">
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
      blogPage
    },
  };
}
