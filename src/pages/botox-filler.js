import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Img_url from '../../public/images/med.jpg';
import Img1 from '../../public/images/mri.jpg';
import Test1 from '../../public/images/test1.jpg';
import Test2 from '../../public/images/test2.jpg';
import Test3 from '../../public/images/test3.jpg';

import { client } from '../config/client';
import { Products } from '../config/quries';

function Filler_botox({ Featured_box_fillers }) {
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Featured_box_fillers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Featured_box_fillers.length / itemsPerPage);
  return (
    <>
      <section className="mb-12 mt-10 overflow-hidden">
        <div className="bg-[url(/images/a.jpg)] bg-center bg-no-repeat bg-cover min-h-[250px] flex items-center justify-start p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]">
          <div className="md:ml-0 mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-8">
            <h1 className="md:text-6xl text-4xl text-[#a67979] ">
              Welcome to the World of Timeless Beauty Medex Worldwide!
            </h1>
            <p className="text-xl my-5">
              Your trusted source for the finest Botox and fillers products. If
              you're seeking safe and effective solutions to enhance your
              appearance and combat the signs of aging, you've come to the right
              place. In this article, we will explore the differences between
              Botox and fillers, address their safety concerns, discuss their
              effectiveness, and provide insights into their longevity. Join us
              on this journey to discover the perfect solution for your
              aesthetic needs.
            </p>
            <Link
              href="#"
              className="bg-[#a250b6] text-white text-lg py-2 px-7 rounded-full shadow-sm shadow-[#a250b6ed] inline-flex mt-5"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div>
            <div className="">
              <h2 className="md:text-3xl text-2xl mb-5 capitalize">
                Which is Safer: Botox or Fillers?
              </h2>
              <p className="text-lg my-2">
                When it comes to the safety of cosmetic procedures, both Botox
                and fillers have proven track records. Botox, a brand name for
                Botulinum Toxin Type A, is a neurotoxin that temporarily relaxes
                targeted muscles, reducing the appearance of fine lines and
                wrinkles. Dermal fillers, on the other hand, are injectable gels
                that add volume to specific areas, smoothing out wrinkles and
                restoring youthful contours.
              </p>
              <p className="text-lg my-2">
                While both Botox and fillers carry minimal risks when
                administered by qualified professionals, it's essential to
                consult with a trained practitioner to ensure safety and optimal
                results. At Medex Worldwide, we prioritize quality and provide
                only the best products, including the renowned Botulax, Nabota,
                and Revolax. These trusted brands have established themselves as
                leaders in the field of aesthetics, offering safe and reliable
                solutions.
              </p>
            </div>
          </div>
          <div>
            <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] ml-auto relative">
              <Image
                src={Img_url}
                alt="img"
                className="h-full absolute top-[40px] left-[-50px] rounded-[15px] shadow-lg border border-black/5 "
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
          <div className="mb-10">
            <h2 className="md:text-3xl text-2xl mb-5 capitalize text-center">
              Our Botox Products
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <div className="md:mb-0 mb-10">
              <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] mr-auto relative">
                <Image
                  src={Img_url}
                  alt="img"
                  className="h-full absolute top-[40px] right-[-50px] rounded-[15px] shadow-lg border border-black/5 "
                />
              </div>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div>
            <div className="">
              <h2 className="md:text-3xl text-2xl mb-5 capitalize">
                Which is Better: Filler or Botox?
              </h2>
              <p className="text-lg my-2">
                Determining whether fillers or Botox is better depends on your specific aesthetic goals. Botox is highly effective in reducing the appearance of dynamic wrinkles caused by repeated facial muscle movements, such as crow's feet and frown lines. It temporarily paralyzes the muscles, resulting in smoother and more youthful-looking skin.
              </p>
              <p className="text-lg my-2">
                Fillers, on the other hand, are ideal for addressing static wrinkles, volume loss, and restoring facial contours. They can add plumpness to thin lips, soften nasolabial folds, and enhance cheekbones, providing a more rejuvenated appearance. With a variety of fillers available, such as Revolax and Liztox, Medex Worldwide ensures you have access to premium options tailored to your specific needs.
              </p>
            </div>
          </div>
          <div>
            <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] ml-auto relative">
              <Image
                src={Img_url}
                alt="img"
                className="h-full absolute top-[40px] left-[-50px] rounded-[15px] shadow-lg border border-black/5 "
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
          <div className="mb-10">
            <h2 className="md:text-3xl text-2xl mb-5 capitalize text-center">
              Our Filler Products
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <div className="md:mb-0 mb-10">
              <div className="border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] mr-auto relative">
                <Image
                  src={Img_url}
                  alt="img"
                  className="h-full absolute top-[40px] right-[-50px] rounded-[15px] shadow-lg border border-black/5 "
                />
              </div>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50">
                  <Image
                    src={Img1}
                    alt=""
                    className="rounded-[15px] object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-3/4 w-1/2 h-full">
                  <Link
                    href="#"
                    className="text-lg leading-5 hover:text-[#BF1800] uppercase"
                  >
                    Botox
                  </Link>
                  <p className="text-sm mt-2">
                    It's been like that since the day 1, when our spa saloon was
                    founded by Mary Fruition back in 1998. She did so in a spur
                    of a moment decision, Get trn horrible remember pleasure two
                    vicinity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
          <div className="mb-10">
            <h2 className="md:text-3xl text-2xl mb-5 capitalize text-center">
              Testimonials
            </h2>
          </div>

          {/*Container for the Testimonials */}
          <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
            {/* <!-- First Testimonial --> */}
            {Testimonials?.map((item, index) => (
              <div key={index} className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                  <Image
                    src={item.featured}
                    alt="image"
                    className="w-32 rounded-full shadow-lg "
                  />
                </div>
                <h5 className="mb-4 text-xl font-semibold">{item.name}</h5>
                <h6 className="mb-4 font-semibold ">{item.position}</h6>
                <p className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {item.review}
                </p>
                <ul className="mb-0 flex items-center justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-cover bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Ultimate design solution
                </h1>

                <p className="max-w-xl mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo aliquid molestiae hic incidunt beatae placeat
                  accusantium! Alias ex quisquam ab tempora. Ratione autem
                  doloremque ducimus numquam doloribus, error sed.
                </p>

                <Link
                  href="#"
                  className="bg-[#a250b6] text-white text-lg py-2 px-7 rounded-full shadow-sm shadow-[#a250b6ed] inline-flex mt-5"
                >
                  Get in touch
                </Link>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 ">
                    Contact Us
                  </h1>

                  <p className="mt-2 text-gray-500 ">
                    Ask us everything and we would love to hear from you
                  </p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="block w-full px-5 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#a250b6] focus:ring-[#a250b6] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#a250b6] focus:ring-[#a250b6] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32 focus:border-[#a250b6] focus:ring-[#a250b6] focus:ring-opacity-40 focus:outline-none focus:ring"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#a250b6] rounded-md hover:bg-[#a250b6] focus:outline-none focus:ring focus:ring-[#a250b6] focus:ring-opacity-50">
                      get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filler_botox;

export const Testimonials = [
  {
    featured: Test1,
    name: 'Maria Smantha',
    position: 'Web Developer',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
  },
  {
    featured: Test2,
    name: 'Lisa Cudrow',
    position: 'Graphic Designer',
    review:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.',
  },
  {
    featured: Test3,
    name: 'John Smith',
    position: 'Marketing Specialist',
    review:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
  },
];

export async function getStaticProps() {
  const response = await client.query({
    query: Products,
  });
  const Featured_box_fillers = response.data.products.nodes;
  return {
    props: {
      Featured_box_fillers,
    },
  };
}