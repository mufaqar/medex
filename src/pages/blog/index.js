import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Sidebar from '../../components/sidebar';
import Blog1 from '../../../public/images/blog-1.jpg';

const BlogPosts = () => {
  return (
    <>
      <section className='bg-slate-100'>
        <div className="pt-7 md:pt-40 mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <div className="breadcrumb flex items-center py-10 ">
            <ol className="flex items-center w-full overflow-hidden">
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="inline-flex items-center " href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-1.5 text-skin-base text-15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path>
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li className="text-base text-skin-base  false">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-skin-base text-opacity-40 text-15px}" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"></path>
                </svg>
              </li>
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="capitalize" href="/blog">
                  blog
                </Link>
              </li>
              <li className="text-base text-skin-base  false">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-skin-base text-opacity-40 text-15px}" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"></path>
                </svg>
              </li>
              <li className="flex text-sm  px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-primary">
                <Link className="capitalize text-heading" href="/blog/blog-category-list">
                  blog category list
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 flex md:flex-row flex-col-reverse gap-10'>
          <div className='md:w-1/4 w-full'>
            <Sidebar />
          </div>
          <div className='md:w-3/4 w-full'>
            <div className='grid grid-cols-1 gap-9'>
              {Posts?.map((item, index) => (
                <article key={index} className='flex flex-col sm:flex-row blog-card overflow-hidden w-full border border-black/10 rounded-xl'>
                  <div className='md:max-w-[440px] max-w-360px relative flex-shrink-0 '>
                    <Link href={item.url}>
                      <Image src={item.featured} alt="blog-image" className='object-cover h-full w-full object-left-top' />
                    </Link>
                  </div>
                  <div className='flex flex-col justify-center py-5 px-5 sm:px-8 h-full overflow-hidden relative'>
                    <h3 className='font-semibold text-2xl lg:text-3xl mb-3.5 '>
                      <Link href="#" className='hover:text-[#BF1800]'>
                        {item.title}
                      </Link>
                    </h3>
                    <p className='post-exerpt mb-5 lg:mb-8 text-gray-500'>
                      {item.excerpt}
                    </p>
                    <div className="flex justify-between">
                      <div className="entry-meta text-[13px] text-gray-500 flex">
                        <span className="post-on pr-2.5 relative flex items-center gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="transition " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                          </svg> {item.postDate}</span>
                        <span className="px-2.5 relative">
                          {item.Views} Views
                        </span>
                      </div>
                      <Link href={item.url} className="text-gray-500 hover:text-[#BF1800] text-[13px] flex items-center gap-1.5">
                        {item.BtnTxt}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;

export const Posts = [
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
  {
    featured: Blog1,
    title: "The litigants on the screen are not actors",
    excerpt: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
    postDate: "21 April 2022",
    Views: "514k",
    BtnTxt: "Read More",
    url: "#",
  },
]