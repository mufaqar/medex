import React from 'react';
import { client } from '@/config/client';
import Footer from '../../components/footer';
import {BlogPostsQuery} from '../../config/quries';
import YoastSeo from '@/components/YoastSeo';

function WhoWeAre({blogs}: any) {

    const seoMeta = {
        title: 'Who we are - Medex Worldwide',
        description: "Medex Worldwide is a global wholesaler and distributor of high quality reconditioned/refurbished ultrasound, endoscopy systems"
    }

    return (
        <>
             <YoastSeo {...seoMeta} />
            <main>
                <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
                    <div className="w-full">
                        <h1 className="md:text-4xl text-2xl capitalize text-title-color font-bold text-center">
                            Who we are
                        </h1>
                    </div>
                </div>

                <div className='mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20'>
                    <div className='my-8 lg:my-12'>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            Medex Worldwide is a global wholesaler and distributor of high quality reconditioned/refurbished ultrasound, endoscopy systems. We supply high-quality systems all over the globe.  We are specialized in exporting reconditioned medical systems, to over 20 countries, from past one and half-decade.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            With a unique background at the highest levels of the Ultrasound industry, Medex Worldwide is your direct source for premium ultrasound equipment. Our goal at Medex Worldwide is to streamline the sourcing process to offer you the most competitive solutions without compromising on product or service quality. We started with a simple idea which was to contribute positively to improve the World healthcare industry by making it accessible and affordable.
                        </p>
                        <p className="text-lg font-normal text-body-color pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
                            We have been admired by customers all over the world. We supply not only Ultrasound and Endoscopy systems CR system, and other systems from leading major brands such as Olympus, Fujinon, Pentax, Toshiba, Hitachi, GE, Aloka, Philips, Siemens, Fujifilm, Konica, and Kodak. We are very pleased to offer you slightly used systems Demo systems. All systems are reconditioned, tested, cleaned, and inspected by well trained technical staff with our highest quality control standards.
                        </p>
                    </div>
                </div>
            </main>
            <Footer blogs={blogs}  />
            </>
    )
}

export default WhoWeAre

export async function getServerSideProps() {
    const blog = await client.query({
      query: BlogPostsQuery,
    });

    const blogs = blog.data.posts.nodes;
    return {
      props: {
        blogs,
      },
    };
  }