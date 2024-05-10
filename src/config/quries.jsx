import { gql } from "@apollo/client";

export const FillerProducts = gql`
query BFProducts {
  types(where: {slug: "botox-and-fillers"}) {
    nodes {
      products(first: 999, where: {}) {
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
          metaDesc
          opengraphUrl
          opengraphType
          opengraphTitle
          opengraphSiteName
          opengraphImage {
            mediaItemUrl
          }
          opengraphDescription
          title
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
          metaDesc
          opengraphUrl
          opengraphType
          opengraphTitle
          opengraphSiteName
          opengraphImage {
            mediaItemUrl
          }
          opengraphDescription
          title
        }
        name
      }
    }
  }
`;

export const FrontPage = gql`
  query Frontpage($id: ID = "1792") {
    page(id: $id, idType: DATABASE_ID) {
      title
      seo {
        metaDesc
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphSiteName
        opengraphImage {
          mediaItemUrl
        }
        opengraphDescription
      }
      slug
    }
  }
`;
export const BlogPage = gql`
  query blogPage {
    page(id: "945", idType: DATABASE_ID) {
      title
      seo {
        metaDesc
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphSiteName
        opengraphImage {
          mediaItemUrl
        }
        opengraphDescription
      }
      slug
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

export const productByTypes = gql`
query productByTypes($id: ID = "") {
  type(id: $id, idType: SLUG) {
    products(first: 100) {
      nodes {
        title
        slug
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
    name
    seo {
      metaDesc
      opengraphUrl
      opengraphType
      opengraphTitle
      opengraphSiteName
      opengraphImage {
        mediaItemUrl
      }
      opengraphDescription
      title
    }
  }
}`;
