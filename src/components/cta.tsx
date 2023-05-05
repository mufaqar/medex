import Link from 'next/link'
import React from 'react'

function Cta() {
    return (
        <section className="text-center text-white bg-fixed bg-[url('/images/pic-2.jpeg')] bg-center sm:py-35 py-40">
            <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
                <div className="flex flex-col">
                    <h4 className="text-xl uppercase mb-5">
                        Clearance Sales
                    </h4>
                    <h2 className="text-6xl uppercase mb-5">
                        All Sales are Final!
                    </h2>
                    <p className="mb-20">
                        Last chance to take advantage of our discounts!
                    </p>
                    <p className="">
                        <Link href="/contact-us" className="bg-white text-gray-700 text-base md:h-12 mt-5 py-4 px-16 font-semibold hover:bg-[#BF1800] hover:text-white  focus:outline-none rounded">
                            CONTACT US
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Cta