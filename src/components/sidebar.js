import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className=''>
            <h2 className='text-[20px] xl:text-[22px] font-medium xl:leading-8 md:mb-5 mb-3'>
                All Categories
            </h2>
            <div>
                <ul>
                    {categories?.map((item, index) => (
                        <li key={index} className="flex justify-between items-center transition text-sm md:text-[15px] font-medium  border-t border-black/10 first:border-t-0  py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3 text-gray-500 hover:text-[#BF1800]">
                            <Link href={item.url} className="flex justify-between items-center w-full text-start outline-none focus:outline-none focus:ring-0 focus:text-gray-500">
                                <span className="capitalize">
                                    {item.title}
                                </span>
                                <span className="ms-auto">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-base text-gray-500 text-opacity-40" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                    </svg>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

export const categories = [
    {
        title: "BOTOX AND FILLERS",
        url: "#",
    },
    {
        title: "LABORATORY INSTRUMENTS",
        url: "#",
    },
    {
        title: "MRI",
        url: "#",
    },
    {
        title: "SKIN CARE LASER",
        url: "#",
    },
    {
        title: "ULTRASOUND SCANNER",
        url: "#",
    },
    {
        title: "CT SCAN",
        url: "#",
    },
    {
        title: "ENDOSCOPE",
        url: "#",
    },
]