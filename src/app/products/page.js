// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import Featured_Img from '../../../public/images/p-1.jpg';

// function Products() {
//   return (
//     <main>
//       <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
//         <div className="w-full">
//           <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
//             Products
//           </h2>
//         </div>
//       </div>

//       <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
//         <div className="my-8 lg:my-12">
//           <div className="grid gap-4 grid-cols-2 md:grid-cols-5 2xl:gap-5">
//             {Products_data.map((item, index) => (
//               <div key={index} className="mx-auto">
//                 <Image src={item.featured} alt="" />
//                 <h4 className="text-sm leading-6 text-gray-400 mt-1.5 mb-1.5">
//                   {item.category}
//                 </h4>
//                 <Link
//                   href={item.prodct_Link}
//                   className="text-lg leading-5 mb-2 hover:text-[#BF1800] "
//                 >
//                   {item.title}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Products;

// export const Products_data = [
//   {
//     featured: Featured_Img,
//     title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
//     category: 'Common Good',
//     prodct_Link: '/products/single',
//   },
//   {
//     featured: Featured_Img,
//     title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
//     category: 'Common Good',
//     prodct_Link: '#',
//   },
//   {
//     featured: Featured_Img,
//     title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
//     category: 'Common Good',
//     prodct_Link: '#',
//   },
//   {
//     featured: Featured_Img,
//     title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
//     category: 'Common Good',
//     prodct_Link: '#',
//   },
//   {
//     featured: Featured_Img,
//     title: '[Sample] Able Brewing System  consetetur sadipscing elitr',
//     category: 'Common Good',
//     prodct_Link: '#',
//   },
// ];
