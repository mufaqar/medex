import { useRouter } from "next/router";
import React from "react";
import { client } from "../config/client";
import { Products } from "../config/quries";
import Link from "next/link";
import Image from "next/image";

const Categories = ({ AllProducts }) => {
  const router = useRouter();
  const params = router?.query?.categories[0];
  const FilterProduct = AllProducts?.filter(
    (item) => item?.productCategories?.nodes[0].slug === params
  );
  console.log(
    "🚀 ~ file: [...categories].jsx:11 ~ Categories ~ FilterProduct:",
    FilterProduct
  );
  return (
    <>
      <section className="container mx-auto my-40 grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5">
        {FilterProduct?.map((item, index) => (
          <div key={index} className="mx-auto">
            <figure className="flex justify-center items-center overflow-hidden">
              <Link href={item?.slug}>
                <img
                  src={item?.featuredImage?.node?.mediaItemUrl}
                  alt=""
                 className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </Link>
            </figure>
            <h4 className="text-base leading-6 text-gray-400 mt-1.5 mb-1.5">
              {item?.productCategories.nodes[0]?.name}
            </h4>
            <Link
              href={item?.slug}
              className="text-lg leading-5 mb-2 hover:text-[#BF1800] "
            >
              {item.title}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;

export async function getStaticProps() {
  const response = await client.query({
    query: Products,
  });

  const AllProducts = response.data.products.nodes;
  return {
    props: {
      AllProducts,
    },
  };
}
export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
