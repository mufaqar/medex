import Link from 'next/link';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter, BsWhatsapp, BsYoutube, BsEnvelopeFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Img1 from '../../public/images/mri.jpg';
import Card from '../../public/images/card.png';

export default function Footer() {
    return (
        <footer className=''>
            <div className='bg-light-gray pt-10 md:pt-0'>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-12 items-center'>
                    <div className='py-10 px-0'>
                        <ul className='flex text-2xl font-medium flex-row space-x-2 md:mt-0'>
                            <li>
                                <Link href="https://www.facebook.com/medexworlwide/" target="_blank" className='block p-3 rounded-full border border-secondry hover:border-Brown text-secondry '>
                                    <BsFacebook width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/BotoxKorea" target="_blank" className='block p-3 rounded-full border border-secondry hover:border-Brown text-secondry '>
                                    <BsTwitter width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/channel/UCSc1ua3BkBlZlUaSvsXgT2Q" target="_blank" className='block p-3 rounded-full border border-secondry hover:border-Brown text-secondry '>
                                    <BsYoutube width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/korea_botox_filler_export" target="_blank" className='block p-3 rounded-full border border-secondry hover:border-Brown text-secondry '>
                                    <BsInstagram width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://api.whatsapp.com/send?phone=821023208582&text=Get%20Inquiry" target="_blank" className='block p-3 rounded-full border border-secondry hover:border-Brown text-secondry '>
                                    <BsWhatsapp width={10} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:border-x border-x-0 md:border-y-0 border-y border-Brown/50 h-full py-10 px-0'>
                        <Link href="/">
                            <Image src={Logo} alt="Lono.png" className='w-3/5 m-auto' />
                        </Link>
                    </div>
                    <div className='py-10 px-0'>
                        <h6 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            OUR NEWSLETTER
                        </h6>
                        <form className="flex items-stretch ">
                            <input size={40} className="text-sm leading-none text-white placeholder:text-white h-10 p-3 w-4/5 border-b bg-transparent border-[#fde6d84d] focus:outline-none " type="email" placeholder="Enter your email..." />
                            <button className="w-32 btn hover:bg-white bg-Brown duration-200 text-xs tracking-widest leading-none text-white hover:text-Brown font-medium p-3 uppercase focus:outline-none focus:ring-none border border-transparent">subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='bg-Brown/50 h-[1px]'></div>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-4 grid-cols-1 gap-5 md:gap-12 py-16 '>
                    <div>
                        <h6 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            About Medex
                        </h6>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="https://www.google.com/maps/place/119+Sohyang-ro,+Wonmi-gu,+Bucheon,+Gyeonggi-do,+South+Korea/@37.5025335,126.7525041,15z/data=!3m1!4b1!4m2!3m1!1s0x357b7d3e1121c409:0x3743772ecbe8a8c1" target="_blank"
                                    className="duration-200 text-primary hover:text-Brown font-medium flex ">
                                    <HiLocationMarker size={14} className="mr-1 mt-1 min-w-[40px] text-Brown" />
                                    318 Diart Gallery A Dong , Sohyang Ro 119 , Wonmi-gu,
                                    Bucheon-si Gyeonggi-do , South Korea
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="telto:+82-10-2320-8582" target="_blank"
                                    className="duration-200 text-primary hover:text-Brown font-medium flex ">
                                    <BsFillTelephoneFill size={14} className="mr-1 mt-1 min-w-[40px] text-Brown" />
                                    Phone: +82-10-2320-8582
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <p className="duration-200 text-primary hover:text-Brown font-medium flex ">
                                    <FaFax size={14} className="mr-1 mt-1 min-w-[40px] text-Brown" />
                                    Fax: +82-32-3221819
                                </p>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="mailto:sonomedex@gmail.com" target="_blank"
                                    className="duration-200 text-primary hover:text-Brown font-medium flex ">
                                    <BsEnvelopeFill size={14} className="mr-1 mt-1 min-w-[40px] text-Brown" />
                                    Email: sonomedex@gmail.com
                                </Link>
                            </li>
                        </ul>
                        <h6 className='mt-4 sm:mt-5 lg:mt-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            Open Hours
                        </h6>
                        <p className="text-white">
                            Monday to Friday: 10am to 7pm
                        </p>
                    </div>
                    <div>
                        <h6 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            IMPORTANT LINKS
                        </h6>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/blog" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Blog
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/products" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Products
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/about-us" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    About us
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/botox-filler" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Botox And Filler
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            Categories
                        </h6>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/product-category/botox-and-fillers" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Botox and Fillers
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/product-category/laboratory-instruments" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Laboratory Instruments
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/product-category/medical-equipments" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Medical Equipments
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <BiChevronRight size={26} className='text-Brown' />
                                <Link href="/product-category/ultrasound-scanner" className="duration-200 text-primary hover:text-Brown font-medium" >
                                    Ultrasound Scanner
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-2xl text-xl text-white lg:leading-7 font-medium uppercase'>
                            RECENT POST
                        </h6>
                        <div className="grid gap-8">
                            <div className="flex gap-5 ">
                                <div className="w-1/4">
                                    <Image
                                        src={Img1}
                                        alt=""
                                        className="rounded-[15px] object-cover h-full w-full"
                                    />
                                </div>
                                <div className="md:w-3/4 w-1/2 h-full">
                                    <Link
                                        href="#"
                                        className="text-lg text-white hover:text-Brown font-medium"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-primary flex items-center gap-2">
                                        <FaCalendarAlt size={12} className='text-Brown' /> 16 March 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5 ">
                                <div className="w-1/4">
                                    <Image
                                        src={Img1}
                                        alt=""
                                        className="rounded-[15px] object-cover h-full w-full"
                                    />
                                </div>
                                <div className="md:w-3/4 w-1/2 h-full">
                                    <Link
                                        href="#"
                                        className="text-lg text-white hover:text-Brown font-medium"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-primary flex items-center gap-2">
                                        <FaCalendarAlt size={12} className='text-Brown' /> 16 March 2023
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5 ">
                                <div className="w-1/4">
                                    <Image
                                        src={Img1}
                                        alt=""
                                        className="rounded-[15px] object-cover h-full w-full"
                                    />
                                </div>
                                <div className="md:w-3/4 w-1/2 h-full">
                                    <Link
                                        href="#"
                                        className="text-lg text-white hover:text-Brown font-medium"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-primary flex items-center gap-2">
                                        <FaCalendarAlt size={12} className='text-Brown' /> 16 March 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark-gray py-5 '>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <p className="text-white text-sm lg:text-base">
                            © 2010-2023 Medex World Wide. Design & Developed by Mufaqar.com
                        </p>
                    </div>
                    <div>
                        <Image src={Card} alt="card.png" className='md:ml-auto ml-0' />
                    </div>
                </div>
            </div>
        </footer>
    )
}
