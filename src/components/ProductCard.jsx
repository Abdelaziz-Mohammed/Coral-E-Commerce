
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartcontext/CartContext'

function ProductCard({ product }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  return (
    <>
      <div className='w-fit'>
        <Link to={`/shop/${product.id}`}>
            <img src={`images/products/${product.image}`} alt={product.title}
                className='w-[280px] h-[360px] rounded rounded-bl-none rounded-br-none border-b border-orange-200
                    hover:scale-[1.05] cursor-pointer shadow-inner ease-linear duration-200' />
        </Link>
        <div className='py-6 px-4 shadow-lg rounded-bl rounded-br'>
            <h3 className='font-normal text-sm sm:text-base md:text-lg mb-3'>
                {product.title}
            </h3>
            <div className='flex items-center justify-between gap-5 mb-3'>
                <span className='text-neutral-500'>
                    {product.category}
                </span>
                <span className='font-semibold'>
                    ${product.price}
                </span>
            </div>
            <button
              onClick={() => {
                if (inCart) {
                  removeFromCart(product.id);
                  setInCart(false);
                }
                else {
                  addToCart(product, 1);
                  setInCart(true);
                }
              }}
              className="text-white bg-blue-500 flex items-center justify-center gap-3 rounded shadow-md py-1 w-full">
                {
                  !inCart
                  &&
                  <>
                    <FaShoppingCart />
                    Add to Cart
                  </>
                }
                {
                  inCart
                  &&
                  <>
                    <MdRemoveShoppingCart />
                    Remove From Cart
                  </>
                }
            </button>
        </div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard
