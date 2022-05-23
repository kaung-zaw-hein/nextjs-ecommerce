import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Brnyr store</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => ""}>
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>

    </div>
  )
}

export default Navbar