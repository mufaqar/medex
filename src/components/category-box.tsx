import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import botox from '../../public/images/botox.jpg';
import ultrasound from '../../public/images/ultrasound.jpg';
import mri from '../../public/images/mri.jpg';

function CategoryBox() {
    return (
        <section className='mb-8 lg:mb-20 mx-4'>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 2xl:gap-5  '>
                {Cate_Date.map((item, index) => (
                    <div key={index} className='mx-auto '>
                        <Link href={item.Cat_Link} className='rounded-sm h-full flex justify-center relative overflow-hidden hover:opacity-90 border border-red-600 '>
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
        featured: botox,
        Cat_Link: "/botox-and-fillers",
    },
    {
        featured: ultrasound,
        Cat_Link: "/ultrasound-scanner",
    },
    {
        featured: mri,
        Cat_Link: "/skin-care-laser",
    },
]