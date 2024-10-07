"use client"
import { useEffect } from "react"

const productsURL = 'https://dummyjson.com/products';

export default function Products() {

  useEffect(()=>{
    async function fetchProducts() {
      const response = await fetch(productsURL);
      const data = await response.json();

      console.log(data);
      
    }

    fetchProducts();
  },[])
  
  return (
    <main className="main">products</main>
  )
}
