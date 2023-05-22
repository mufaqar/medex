import Image from 'next/image';
import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Slider from 'react-slick';
import Test1 from '../../public/images/test1.jpg';

function Appointment() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const ref = useRef<any>(null);
    const handleNextSlide = () => {
        ref.current.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current.slickPrev();
    };

    return (
        <section>
            <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 py-12">
                <div className="flex md:flex-row flex-col ">
                    <div className='bg-white shadow-md md:w-[40%] py-[45px] md:px-[35px] px-5'>
                        <h2 className="md:text-3xl text-2xl mb-5 capitalize ">
                            Book Appointment
                        </h2>
                        <p className='text-[#9A563A] text-lg font-medium my-2'>
                            Today For Free
                        </p>
                        <form className="mt-6">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="block w-full px-5 py-1 mt-2 text-gray-700 bg-white border border-[#9A563A] md:h-16 h-12 focus:border focus:ring-none focus:outline-none"
                                />
                            </div>

                            <div className="flex-1 mt-3">
                                <input
                                    type="email"
                                    placeholder="Your Email*"
                                    className="block w-full px-5 py-1 mt-2 text-gray-700 bg-white border border-[#9A563A] md:h-16 h-12 focus:border focus:ring-none focus:outline-none"
                                />
                            </div>

                            <div className="w-full mt-3">
                                <textarea className="block w-full h-32 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#9A563A] md:h-32 focus:border focus:ring-none focus:outline-none"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide md:h-16 h-12 text-white capitalize transition-colors duration-300 transform bg-[#9A563A] hover:bg-[#9A563A] focus:outline-none focus:ring-none">
                                get in touch
                            </button>
                        </form>
                    </div>
                    <div className="bg-[#9a563a] relative py-[80px] md:px-[90px] px-5 md:w-[60%]">
                        <h2 className="md:text-3xl text-2xl text-white mb-5 capitalize ">
                            OUR BEST REVIEWS
                        </h2>
                        <p className='text-white text-lg font-medium my-2'>
                            CUSTOMER’S FEEDBACK
                        </p>
                        <Slider {...settings} ref={ref}>
                            {Feedbackdata.map((item: any, idx: number) => {
                                var star: number[] = [];
                                for (let i = 0; i < item.rating; i++) {
                                    star.push(i);
                                }

                                return (
                                    <div key={idx}>
                                        <div className="flex gap-1 items-center">
                                            {star.map((st, i) => (
                                                <FaStar color="#FFA41B" size={22} key={i} />
                                            ))}
                                        </div>
                                        <p className="mt-5 mb-5 text-white">{item.review}</p>
                                        <div className="flex items-center gap-4 mt-8">
                                            <Image
                                                src={item?.user.image}
                                                alt="image"
                                                width={60}
                                                height={60}
                                            />
                                            <div>
                                                <h4 className="font-bold text-base text-white">
                                                    {item.user.name}
                                                </h4>
                                                <p className="text-main text-white">{item.user.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        <div className="flex absolute bottom-10 md:left-20 left-4 gap-3">
                            <button
                                className="bg-red-900 p-2 text-white font-bold text-xl"
                                onClick={handlePrevSlide}
                            >
                                <FiArrowLeft />
                            </button>
                            <button
                                className="bg-red-900 p-2 text-white font-bold text-xl"
                                onClick={handleNextSlide}
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment

const Feedbackdata = [
    {
        review:
            '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
        user: {
            name: 'Maria Wang',
            designation: 'Student',
            image: Test1,
        },
        rating: 5,
    },
    {
        review:
            '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
        user: {
            name: 'David',
            designation: 'Student',
            image: Test1,
        },
        rating: 5,
    },
    {
        review:
            '“I love this way of studying Maths! ExamHero have plenty of resources, You can read the notes and test your mastery of it by doing questions. And the knowledge point recommendation tell me the next step I should take, just a awesome experience!”',
        user: {
            name: 'Jimmy Small',
            designation: 'Student',
            image: Test1,
        },
        rating: 4,
    },
];