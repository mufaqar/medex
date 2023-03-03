import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Featured_Img from '../../public/images/cat_h15_1.jpg';

function Feature_Category() {
    return (
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20'>
                <div className='mb-8 lg:mb-12'>
                    <div className="mb-5 text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[450px] lg:mx-auto">
                        <h2 className="xl:text-[25px] xl:leading-9 text-[20px] font-medium leading-8">
                            Featured Categories
                        </h2>
                        <p className="text-sm leading-[1.85em] text-gray-500 pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada.
                        </p>
                    </div>
                    <div className='grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5'>
                        {Products.map((item, index) => (
                            <div key={index} className='mx-auto relative bg-red-600'>
                                <Image src={item.featured} alt="" className='object-cover' />
                                <div className='absolute top-0 left-0 right-0 h-full p-5 text-center'>
                                    <h4>
                                        <Link href={item.prodct_Link} className="text-lg leading-5 mb-2 text-white hover:text-blue-700 ">
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <p>
                                        <Link href="#" className="text-base leading-6 text-white mt-1.5 mb-1.5">
                                            {item.category}
                                        </Link>
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