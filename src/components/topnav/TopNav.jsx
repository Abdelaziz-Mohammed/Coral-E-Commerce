
import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../cartcontext/CartContext";

function TopNav() {
  const { cart } = useContext(CartContext);
  return (
    <>
        <div className="flex items-center justify-between py-4 px-3 border-b border-b-neutral-300">
            {/* Logo */}
            <Link to='/'>
                <img src="/Coral-E-Commerce/logo.svg" alt="logo" />
            </Link>
            {/* Account + Shopping Cart */}
            <div className="flex items-center gap-4 text-black text-xl">
                <Link to='/login'
                    className="flex items-center justify-center gap-2 hover:text-orange-500 ease-in-out duration-200">
                    <FiLogIn className="text-2xl" />
                    <span className="hidden sm:block text-sm">Login</span>
                </Link>
                <Link to='/cart'
                    className="flex items-center justify-center gap-2 hover:text-orange-500 ease-in-out duration-200 relative">
                    <FaShoppingCart className="text-2xl" />
                    <span className="hidden sm:block text-sm">Cart</span>
                    <span className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[18px] h-[18px] text-white text-xs text-center font-normal tracking-[-1px] bg-red-500 rounded-full flex items-center justify-center">
                        {cart.length}
                    </span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default TopNav
