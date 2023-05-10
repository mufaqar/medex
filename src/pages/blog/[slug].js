import { gql } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { client } from "../../config/client";
import Head from "next/head";
import parse from "html-react-parser";

const BlogSingle = ({blog}) => {
  console.log("🚀 ~ file: [slug].js:5 ~ BlogSingle ~ blog:", blog)
  const seoHead = parse(blog?.seo.fullHead)

  return (
    <>
      <Head>{seoHead}</Head>
      <div className="flex mt-10 justify-center items-center pt-16 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
            {blog?.title}
          </h2>
        </div>
      </div>

    </>
  );
};

export default BlogSingle;


export async function getServerSideProps(context) {
  const GET_BLOGS = gql`
    query BlogPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        uri
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        excerpt
        date
        categories {
          nodes {
            name
          }
        }
        content
        seo {
          fullHead
        }
      }
    }
  `;

  const slug = context.params.slug;
  const response = await client.query({
    query: GET_BLOGS,
    variables: {
      id: slug,
    },
  });

  const blog = response?.data?.post;
  return {
    props: {
      blog,
    },
  };
}
