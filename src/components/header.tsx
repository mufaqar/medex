"use client"; // this is a client component
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/images/logo.png';
import { BsEnvelopeFill, BsFillTelephoneFill, BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsWhatsapp, } from 'react-icons/bs';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { useRouter } from 'next/dist/client/router';


function Header() {
    const [navbar, setNavbar] = useState(false);
    const [megamenu, setMegamenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    // const router = useRouter()
    // const handleRedirect = (path: string) => {
    //     router.push(path);
    //     setMegamenu(false)
    // }
    return (
        <>

            <GoogleAnalytics measurementId="G-TKKQ94RWML" />;
            <header className='fixed top-0 left-0 right-0 bg-white z-40 shadow-md'>
                <nav className="">
                    <div onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }} className="hidden md:block bg-dark-gray relative z-50">
                        <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 md:flex flex-wrap justify-between items-center py-2.5 '>
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
                                        <BsEnvelopeFill className='text-Brown'/> sonomedex@gmail.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+82-10-2320-8582" target="_blank" className='flex items-center gap-2 py-2 pl-3 pr-4 text-sm font-normal text-white/90 hover:text-white md:p-0 '>
                                        <BsFillTelephoneFill className='text-Brown'/> +82-10-2320-8582
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 flex flex-wrap justify-between items-center py-2.5">
                        <Link href="/" className="flex items-center relative z-50">
                            <Image src={Logo} alt="logo" className='md:w-full w-1/2' onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }} />
                        </Link>
                        <button onClick={() => { setNavbar(!navbar), setDropdown(false), setMegamenu(false) }} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 relative z-50">
                            {!navbar ? (
                                <><span className="sr-only">Open main menu</span><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            )}

                        </button>
                        <div className={`${navbar ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 `}>
                            <ul className="relative z-50 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                        Home
                                    </Link>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/botox-filler" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                        Botox and Filler
                                    </Link>
                                </li>
                                <li onMouseOver={() => { setMegamenu(!megamenu), setDropdown(false) }}>
                                    <span className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                        <span onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                            <Link href="/products">
                                                Products
                                            </Link>
                                        </span>
                                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </span>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/categories" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                    Categories
                                    </Link>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/blog" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                    Blog
                                    </Link>
                                </li>
                                <li>
                                    <span className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase ">
                                        <span onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                            <Link href="/about-us">
                                                About us
                                            </Link>
                                        </span>
                                        <svg onClick={() => { setDropdown(!dropdown), setMegamenu(false) }} className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <ul onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }} className={`${dropdown ? 'block' : 'hidden'} bg-white md:absolute md:right-36 md:top-12 md:py-[15px] md:px-[30px] py-0 px-0`}>
                                        <li>
                                            <Link href="/who-we-are" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase">
                                                Who we are
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/contact-us" className="block py-2 pl-3 pr-4 text-title-color hover:text-Brown border-b-0 border-gray-300 md:border-0 md:p-0 text-sm font-semibold uppercase">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mega Droupdown */}

                    <div className={`${megamenu ? 'block' : 'hidden'} mt-1 bg-white border-gray-200 shadow-sm border-y`}>
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-base text-gray-500  md:grid-cols-3 md:px-6">
                            <ul className="mb-4 space-y-4 md:mb-0 md:block">
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/product-category/botox-and-fillers" className="text-sm font-semibold uppercase text-title-color hover:text-Brown">
                                        BOTOX AND FILLERS
                                    </Link>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/product-category/laboratory-instruments" className="text-sm font-semibold uppercase text-title-color hover:text-Brown">
                                        LABORATORY INSTRUMENTS
                                    </Link>
                                </li>
                            </ul>
                            <ul className="mb-4 space-y-4 md:mb-0">
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/product-category/medical-equipments" className="text-sm font-semibold uppercase text-title-color hover:text-Brown">
                                        MEDICAL EQUIPMENT
                                    </Link>
                                </li>
                                <li onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }}>
                                    <Link href="/product-category/ultrasound-scanner" className="text-sm font-semibold uppercase text-title-color hover:text-Brown">
                                        ULTRASOUND SCANNER
                                    </Link>
                                </li>
                            </ul>
                            <Link onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }} href="/contact-us" className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light" style={{ backgroundImage: 'url(/docs/images/dashboard-overview.png)' }}>
                                <p className="max-w-xl mb-5 leading-tight tracking-tight text-white text-sm font-semibold uppercase">  Best quality products and service you can trust </p>
                                <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-sm font-semibold uppercase text-center text-white border border-white hover:bg-white hover:text-Brown focus:outline-none">
                                    Contact Us
                                    <svg className="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div onClick={() => { setMegamenu(false), setDropdown(false), setNavbar(false) }} className={`${megamenu || dropdown || navbar ? 'block' : 'hidden'} opacity-0 w-screen h-screen absolute top-0 -z-30`}></div>
            </header> </>
    )
}

export default Header