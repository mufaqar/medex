import Image from "next/image";
import Link from "next/link";
import React from "react";
import Featured_Img from "../../public/images/cat_h15_1.jpg";

function Feature_Category({ categories }: any) {
console.log("🚀 ~ file: feature-category.tsx:7 ~ Feature_Category ~ categories:", categories)

  return (
    <section>
      <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
        <div className="mb-8 lg:mb-20">
          <div className="mb-5 text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[450px] lg:mx-auto">
            <h2 className="md:text-4xl text-2xl capitalize text-title-color">
              Featured Categories
            </h2>
            <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3">
              Products by Categories
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 2xl:gap-5">
            {categories?.map((item: any, index: number) => (
              <div key={index} className="mx-auto group relative w-full">
                <Link href={`product-category/${item?.slug}`}>
                  <figure className="overflow-hidden">
                    <img
                      src={item?.image?.mediaItemUrl || item?.typesInfo.featureImage.mediaItemUrl}
                      alt={item?.image?.mediaItemUrl}

                      className="object-cover w-full opacity-20 group-hover:opacity-100 h-[230px] group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 ease-out"
                    />
                  </figure>
                  <div className="bg-black/20 absolute top-0 right-0 left-0 bottom-0" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-5 text-center flex flex-col items-center justify-center group">
                    <h4 className="text-lg leading-5 font-bold mb-2 group-hover:text-white text-black ">
                      {item?.name}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature_Category;

export const Products = [
  {
    featured: Featured_Img,
    title: "Audio Music",
    category: "Common Good",
    prodct_Link: "#",
  },
  {
    featured: Featured_Img,
    title: "Audio Music",
    category: "Common Good",
    prodct_Link: "#",
  },
  {
    featured: Featured_Img,
    title: "Audio Music",
    category: "Common Good",
    prodct_Link: "#",
  },
  {
    featured: Featured_Img,
    title: "Audio Music",
    category: "Common Good",
    prodct_Link: "#",
  },
  {
    featured: Featured_Img,
    title: "Audio Music",
    category: "Common Good",
    prodct_Link: "#",
  },
];
