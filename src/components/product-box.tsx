import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Featured_Img from '../../public/images/p-1.jpg';

function ProductBox() {
    return (
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20'>
                <div className='mb-8 lg:mb-12'>
                    <div className="mb-5 text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[450px] lg:mx-auto">
                        <h2 className="xl:text-[25px] xl:leading-9 text-[20px] font-medium leading-8">
                            Best Seller Products
                        </h2>
                        <p className="text-sm leading-[1.85em] text-gray-500 pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada.
                        </p>
                    </div>
                    <div className='grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5'>
                        {Products.map((item, index) => (
                            <div key={index} className='mx-auto'>
                                <Image src={item.featured} alt="" />
                                <h4 className="text-sm leading-6 text-gray-400 mt-1.5 mb-1.5">
                                    {item.category}
                                </h4>
                                <Link href={item.prodct_Link} className="text-lg leading-5 mb-2 hover:text-blue-700 ">
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBox

export const Products = [
    {
        featured: Featured_Img,
        title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
        category: "Common Good",
        prodct_Link: "#",
    },
    {
        featured: Featured_Img,
        title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
        category: "Common Good",
        prodct_Link: "#",
    },
]