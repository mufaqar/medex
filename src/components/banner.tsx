import Image from 'next/image';
import React from 'react';
import Slide1 from '../../public/images/slide-1.jpg';
import Slide2 from '../../public/images/slide-2.jpg';
import Slide3 from '../../public/images/slide-3.jpg';

export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className='bg-red-900 '>
            <Image src={Slide1} alt="" className='object-cover h-full w-full' />
        </section>
    )
}
