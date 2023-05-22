import Link from 'next/link';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Img1 from '../../public/images/mri.jpg';

export default function Footer() {
    return (
        <footer className=''>
            <div className='bg-[#540d03] pt-10 md:pt-0'>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-12 items-center'>
                    <div className='py-10 px-0'>
                        <ul className='flex text-2xl font-medium flex-row space-x-2 md:mt-0'>
                            <li>
                                <Link href="https://www.facebook.com/medexworlwide/" target="_blank" className='block p-3 rounded-full border border-white/60 hover:border-white text-white/60 hover:text-white '>
                                    <BsFacebook width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/BotoxKorea" target="_blank" className='block p-3 rounded-full border border-white/60 hover:border-white text-white/60 hover:text-white '>
                                    <BsTwitter width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/channel/UCSc1ua3BkBlZlUaSvsXgT2Q" target="_blank" className='block p-3 rounded-full border border-white/60 hover:border-white text-white/60 hover:text-white '>
                                    <BsYoutube width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/korea_botox_filler_export" target="_blank" className='block p-3 rounded-full border border-white/60 hover:border-white text-white/60 hover:text-white '>
                                    <BsInstagram width={10} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://api.whatsapp.com/send?phone=821023208582&text=Get%20Inquiry" target="_blank" className='block p-3 rounded-full border border-white/60 hover:border-white text-white/60 hover:text-white '>
                                    <BsWhatsapp width={10} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:border-x border-x-0 md:border-y-0 border-y border-[#bf18004a] h-full py-10 px-0'>
                        <Link href="/">
                            <Image src={Logo} alt="Lono.png" className='w-4/5 m-auto' />
                        </Link>
                    </div>
                    <div className='py-10 px-0'>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            OUR NEWSLETTER
                        </h3>
                        <form className="flex items-stretch ">
                            <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-3 w-4/5 border border-transparent focus:outline-none focus:border-none" type="email" placeholder="Your Email" />
                            <button className="w-32 rounded-l-none hover:bg-[#BF1800] bg-[#BF1800] rounded text-base font-medium leading-none text-white p-3 uppercase focus:outline-none focus:ring-none border border-transparent">subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='bg-[#bf18004a] h-[1px]'></div>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-4 grid-cols-1 gap-5 md:gap-12 py-16 '>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            About Medex
                        </h3>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="https://www.google.com/maps/place/119+Sohyang-ro,+Wonmi-gu,+Bucheon,+Gyeonggi-do,+South+Korea/@37.5025335,126.7525041,15z/data=!3m1!4b1!4m2!3m1!1s0x357b7d3e1121c409:0x3743772ecbe8a8c1" target="_blank"
                                    className="duration-200 text-white hover:text-[#BF1800] flex ">
                                    <HiLocationMarker size={14} className="mr-1 mt-1 min-w-[40px]" />
                                    318 Diart Gallery A Dong , Sohyang Ro 119 , Wonmi-gu,
                                    Bucheon-si Gyeonggi-do , South Korea
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="telto:+82-10-2320-8582" target="_blank"
                                    className="duration-200 text-white hover:text-[#BF1800] flex ">
                                    <BsFillTelephoneFill size={14} className="mr-1 mt-1 min-w-[40px]" />
                                    Phone: +82-10-2320-8582
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <p className="duration-200 text-white hover:text-[#BF1800] flex ">
                                    <FaFax size={14} className="mr-1 mt-1 min-w-[40px]" />
                                    Fax: +82-32-3221819
                                </p>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="mailto:sonomedex@gmail.com" target="_blank"
                                    className="duration-200 text-white hover:text-[#BF1800] flex ">
                                    <BsEnvelopeFill size={14} className="mr-1 mt-1 min-w-[40px]" />
                                    Email: sonomedex@gmail.com
                                </Link>
                            </li>
                        </ul>
                        <h3 className='mt-4 sm:mt-5 lg:mt-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            Open Hours
                        </h3>
                        <p className="text-white">
                            Monday to Friday: 10am to 7pm
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            IMPORTANT LINKS
                        </h3>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="/blog" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Blog
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/products" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Products
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/about-us" className="duration-200 text-white hover:text-[#BF1800]" >
                                    About us
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/botox-filler" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Botox And Filler
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            Categories
                        </h3>
                        <ul className="text-sm lg:text-base flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="/product-category/botox-and-fillers" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Botox and Fillers
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/product-category/laboratory-instruments" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Laboratory Instruments
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/product-category/medical-equipments" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Medical Equipments
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="/product-category/ultrasound-scanner" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Ultrasound Scanner
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-lg lg:text-[18px] text-white lg:leading-7 font-medium uppercase'>
                            RECENT POST
                        </h3>
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
                                        className="text-lg text-white hover:text-[#BF1800]"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-white">
                                        16 March 2023
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
                                        className="text-lg text-white hover:text-[#BF1800]"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-white">
                                        16 March 2023
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
                                        className="text-lg text-white hover:text-[#BF1800]"
                                    >
                                        Botox
                                    </Link>
                                    <p className="text-sm mt-2 text-white">
                                        16 March 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#BF1800] p-5'>
                <p className="text-white text-center text-sm lg:text-base">
                    © 2010-2023 Medex World Wide. Design & Developed by Mufaqar.com
                </p>
            </div>
        </footer>
    )
}
