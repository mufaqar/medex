import Link from "next/link";
import React from "react";
import { BlogPage, BlogPostsQuery } from "../../config/quries";
import { client } from "../../config/client";
import parse from "html-react-parser";
import Head from "next/head";

const BlogPosts = ({ blogs, blogPage }) => {
  console.log("🚀 ~ file: index.js:7 ~ BlogPosts ~ blogs:", blogs);

  const seoHead = parse(blogPage?.seo.fullHead)

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
        {blogs.map((post, idx) => {
          return (
            <Link href={`/blog/${post.uri}`} key={idx}>
              {post.title}
            </Link>
          );
        })}
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
