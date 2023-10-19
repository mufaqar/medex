"use client"; // this is a client component
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/images/logo.png';
import { BsEnvelopeFill, BsFillTelephoneFill, BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsWhatsapp, } from 'react-icons/bs';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { useRouter } from 'next/dist/client/router';
import { COMPILER_INDEXES } from 'next/dist/shared/lib/constants';


function Header() {
    const [navbar, setNavbar] = useState(false);
    const [servicesNav, setServicesNav] = useState<any>(null)
    
    const handleMouseEnter = (idx:number) => {
        setServicesNav(idx)
    }
    const handleMouseLeave = (idx:number) => {
        setServicesNav(null)
    }

    return (
        <>

            <GoogleAnalytics measurementId="G-TKKQ94RWML" />;
            <header className='fixed top-0 left-0 right-0 bg-white z-40 shadow-md'>
                <nav className="">
                    <div onClick={() => { setNavbar(false) }} className="hidden md:block bg-dark-gray relative z-50 py-2">
                        <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 md:flex flex-wrap justify-between items-center'>
                            <ul className='flex flex-col text-sm font-medium md:flex-row md:space-x-5 md:mt-0'>
                                <li>
                                    <Link href="https://www.facebook.com/medexworlwide/" target="_blank" className='block rounded-full text-white hover:text-Brown '>
                                        <BsFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/BotoxKorea" target="_blank" className='block rounded-full text-white hover:text-Brown '>
                                        <BsTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UCSc1ua3BkBlZlUaSvsXgT2Q" target="_blank" className='block rounded-full text-white hover:text-Brown '>
                                        <BsYoutube />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/korea_botox_filler_export" target="_blank" className='block rounded-full text-white hover:text-Brown '>
                                        <BsInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://api.whatsapp.com/send?phone=821023208582&text=Get%20Inquiry" target="_blank" className='block rounded-full text-white hover:text-Brown '>
                                        <BsWhatsapp />
                                    </Link>
                                </li>
                            </ul>
                            <ul className='flex flex-col md:flex-row md:space-x-8 md:mt-0'>
                                <li>
                                    <Link href="mailto:sonomedex@gmail.com" target="_blank" className='flex items-center gap-2 py-2 pl-3 pr-4 text-sm font-normal text-white/90 hover:text-white md:p-0 '>
                                        <BsEnvelopeFill className='text-Brown' /> sonomedex@gmail.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+82-10-2320-8582" target="_blank" className='flex items-center gap-2 py-2 pl-3 pr-4 text-sm font-normal text-white/90 hover:text-white md:p-0 '>
                                        <BsFillTelephoneFill className='text-Brown' /> +82-10-2320-8582
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 flex flex-wrap justify-between items-center">
                        <Link href="/" className="flex items-center relative z-50">
                            <Image src={Logo} alt="logo" className='md:w-full w-3/4' onClick={() => { setNavbar(false) }} />
                        </Link>
                        <button onClick={() => { setNavbar(!navbar) }} type="button" className="inline-flex items-center p-1.5 my-1 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-gray-200 relative z-50">
                            {!navbar ? (
                                <><span className="sr-only">Open main menu</span><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>


                        <div className={`${navbar ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 `}>
                            <ul className="relative z-50 flex md:items-center flex-col my-4  md:flex-row md:space-x-8 md:my-0">
                                {
                                    NavLinks.map((item: any, idx: number) => (
                                        <li key={idx} className='relative md:py-3'
                                            onMouseEnter={() => handleMouseEnter(idx)}
                                            onMouseLeave={() => handleMouseLeave(idx)}
                                        >
                                            <span className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-title-color hover:text-Brown md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                                <Link href={item.link}>
                                                    {item.name}
                                                </Link>
                                                {item?.subNav &&  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                                            </span>
                                            <ul className={`${servicesNav === idx ? 'block' : 'hidden'} bg-white pl-5  ${item?.subNav && 'md:py-[15px] md:px-[30px]'} md:border md:absolute md:right-0  md:top-12  py-0 px-0`}>
                                                {item?.subNav?.map((snav:any,i:number)=>(
                                                    <li className="py-1" key={i}>
                                                    <Link href={snav.link} className="text-sm whitespace-nowrap font-semibold uppercase text-title-color hover:text-Brown">
                                                        {snav.name}
                                                    </Link>
                                                </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>


                </nav>
            </header> </>
    )
}

export default Header


const NavLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Botox and Filler",
        link: "/botox-filler",
    },
    {
        name: "Products",
        link: "/products"
    },
    {
        name: "Categories",
        link: "/categories",
        subNav: [
            {
                name: "BOTOX AND FILLERS",
                link: "/product-category/botox-and-fillers"
            },
            {
                name: "LABORATORY INSTRUMENTS",
                link: "/product-category/botox-and-fillers"
            },
            {
                name: "MEDICAL EQUIPMENT",
                link: "/product-category/medical-equipments"
            },
            {
                name: "ULTRASOUND SCANNER",
                link: "/product-category/ultrasound-scanner"
            }
        ]
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "About us",
        link: "/about-us",
        subNav: [
            {
                name: "Who we are",
                link: "/who-we-are"
            }
        ]
    },
    {
        name: "Contact us",
        link: "/contact-us"
    }
]