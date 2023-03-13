import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client';


const Product = () => {
     const { loading, error, data } = useQuery<any>(gql`
    

     query Products {
          products(first: 500) {
            nodes {
              id
              title
            }
          }
        }
   `);
     console.log("🚀 ~ file: page.tsx:18 ~ Product ~ data:", data)

  return (

     <div>Product</div>

  )
};
export default Product;



