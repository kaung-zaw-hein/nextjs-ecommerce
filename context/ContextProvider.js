import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from  'react-hot-toast';
import { Product } from '../components';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const  [ showCart, serShowCart ] = useState(false);
    const  [ cartItems, setCartItems ] = useState([]);
    const  [ totalPrice, setTotalPrice ] = useState(0);
    const  [ totalQuantites, setTotalQuantities ] = useState(0);
    const  [ qty, setQty ] = useState(1);

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
    
        toast.success(`${qty} ${product.name} added to the cart.`);
      } 
    

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
    
    const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }

    return(
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantites,
                qty,
                incQty,
                decQty,
                onAdd
            }}>
                {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);
