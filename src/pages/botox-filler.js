import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Img_url from '../../public/images/med.jpg';
import botox from '../../public/images/botox.jpg';
import filler from '../../public/images/filler.jpg';
import Appointment from '../components/appointment';
import { client } from '../config/client';
import { BlogPostsQuery, Products, FillerProducts } from '../config/quries';
import Footer from '../components/footer'
import YoastSeo from '@/components/YoastSeo'

function Filler_botox({ Featured_box_fillers, blogs }) {

  //console.log(Featured_box_fillers);
  const seoMeta = {
    title: 'Box Filler - Medex Worldwide',
    description: "Medex Worldwide is a global wholesaler and distributor of high quality reconditioned/refurbished ultrasound, endoscopy systems"
  }

  const FillerProducys = Featured_box_fillers.slice(0, 3);
  const BotoxProducts = Featured_box_fillers.slice(3, 6);
  return (
    <>
      <YoastSeo {...seoMeta} />
      <section className="mb-12 md:mt-[3.6rem] mt-[2.2rem] overflow-hidden">
        <div className="bg-[url(/images/botox-filler.jpg)] bg-center bg-no-repeat bg-cover min-h-[250px] flex items-center justify-start sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]">
          <div className=" mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-8 grid md:grid-cols-2 grid-cols-1">
            <div className=''>
              <h1 className="md:text-6xl text-4xl text-[#a67979] ">
                Timeless Beauty Medex Worldwide!
              </h1>
              <p className="text-lg my-5 text-body-color">
                Your trusted source for the finest Botox and fillers products. If
                you're seeking safe and effective solutions to enhance your
                appearance and combat the signs of aging, you've come to the right
                place. In this article, we will explore the differences between
                Botox and fillers, address their safety concerns, discuss their
                effectiveness, and provide insights into their longevity. Join us
                on this journey to discover the perfect solution for your
                aesthetic needs.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
          <div className="mb-10">
            <h2 className="md:text-5xl text-2xl capitalize text-title-color text-center mb-5">
              Our Botox Products
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <div className="md:mb-0 mb-10 md:order-1 order-2">
              <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] mr-auto relative">
                <Image
                  src={botox}
                  alt="img"
                  className="h-full absolute top-[40px] right-[-50px] rounded-[15px] shadow-lg border border-black/5 "
                />
              </div>
            </div>
            <div className="grid gap-8 md:order-2 order-1">
              {FillerProducys?.map((item, index) => (
                <div key={index} className="flex gap-5 ">
                  <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                    <Image
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="rounded-[15px] object-cover h-full w-full"
                    />
                  </div>
                  <div className="md:w-3/4 w-1/2 h-full">
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-lg leading-5 text-title-color hover:text-Brown font-medium uppercase"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm mt-2 text-body-color">
                      {item?.types.nodes[0]?.name}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
          <div className="mb-10">
            <h2 className="md:text-5xl text-2xl capitalize text-title-color text-center mb-5">
              Our Filler Products
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <div className="md:mb-0 mb-10 md:order-1 order-2">
              <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] mr-auto relative">
                <Image
                  src={filler}
                  alt="img"
                  className="h-full absolute top-[40px] right-[-50px] rounded-[15px] shadow-lg border border-black/5 "
                />
              </div>
            </div>
            <div className="grid gap-8 md:order-2 order-1">
              {BotoxProducts?.map((item, index) => (
                <div key={index} className="flex gap-5 ">
                  <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                    <Image
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="rounded-[15px] object-cover h-full w-full"
                    />
                  </div>
                  <div className="md:w-3/4 w-1/2 h-full">
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-lg leading-5 text-title-color hover:text-Brown font-medium uppercase"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm mt-2 text-body-color">
                      {item?.types.nodes[0]?.name}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      <Appointment />
      <Footer blogs={blogs} />

    </>
  );
}

export default Filler_botox;

export async function getServerSideProps() {
  const response = await client.query({
    query: FillerProducts,
  });
  const blog = await client.query({
    query: BlogPostsQuery,
  });
  const Featured_box_fillers = response.data.products.nodes;
  const blogs = blog.data.posts.nodes;
  return {
    props: {
      Featured_box_fillers,
      blogs,
    },
  };
}
