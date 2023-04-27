import { gql } from "@apollo/client";

export const Products = gql`
  query AllProducts {
    products(first: 10000) {
      nodes {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        productCategories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`;

export const ProductsCategories = gql`
  query AllCategories {
    productCategories {
      nodes {
        image {
          mediaItemUrl
        }
        name
        slug
      }
    }
  }
`;
