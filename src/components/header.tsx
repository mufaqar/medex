"use client"; // this is a client component
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/images/logo.png';
import { BsEnvelopeFill, BsFillTelephoneFill, BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsWhatsapp, } from 'react-icons/bs';

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [megamenu, setMegamenu] = useState(false);
    return (
        <header className='fixed top-0 left-0 right-0 bg-white/70 z-40'>
            <nav className="">
                <div className="hidden sm:flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5 bg-[#BF1800]">
                    <ul className='flex flex-col text-sm font-medium md:flex-row md:space-x-5 md:mt-0'>
                        <li>
                            <Link href="#" className='block p-2 rounded-full text-white bg-[#0000008c] hover:bg-[#00000029]'>
                                <BsFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='block p-2 rounded-full text-white bg-[#0000008c] hover:bg-[#00000029]'>
                                <BsTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='block p-2 rounded-full text-white bg-[#0000008c] hover:bg-[#00000029]'>
                                <BsYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='block p-2 rounded-full text-white bg-[#0000008c] hover:bg-[#00000029]'>
                                <BsInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='block p-2 rounded-full text-white bg-[#0000008c] hover:bg-[#00000029]'>
                                <BsWhatsapp />
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col text-sm font-medium md:flex-row md:space-x-8 md:mt-0'>
                        <li>
                            <Link href="#" className='flex items-center gap-2 py-2 pl-3 pr-4 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '>
                                <BsEnvelopeFill/> sonomedex@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='flex items-center gap-2 py-2 pl-3 pr-4 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '>
                               <BsFillTelephoneFill/> +82-10-2320-8582
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5">
                    <Link href="/" className="flex items-center">
                        <Image src={Logo} alt="logo" />
                    </Link>
                    <button onClick={() => { setNavbar(!navbar) }} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${navbar ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 `}>
                        <ul className="flex flex-col mt-4 text-base uppercase font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => { setMegamenu(!megamenu) }} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 text-base uppercase md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 ">
                                    Products
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mega Droupdown */}

                <div className={`${megamenu ? 'block' : 'hidden'} mt-1 bg-white border-gray-200 shadow-sm border-y`}>
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500  md:grid-cols-3 md:px-6">
                        <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Online Stores
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Segmentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Marketing CRM
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Online Stores
                                </Link>
                            </li>
                        </ul>
                        <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Our Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    License
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline hover:text-blue-600">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                        <Link href="#" className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light" style={{ backgroundImage: 'url(/docs/images/dashboard-overview.png)' }}>
                            <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                                Get started
                                <svg className="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header