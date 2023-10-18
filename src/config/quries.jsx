import { gql } from '@apollo/client';

export const FillerProducts = gql`
  query AllProducts {
    products(first: 100, where: { categoryId: 43 }) {
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
        types {
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
        types {
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
    types {
      nodes {
        typesInfo {
          featureImage {
            mediaItemUrl
          }
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
export const BlogPage = gql`
  query blogPage {
    page(id: "945", idType: DATABASE_ID) {
      seo {
        fullHead
      }
    }
  }
`;

export const BlogPostsQuery = gql`
  query AllBlogPosts {
    posts {
      nodes {
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
      }
    }
  }
`;
