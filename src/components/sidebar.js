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
                            <p className="flex justify-between items-center w-full text-start outline-none focus:outline-none focus:ring-0 focus:text-gray-500">
                                <span className="capitalize">
                                    {item.title}
                                </span>
                              
                            </p>
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