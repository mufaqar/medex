import Image from 'next/image';
import React from 'react';
import Slide1 from '../../public/images/slide-1.jpg';

export default function Banner() {

    return (
        <section className='mb-5'>
            <Image src={Slide1} alt="" className='object-cover h-full w-full' />
        </section>
    )
}
