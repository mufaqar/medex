import React from 'react';
import Head from 'next/head';

function About() {
    return (
        <>
            <Head>
                <title>About Us - Medex Worldwide</title>
                <meta name="description" content="Medex Worldwide is a global wholesaler and distributor of high quality reconditioned/refurbished ultrasound, endoscopy systems"  />
	
            </Head>
            <main>
                <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
                    <div className="w-full">
                        <h2 className="md:text-5xl text-4xl text-title-color font-bold text-center">
                            About Us
                        </h2>
                    </div>
                </div>

                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20'>
                    <div className='my-8 lg:my-12'>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Trust is our best policy as your business partner Medex Worldwide.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            ‘When you sleep, you just dream, when you challenge yourself, your dreams will come true’.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Medex Worldwide started business with domestic distribution and maintenance of medical equipment like Ultrasound Scanners, Endoscopes, Clinical Lab Equipment, C-Arm , Skin Care Lasers.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Besides our domestic sales, we also have exported new and Refurbished medical equipment to many countries based on years of successful domestic business. We have professional certified Engineers to refurbished equipment.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Now, we have our headquarter in Korea and established branches in Vietnam and Pakistan.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            We believe that nothing is impossible. Not only items that we deal with at the present, but also other Korean products you may be interested in can be discussed sincerely.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            We are ready to answer any questions you may have by phone in Korean, English, Hindi, Urdu at any time.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            We are trying to be your ideal business partner by providing the best quality products and service you can trust.
                        </p>
                        <h3 className="text-xl font-bold text-title-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            MEDICAL EQUIPMENTS
                        </h3>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Ultrasound Scanner ,  Skin Care Laser
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Endoscope  ,   Laboratory Equipments
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            MRI  ,  CT Scanner
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About