
import PropTypes from 'prop-types'
import { CartContext } from './CartContext.jsx'
import { useEffect, useState } from 'react'

function CartProvider({children}) {
  // manage cart state
  const [cart, setCart] = useState([]);
  // load cart from local storage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  // save cart to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  // function to add product to cart
  function addToCart(product, count = 1) {
    setCart((prevCart) => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? {...item, count: count || 1} : item);
      }
      else {
        return [...prevCart, {...product, count: count || 1}];
      }
    });
  }
  // function to remove product from cart
  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  }
  // function to increment count of an existing product
  function incrementCount(id) {
    setCart(prevCart => prevCart.map(product => product.id === id ? {...product, count: product.count + 1} : product))
  }
  // function to decrement count of an existing product
  function decrementCount(id) {
    setCart(prevCart => prevCart.map(product => product.id === id ? {...product, count: product.count > 1 ? product.count - 1 : 1} : product))
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementCount, decrementCount }}>
        {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartProvider



