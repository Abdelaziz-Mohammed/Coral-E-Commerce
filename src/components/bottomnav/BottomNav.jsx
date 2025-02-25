
import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa"

function BottomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories] = useState([
    { id: 1, name: 'Jewelry & Accessories', path: '/' },
    { id: 2, name: 'Clothing & Shoes', path: '/' },
    { id: 3, name: 'Home & Living', path: '/' },
    { id: 4, name: 'Wedding & Party', path: '/' },
    { id: 5, name: 'Toys & Entertainment', path: '/' },
    { id: 6, name: 'Art & Collectibles', path: '/' },
    { id: 7, name: 'Craft Supplies & Tools', path: '/' },
  ]);
  const searchBox = useRef(null);
  return (
    <>
        <div className="flex lg:hidden items-center justify-between gap-3 py-2 px-3">
            <div className="flex-1 flex items-center justify-start gap-3">
                {/* Search Icon */}
                <FaSearch className='text-black w-5 h-5 cursor-pointer hover:text-orange-500 ease-in-out duration-200'
                    onClick={() => searchBox.current.focus()} />
                {/* Search Box */}
                <input type="text" placeholder="Search..." ref={searchBox}
                    className="text-black border-[1.5px] border-neutral-400 py-1 pl-3 rounded outline-none focus:outline-none w-[180px] focus:w-[220px] focus:border-orange-500 ease-in-out duration-300"/>
            </div>
            {/* small screens menu Toggler */}
            <div>
                <button>
                    {
                        isMenuOpen ?
                        <FaTimes className='w-5 h-5 text-black hover:text-orange-500 ease-in-out duration-200' onClick={() => setIsMenuOpen(i => !i)}  /> :
                        <FaBars className='w-5 h-5 text-black hover:text-orange-500 ease-in-out duration-200' onClick={() => setIsMenuOpen(i => !i)} />
                    }
                </button>
            </div>
        </div>

        {/* Categories */}
        <div className='pt-2 pb-4 hidden lg:block '>
            <ul className='flex items-center justify-center gap-[10px] text-black'>
                {
                    categories.map(category =>
                        <li key={category.id}
                            className='hover:text-orange-500 ease-in-out duration-200 border-r border-r-neutral-300 pr-[10px] last:border-none last:p-0'>
                            <Link to={category.path} className="text-sm">
                                { category.name }
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>

        {/* Categories for small screens */} 
        {
            isMenuOpen
            && 
            <div>
                <ul 
                    className={`text-white bg-black/70 px-4 py-2 rounded absolute z-10 top-[120px] left-6 mx-auto backdrop-blur-md 
                    transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    style={{ width: 'calc(100% - (2 * 6 * 4px))' }}>
                    {
                        categories.map(category =>
                            <li key={category.id}
                                className='hover:text-orange-500 hover:translate-x-2 ease-in-out duration-200 cursor-pointer py-1'>
                                <Link to={category.path}>
                                    { category.name }
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        }
    </>
  )
}

export default BottomNav
