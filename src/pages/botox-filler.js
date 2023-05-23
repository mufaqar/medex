import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Img_url from '../../public/images/med.jpg';
import Img1 from '../../public/images/mri.jpg';
import Test1 from '../../public/images/test1.jpg';
import Test2 from '../../public/images/test2.jpg';
import Test3 from '../../public/images/test2.jpg';
import botox from '../../public/images/botox.jpg';
import filler from '../../public/images/filler.jpg';
import Appointment from '../components/appointment';
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
      <section className="mb-12 md:mt-[6.6rem] mt-[2.2rem] overflow-hidden">
        <div className="bg-[url(/images/botox-filler.jpg)] bg-center bg-no-repeat bg-cover min-h-[250px] flex items-center justify-start p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]">
          <div className=" mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-8">
            <h1 className="md:text-6xl text-4xl text-[#a67979] ">
              Timeless Beauty Medex Worldwide!
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
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div>
            <div className="">
              <h2 className="md:text-3xl text-2xl mb-5 capitalize text-title-color">
                Which is Safer: Botox or Fillers?
              </h2>
              <p className="text-lg my-2 text-body-color">
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
                Determining whether fillers or Botox is better depends on your
                specific aesthetic goals. Botox is highly effective in reducing
                the appearance of dynamic wrinkles caused by repeated facial
                muscle movements, such as crow's feet and frown lines. It
                temporarily paralyzes the muscles, resulting in smoother and
                more youthful-looking skin.
              </p>
              <p className="text-lg my-2">
                Fillers, on the other hand, are ideal for addressing static
                wrinkles, volume loss, and restoring facial contours. They can
                add plumpness to thin lips, soften nasolabial folds, and enhance
                cheekbones, providing a more rejuvenated appearance. With a
                variety of fillers available, such as Revolax and Liztox, Medex
                Worldwide ensures you have access to premium options tailored to
                your specific needs.
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
      <Appointment />
    </>
  );
}

export default Filler_botox;

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
