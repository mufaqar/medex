import { gql } from '@apollo/client';

export const FillerProducts = gql`
  query AllProducts {
    products(first: 100, where: { categoryId: 56 }) {
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

export const Products = gql`
  query AllProducts {
    products(first: 999) {
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

export const FrontPage = gql`
  query Frontpage($id: ID = "1792") {
    page(id: $id, idType: DATABASE_ID) {
      title
      seo {
        fullHead
      }
    }
  }
`;
