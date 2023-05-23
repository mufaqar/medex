import Image from 'next/image';
import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
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
                    <div className='bg-white shadow-lg md:w-[40%] py-[45px] md:px-[35px] px-5'>
                        <h2 className="md:text-3xl text-2xl mb-5 capitalize ">
                            Book Appointment
                        </h2>
                        <p className='text-Brown text-lg font-medium my-2'>
                            Today For Free
                        </p>
                        <form className="mt-6">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="block w-full px-5 py-1 mt-2 text-body-color placeholder:text-body-color bg-input-Bg md:h-16 h-12 focus:ring-none focus:outline-none"
                                />
                            </div>

                            <div className="flex-1 mt-3">
                                <input
                                    type="email"
                                    placeholder="Your Email*"
                                    className="block w-full px-5 py-1 mt-2 text-body-color placeholder:text-body-color bg-input-Bg md:h-16 h-12 focus:ring-none focus:outline-none"
                                />
                            </div>

                            <div className="w-full mt-3">
                                <textarea className="block w-full h-32 px-5 py-1 mt-2 text-body-color placeholder:text-body-color placeholder-gray-400 bg-input-Bg md:h-32 focus:ring-none focus:outline-none"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide md:h-16 h-12 text-white capitalize transition-colors duration-300 transform bg-Brown hover:bg-title-color focus:outline-none focus:ring-none">
                                get in touch
                            </button>
                        </form>
                    </div>
                    <div className="bg-Brown relative py-[80px] md:px-[90px] px-5 md:w-[60%] bg-[url('/images/appoint-bg.png')] bg-cover bg-center bg-no-repeat">
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
                                        <div className="flex gap-1 items-center mt-5">
                                            {star.map((st, i) => (
                                                <FaStar color="#ffffff" size={18} key={i} />
                                            ))}
                                        </div>
                                        <p className="mt-5 mb-5 text-white text-lg">{item.review}</p>
                                        <div className="flex items-center gap-4 my-8">
                                            <Image
                                                src={item?.user.image}
                                                alt="image"
                                                width={75}
                                                height={75}
                                                className="rounded-full bg-white p-1"
                                            />
                                            <div>
                                                <h4 className="font-bold text-xl text-white">
                                                    {item.user.name}
                                                </h4>
                                                <p className="text-base font-medium text-white">{item.user.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        <div className="flex absolute bottom-10 md:left-20 left-4 ">
                            <button
                                className="p-2 font-bold text-xl border border-white border-r-0 bg-transparent hover:bg-white text-white hover:text-Brown"
                                onClick={handlePrevSlide}
                            >
                                <BiChevronLeft size={28} />
                            </button>
                            <button
                                className="p-2 font-bold text-xl border border-white bg-transparent hover:bg-white text-white hover:text-Brown"
                                onClick={handleNextSlide}
                            >
                                <BiChevronRight size={28} />
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