import React from 'react';
import Link from 'next/link';


const HeroBanner = ({  }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">fdasfa</p>
        <h3>fdsdasf</h3>
        <h1>fsadfsa</h1>
        <img src="https://bit.ly/3sOgSxO" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/`}>
            <button type="button">fadssfsaf</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>fdsa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner