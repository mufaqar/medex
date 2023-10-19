import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductBox({ products }: any) {
  return (
    <section>
      <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
        <div className="mb-8 lg:mb-20">
          <div className="mb-5 text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[800px] lg:mx-auto">
            <h2 className="md:text-4xl text-2xl capitalize text-title-color Marcellus">
              Featured Botox and Filler Products
            </h2>
            <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3">
              Medex providing the best quality Botox and Filler products and service you can trust.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5 ">
            {products?.map((item: any, index: number) => (
              <div key={index} className="mx-auto ">
                <figure className="bg-gray-50 w-full h-[395px] flex justify-center items-center">
                  <Link
                    href={`/product/${item?.slug}`}><Image
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt={item?.featuredImage?.node?.mediaItemUrl}
                      width={300}
                      height={200}
                    /></Link>
                </figure>
                <h4 className="text-base leading-6 text-primary mt-1.5 mb-1.5">
                  {item?.types.nodes[0]?.name}
                </h4>
                <Link
                  href={`/product/${item?.slug}`}
                  className="text-lg font-medium leading-5 mb-2 text-title-color hover:text-Brown "
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductBox;

