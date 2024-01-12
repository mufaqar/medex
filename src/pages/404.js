import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 Page not Found ! - Medex Worldwide</title>
      </Head>
      <main>
        <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
          <div className="w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
              404 Page not found ! | Medex World Worldwide
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <div className="my-8 lg:my-12">
            <p className="text-sm leading-[1.85em] text-gray-500 pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
              404 Page not found
            </p>
            <Link href="/">
              Go back to the homepage
            </Link>
          </div>
        </div>
      </main>
     
    </>
  );
}

export default ErrorPage;

