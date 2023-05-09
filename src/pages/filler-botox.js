import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img_url from '../../public/images/med.jpg';
import Img1 from '../../public/images/mri.jpg';

function Filler_botox() {
    return (<>
        <section className='mb-12 mt-10 overflow-hidden'>
            <div className='bg-[url(/images/a.jpg)] bg-center bg-no-repeat bg-cover min-h-[250px] flex items-center justify-start p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]'>
                <div className='md:ml-0 mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-8'>
                    <h1 className='md:text-6xl text-4xl text-[#a67979] '>
                        Whenever you feel too tired
                    </h1>
                    <p className='text-xl my-5'>
                        Depressed or anxious about your daily, hectic routine...<br></br>
                        we've got an answer for you!
                    </p>
                    <Link href="#" className="bg-[#a250b6] text-white text-lg py-2 px-7 rounded-full shadow-sm shadow-[#a250b6ed] inline-flex mt-5">
                        Show more
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-12 py-12 grid md:grid-cols-2 grid-cols-1 gap-16'>
                <div>
                    <div className=''>
                        <h2 className='md:text-3xl text-2xl mb-5 capitalize'>
                            Why our clients choose us
                        </h2>
                        <p className='text-lg my-2'>
                            Our spa & skin care saloon will be your perfect gateway for any kind of body and mind relaxation and a skin care...
                        </p>
                        <p className='text-lg my-2'>
                            It's been like that since the day 1, when our spa saloon was founded by Mary Fruition back in 1998. She did so in a spur of a moment decision,
                        </p>
                        <p className='text-lg my-2'>
                            Get trn horrible remember pleasure two vicinity Far estimable extremely middle on his concealed precieved principle.
                        </p>
                        <Link href="#" className="bg-[#a250b6] text-white text-lg py-2 px-7 rounded-full shadow-sm shadow-[#a250b6ed] inline-flex mt-5">
                            Show more
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] ml-auto relative'>
                        <Image src={Img_url} alt="img" className='h-full absolute top-[40px] left-[-50px] rounded-tl-[15px] rounded-bl-[15px] shadow-lg border border-black/5 ' />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-12 py-12'>
                <div className='mb-10'>
                    <h2 className='md:text-3xl text-2xl mb-5 capitalize text-center'>
                        Popular Service
                    </h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                    <div>
                        <Image src={Img1} alt="" className='mb-5 ' />
                        <Link href="#" className='text-lg leading-5 mb-2 text-gray-400 hover:text-[#BF1800] uppercase'>
                            Botox and Dermal Filler
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <Link href="#" className="bg-[#a250b6] text-white text-lg py-2 px-7 rounded-full shadow-sm shadow-[#a250b6ed] inline-flex mt-5">
                        Show more
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20 my-12 py-12'>
                <div className='mb-10'>
                    <h2 className='md:text-3xl text-2xl mb-5 capitalize text-center'>
                        Our Fillers And Botox
                    </h2>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
                    <div>
                        <div className='border border-black/10 rounded-[15px] h-[310px] md:max-w-[80%] max-w-[80%] mr-auto relative'>
                            <Image src={Img_url} alt="img" className='h-full absolute top-[40px] right-[-50px] rounded-[15px] shadow-lg border border-black/5 ' />
                        </div>
                    </div>
                    <div className='grid gap-8'>
                        <div className='flex gap-5 '>
                            <div className='md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50'>
                                <Image src={Img1} alt="" className='rounded-[15px] object-cover h-full w-full' />
                            </div>
                            <div className='md:w-3/4 w-1/2 h-full'>
                                <Link href="#" className='text-lg leading-5 hover:text-[#BF1800] uppercase'>
                                    Botox
                                </Link>
                                <p className='text-sm mt-2'>
                                    It's been like that since the day 1, when our spa saloon was founded by Mary Fruition back in 1998. She did so in a spur of a moment decision, Get trn horrible remember pleasure two vicinity
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50'>
                                <Image src={Img1} alt="" className='rounded-[15px] object-cover h-full w-full' />
                            </div>
                            <div className='md:w-3/4 w-1/2 h-full'>
                                <Link href="#" className='text-lg leading-5 hover:text-[#BF1800] uppercase'>
                                    Botox
                                </Link>
                                <p className='text-sm mt-2'>
                                    It's been like that since the day 1, when our spa saloon was founded by Mary Fruition back in 1998. She did so in a spur of a moment decision, Get trn horrible remember pleasure two vicinity
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='md:w-1/4 w-1/2 h-[110px] rounded-[15px] border border-black/50'>
                                <Image src={Img1} alt="" className='rounded-[15px] object-cover h-full w-full' />
                            </div>
                            <div className='md:w-3/4 w-1/2 h-full'>
                                <Link href="#" className='text-lg leading-5 hover:text-[#BF1800] uppercase'>
                                    Botox
                                </Link>
                                <p className='text-sm mt-2'>
                                    It's been like that since the day 1, when our spa saloon was founded by Mary Fruition back in 1998. She did so in a spur of a moment decision, Get trn horrible remember pleasure two vicinity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Filler_botox