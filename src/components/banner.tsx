import React, { Component } from 'react';
import Slider from "react-slick";
export default class Banner extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true
        };

        return (
            <section className='mb-12 md:mt-[4.5rem] mt-[2.2rem] overflow-hidden' id='main_slider'>
                <div className=''>
                    <Slider {...settings}>
                        <div className='bg-[url(/images/slide-2.jpg)] bg-center bg-no-repeat bg-cover flex items-center min-h-[250px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]'></div>
                        <div className='bg-[url(/images/slide-1.jpg)] bg-center bg-no-repeat bg-cover flex items-center min-h-[250px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]'></div>
                    </Slider>
                </div>
            </section>
        );
    }
}