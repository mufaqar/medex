import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
     <main className="pt-20 w-full flex flex-col justify-center items-center ">
	<h1 className="text-9xl font-extrabold text-[#1A2238] tracking-widest">404</h1>
	<div className="bg-[#BF1800] px-2 text-sm text-white rounded rotate-12 absolute">
		Products Not Found
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#fff] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#BF1800] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        </a>
        <Link href="/" className="relative block px-8 py-3 bg-[#1A2238] text-white border border-current">Go Home</Link>
    </button>
</main>
  )
}

export default NotFound