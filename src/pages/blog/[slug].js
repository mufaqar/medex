import { gql } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { client } from "../../config/client";
import Head from "next/head";
import parse from "html-react-parser";

const BlogSingle = ({ blog }) => {
  console.log("🚀 ~ file: [slug].js:5 ~ BlogSingle ~ blog:", blog)
  const seoHead = parse(blog?.seo.fullHead)

  return (
    <>
      <Head>{seoHead}</Head>
      <section className='bg-slate-100'>
        <div className="pt-7 md:pt-40 mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <div className="breadcrumb flex items-center py-10 ">
            <ol className="flex flex-wrap items-center w-full overflow-hidden">
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="inline-flex items-center " href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-1.5 text-gray-500 text-[15px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path>
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="inline-flex items-center " href="/blog">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-1.5 text-gray-500 text-[15px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"></path>
                  </svg>
                  Blog
                </Link>
              </li>
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="inline-flex items-center " href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-1.5 text-gray-500 text-[15px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"></path>
                  </svg>
                  {blog?.title}
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 flex md:flex-row flex-col-reverse gap-10'>
          <div className="max-w-[1024px] m-auto">
            <div className="blog-post w-full  pt-8 pb-8">
              <div className="flex flex-col product-card overflow-hidden h-full mb-10">
                <div className="pb-5 h-full relative">
                  <h2 className="font-bold text-2xl lg:text-4xl mb-3.5 ">
                    {blog?.title}
                  </h2>
                  <div className="entry-meta text-[13px] text-gray-400">
                    <span className="post-by pe-2.5 relative inline-block">
                      By Melissa Jones
                    </span>
                    <span className="has-dot px-2.5 relative inline-block">
                      {blog.date}
                    </span>
                    <span className="has-dot px-2.5 relative inline-block">
                      114 Views
                    </span>
                    <span className="has-dot ps-2.5 relative inline-block">
                      Politic
                    </span>
                  </div>
                </div>
                <div className="relative flex-shrink-0 mb-10">
                  <figure className="card-img-container max-w-[1050px] overflow-hidden flex mx-auto relative rounded-xl">
                    <img src={blog?.featuredImage?.node?.mediaItemUrl} alt="blog-image" className='object-cover w-full object-left-top' />
                  </figure>
                </div>
                <div>
                  <div
                    className="text-base mt-4 description leading-8 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content,
                    }}
                  />
                </div>
              </div>
              <hr className="w-full border-gray-200 mb-6" />
              <div className="entry-bottom by-5 flex flex-col gap-3 md:flex-row justify-between">
                <div className="tags">
                  <ul className="pt-0">
                    <li className="text-sm text-gray-500 text-opacity-80 inline-flex items-center justify-center mr-2 relative top-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M17.125 1H12.3677C11.4662 1 10.6188 1.351 9.98123 1.98849L1.63974 10.33C1.22725 10.7425 1 11.2908 1 11.8765C1 12.4593 1.22725 13.0075 1.63974 13.42L6.58 18.3603C6.99249 18.7728 7.54075 19 8.12649 19C8.70924 19 9.2575 18.7728 9.66999 18.3603L18.0115 10.0188C18.649 9.38125 19 8.53374 19 7.63226V2.87499C19 1.8415 18.1585 1 17.125 1ZM18.25 7.63226C18.25 8.33352 17.977 8.99277 17.482 9.48777L9.13976 17.83C8.6005 18.3693 7.65476 18.373 7.111 17.83L2.17 12.889C1.89926 12.619 1.74999 12.259 1.74999 11.8735C1.74999 11.491 1.89923 11.131 2.17 10.8603L10.5115 2.51875C11.008 2.02301 11.6665 1.74999 12.3677 1.74999H17.125C17.7452 1.74999 18.25 2.25473 18.25 2.87499V7.63226H18.25Z" fill="#999999" stroke="#999999" strokeWidth="0.5"></path>
                        <path d="M14.8749 3.25C13.8414 3.25 12.9999 4.0915 12.9999 5.12499C12.9999 6.15848 13.8414 6.99998 14.8749 6.99998C15.9084 6.99998 16.7499 6.15851 16.7499 5.12499C16.7499 4.0915 15.9084 3.25 14.8749 3.25ZM14.8749 6.24999C14.2546 6.24999 13.7499 5.74525 13.7499 5.12499C13.7499 4.50473 14.2546 3.99999 14.8749 3.99999C15.4952 3.99999 15.9999 4.50473 15.9999 5.12499C15.9999 5.74525 15.4951 6.24999 14.8749 6.24999Z" fill="#999999" stroke="#999999" strokeWidth="0.5"></path>
                      </svg>
                      Tags:
                    </li>
                    <li className="inline-block p-[3px]">
                      <div className=" text-13px md:text-sm rounded hover:bg-slate-100 block border border-sink-base px-2 py-1 transition" role="button">
                        Perfume
                      </div>
                    </li>
                    <li className="inline-block p-[3px]">
                      <div className=" text-13px md:text-sm rounded hover:bg-slate-100 block border border-sink-base px-2 py-1 transition" role="button">
                        Make up
                      </div>
                    </li>
                    <li className="inline-block p-[3px]">
                      <div className=" text-13px md:text-sm rounded hover:bg-slate-100 block border border-sink-base px-2 py-1 transition" role="button">
                        Spa
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social-icons single-share">
                  <div className="flex items-center opacity-100 top-full">
                    <h3 className="text-skin-base text-gray-500 pr-3 sm:text-sm font-normal text-[15px] ">
                      Share this:
                    </h3>
                    <div className="flex items-center flex-wrap space-x-2 ">
                      <Link href="#"  className="react-share__ShareButton">
                        <svg viewBox="0 0 64 64" width="32" height="32" className="transition-all hover:opacity-90">
                          <circle cx="32" cy="32" r="31" fill="#3b5998">
                          </circle>
                          <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path>
                        </svg>
                      </Link>
                      <Link href="#" className="react-share__ShareButton">
                        <svg viewBox="0 0 64 64" width="32" height="32" className="transition-all hover:opacity-90">
                          <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
                          <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white"></path>
                        </svg>
                      </Link>
                      <Link href="#"  className="react-share__ShareButton">
                        <svg viewBox="0 0 64 64" width="32" height="32" className="transition-all hover:opacity-90">
                          <circle cx="32" cy="32" r="31" fill="#25D366"></circle>
                          <path d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915" fill="white"></path>
                        </svg>
                      </Link>
                      <Link href="#"  className="react-share__ShareButton">
                        <svg viewBox="0 0 64 64" width="32" height="32" className="transition-all hover:opacity-90">
                          <circle cx="32" cy="32" r="31" fill="#007fb1"></circle>
                          <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" fill="white"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
