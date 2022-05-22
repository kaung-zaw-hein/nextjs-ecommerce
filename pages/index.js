import React from 'react';

// import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <HeroBanner />

    <div className="products-heading">
       <h2> Beset Selling Products</h2>
       <p>Speakers of many variabtions</p>
    </div>

    <div className="products-container">
      {['product1', "products 2"].map((product) => product) }
    </div>
    Footer
   </>
  )
}
