import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Featured_Img from '../../public/images/cat_h15_1.jpg';

function Feature_Category({categories}:any) {
    console.log("🚀 ~ file: feature-category.tsx:7 ~ Feature_Category ~ categories:", categories)
    return (
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20'>
                <div className='mb-8 lg:mb-20'>
                    <div className="mb-5 text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[450px] lg:mx-auto">
                        <h2 className="xl:text-4xl xl:leading-9 text-3xl font-medium leading-8">
                            Featured Categories
                        </h2>
                        <p className="text-lg leading-[1.85em] text-gray-500 pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada.
                        </p>
                    </div>
                    <div className='grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5'>
                        {categories?.map((item:any, index:number) => (
                            <div key={index} className='mx-auto relative'>
                                <img src={item?.image?.mediaItemUrl} alt="" className='object-cover w-full h-[230px]' />
                                <div className='bg-black/20 absolute top-0 right-0 left-0 bottom-0'/>
                                <div className='absolute top-0 left-0 right-0 bottom-0 p-5 text-center flex flex-col items-center justify-center group'>
                                    <h4>
                                        <Link href={item?.slug} className="text-lg leading-5 font-bold mb-2 text-white hover:text-[#BF1800] ">
                                            {item?.name}
                                        </Link>
                                    </h4>
                                    <p>
                                        <span className="text-base leading-6 text-white mt-1.5 mb-1.5 hidden group-hover:block">
                                            Category
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature_Category

export const Products = [
    {
        featured: Featured_Img,
        title: 'Audio Music',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: 'Audio Music',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: 'Audio Music',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: 'Audio Music',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: 'Audio Music',
        category: "Common Good",
        prodct_Link: "#",
    },
]