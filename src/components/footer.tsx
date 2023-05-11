import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className=''>
            <div className='bg-[#540d03] pt-10 md:pt-16'>
                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-12 pb-[50px] '>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] text-white lg:leading-7 font-medium'>
                            Who We Are
                        </h3>
                        <p className="text-white text-sm lg:text-[16px] max-w-[370px]">
                            Medex Worldwide is a global wholesaler and distributor of high quality reconditioned/refurbished ultrasound, endoscopy systems. We supply high-quality systems all over the globe. We are specialized in exporting reconditioned medical systems, to over 20 countries, from past one and half-decade Read More
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] text-white lg:leading-7 font-medium'>
                            Quick Links
                        </h3>
                        <ul className="text-sm lg:text-[16px] flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    BOTOX AND FILLERS
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    CT SCAN
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    ENDOSCOPE
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    LABORATORY INSTRUMENTS
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    MRI
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    SKIN CARE LASER
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="#" className="duration-200 text-white hover:text-[#BF1800]" >
                                    ULTRASOUND SCANNER
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] text-white lg:leading-7 font-medium'>
                            Contact Info
                        </h3>
                        <ul className="text-sm lg:text-[16px] flex flex-col space-y-3">
                            <li className="flex items-baseline">
                                <Link href="https://www.google.com/maps/place/119+Sohyang-ro,+Wonmi-gu,+Bucheon,+Gyeonggi-do,+South+Korea/@37.5025335,126.7525041,15z/data=!3m1!4b1!4m2!3m1!1s0x357b7d3e1121c409:0x3743772ecbe8a8c1" target="_blank" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Office: 318 Diart Gallery A Dong , Sohyang Ro 119 , Wonmi-gu,
                                    City : Bucheon-si
                                    Province : Gyeonggi-do , South Korea
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="telto:+82-10-2320-8582" target="_blank" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Phone: +82-10-2320-8582
                                </Link>
                            </li>
                            <li className="flex items-baseline">
                                <p className="duration-200 text-white hover:text-[#BF1800]" >
                                    Fax: +82-32-3221819
                                </p>
                            </li>
                            <li className="flex items-baseline">
                                <Link href="mailto:sonomedex@gmail.com" target="_blank" className="duration-200 text-white hover:text-[#BF1800]" >
                                    Email: sonomedex@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-[#BF1800] p-5'>
                <p className="text-white text-center text-sm lg:text-[16px]">
                    © 2010-2023 Medex World Wide. Design & Developed by Mufaqar.com
                </p>
            </div>
        </footer>
    )
}
