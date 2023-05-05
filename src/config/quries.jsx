import { gql } from '@apollo/client';

export const Products = gql`
  query AllProducts {
    products(first: 6, where: { categoryId: 56 }) {
      nodes {
        title
        slug
        seo {
          fullHead
        }
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
        seo {
          fullHead
        }
        name
        slug
      }
    }
  }
`;
