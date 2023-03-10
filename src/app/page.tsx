"use client"; // this is a client component
import Banner from '@/components/banner';
import {CategoryBox, ProductBox, Cta, Feature_Category } from '../components/imports';

export default function Home() {
  return (
    <>
      <Banner />
      <CategoryBox />
      <ProductBox/>      
      <Feature_Category />
      <ProductBox/>
      <Cta/>
    </>

  )
}
