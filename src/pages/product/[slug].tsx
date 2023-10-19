import { client } from "@/config/client";
import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import parse from "html-react-parser";
import Modal from "react-modal";
import Footer from '../../components/footer';
import { BlogPostsQuery } from '../../config/quries';
import ContactUsForm from "@/components/contactUsForm";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: 'none',
    background: 'none'
  },
};

function Single({ product }: any, { blogs }: any) {
  console.log("🚀 ~ file: [slug].tsx:25 ~ Single ~ product:", product)
  const fullHead = parse(product.seo.fullHead);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  function openModal(url: string) {
    setIsOpen(true);
    setImageUrl(url);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <main>
        <Head>
          <title>{product.title} - Medex Worldwide</title>
          {fullHead}
        </Head>
        <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
              {product?.title}
            </h1>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1730px] md:px-6 lg:px-8 2xl:px-20 px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="img"
                src={product?.featuredImage?.node?.mediaItemUrl}
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                {product?.galleryImages?.nodes?.map((img: any, idx: number) => {
                  return (
                    <img
                      key={idx}
                      alt="img"
                      src={img?.mediaItemUrl}
                      onClick={() => openModal(img?.mediaItemUrl)}
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  );
                })}
              </div>
            </div>
            <div className="sticky top-28">
              <div className="mt-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold sm:text-3xl text-title-color">
                    {product?.title}
                  </h2>
                  <p className="text-sm text-primary">
                    {product?.types?.nodes[0]?.name}
                  </p>
                  <div className="-ml-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="prose max-w-none">
                  <div
                    className="text-base leading-8 text-body-color"
                    dangerouslySetInnerHTML={{
                      __html: product?.shortDescription,
                    }}
                  />
                </div>

                <div>
                  <div
                    className="text-base mt-4 description leading-8 text-body-color"
                    dangerouslySetInnerHTML={{
                      __html: product?.content,
                    }}
                  />
                </div>
                <h2 className="text-xl mt-10 mb-4 font-bold sm:text-3xl text-title-color">
                    {`Inquiry Form`}
                  </h2>
                <ContactUsForm/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <button className="absolute right-4 top-0 bg-white p-2 rounded-full" onClick={closeModal}>X</button>
          <img
            alt="img"
            src={imageUrl}
            className="aspect-square h-[500px] rounded-xl object-contain"
          />
        </div>
      </Modal>
      <Footer blogs={blogs} />
    </>
  );
}

export default Single;

export async function getServerSideProps(context: any) {
  const GET_PRODUCTS = gql`
    query GetProducts($id: ID!) {
      product(id: $id, idType: SLUG) {
        title
        slug
        content
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
  `;

  const slug = context.params.slug;
  const response = await client.query({
    query: GET_PRODUCTS,
    variables: {
      id: slug,
    },
  });
  const blog = await client.query({
    query: BlogPostsQuery,
  });

  const product = response?.data?.product;
  const blogs = blog.data.posts.nodes;
  return {
    props: {
      product,
      blogs,
    },
  };
}
