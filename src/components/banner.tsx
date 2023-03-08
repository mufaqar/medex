import Image from 'next/image';
import React from 'react';
import Slide1 from '../../public/images/slide-1.jpg';

export default function Banner() {

    return (
        <section className='mb-5'>
            <div className='w-full bg-[url(/images/slide-1.jpg)] bg-center bg-no-repeat bg-cover flex items-center min-h-[250px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]'></div>
        </section>
    )
}
