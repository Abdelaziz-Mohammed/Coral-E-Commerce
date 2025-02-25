
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from './../../cartcontext/CartContext'
import { FaMinus, FaPlus, FaShoppingBag, FaTrashAlt } from "react-icons/fa"
import { FaMoneyCheckDollar } from "react-icons/fa6"

function ShoppingCart() {
  const { cart, removeFromCart, incrementCount, decrementCount } = useContext(CartContext);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-center text-black text-3xl tracking-wide font-bold my-12 flex items-center justify-center gap-3">
          <FaShoppingBag /> Shopping Cart
        </h1>
        {
          (cart.length > 0)
          &&
          <>
            <ul className="bg-neutral-100 border border-neutral-300 rounded">
              {
                cart.map(product => 
                  <li key={product.id}
                    className="flex flex-col justify-center items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 py-4 mx-3 border-b border-neutral-300">
                    <div className="flex items-center justify-start gap-2">
                      <Link to={`/shop/${product.id}`}>
                        <img src={`/React-E-Commerce/images/products/${product.image}`} alt=''
                          className="w-12 h-12 rounded shadow-lg border border-neutral-200 hover:scale-[120%] ease-linear duration-200"/>
                      </Link>
                      <span className="text-sm">{product.category}</span>
                    </div>
                    <div className="w-full sm:w-[80%] grid grid-cols-8">
                      <span className="col-span-2 flex items-center justify-center">
                        $ {product.price}
                      </span>
                      <span className="col-span-1 flex items-center justify-center">
                        {product.count}
                      </span>
                      <span className="col-span-2 flex items-center justify-center">
                        $ {product.price * product.count}
                      </span>
                      <button onClick={() => incrementCount(product.id)}
                        className="col-span-1 flex items-center justify-center">
                        <FaPlus />
                      </button>
                      <button onClick={() => decrementCount(product.id)}
                        className="col-span-1 flex items-center justify-center">
                        <FaMinus />
                      </button>
                      <button onClick={() => removeFromCart(product.id)}
                        className="col-span-1 flex items-center justify-center">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                )
              }
            </ul>
            <div>
              <p className="text-center text-black text-2xl font-bold my-6 flex
              items-center justify-center gap-3">
                Total: $ {cart.reduce((acc, product) => acc + product.price * product.count, 0)}
              </p>
              <Link to={'/checkout'} state={{ totalPrice: cart.reduce((acc, product) => acc + product.price * product.count, 0)}}
                className="w-full text-white text-lg font-bold bg-blue-500 hover:bg-blue-600 rounded shadow-lg ease-linear duration-200 flex items-center justify-center gap-2 h-12">
                <FaMoneyCheckDollar />
                <span>Checkout</span>
              </Link>
            </div>
          </>
        }
        {
          (cart.length === 0)
          &&
          <div className="mt-52 flex flex-col items-center justify-center gap-5">
            <p className="text-3xl text-gray-500 text-center">Your cart is empty</p>
            <Link to='/'
                className='flex items-center justify-center gap-2 text-white bg-black hover:bg-orange-500 ease-linear duration-200 rounded-sm px-4 py-2 shadow-lg w-fit'>
                <FaShoppingBag />
                <span className='text-sm text-bold uppercase'>shop now</span>
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default ShoppingCart
