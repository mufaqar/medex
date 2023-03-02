import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Featured_Img from '../../public/images/med.jpg';

function CategoryBox() {
    return (
        <section className='mb-8 lg:mb-12 mx-4'>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 2xl:gap-5 '>
                {Cate_Date.map((item, index) => (
                    <div key={index} className='mx-auto'>
                        <Link href={item.Cat_Link} className='rounded-sm h-full flex justify-center relative overflow-hidden hover:opacity-90'>
                            <div className=''>
                                <Image src={item.featured} alt="" className='' />
                            </div>
                            <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30">
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryBox

export const Cate_Date = [
    {
        featured: Featured_Img,
        Cat_Link: "#",
    },
    {
        featured: Featured_Img,
        Cat_Link: "#",
    },
    {
        featured: Featured_Img,
        Cat_Link: "#",
    },
]