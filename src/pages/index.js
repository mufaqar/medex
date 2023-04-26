import Banner from "@/components/banner";
import {
  CategoryBox,
  ProductBox,
  Cta,
  Feature_Category,
} from "../components/imports";
import { gql } from "@apollo/client";
import { client } from "../config/client";

export default function Home({Posts}) {
  console.log("🚀 ~ file: index.js:12 ~ Home ~ Posts:", Posts)
  return (
    <>
      <Banner />
      <CategoryBox />
      <ProductBox />
      <Feature_Category />
      <ProductBox />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query AllPosts {
      posts {
        nodes {
          id
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const Posts = response.data.posts;
  return {
    props: {
      Posts,
    },
  };
}
