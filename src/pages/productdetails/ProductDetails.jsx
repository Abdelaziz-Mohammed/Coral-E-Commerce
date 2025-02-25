
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../../cartcontext/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await ((await fetch('/React-E-Commerce/products.json')).json());
        const p = response.find(item => item.id === parseInt(id));
        if (p) {
          setProduct(p);
        }
        else {
          navigate('/');
        }
      }
      catch {
        console.log('Error fetching product!');
      }
    }
    getProduct();
  }, [id, navigate]);
  return (
    <section className="bg-neutral-50 flex items-center min-h-[84.3vh]">
      <div className="container mx-auto p-3">
        <div className="w-fit p-3 mx-auto bg-white flex gap-x-5 flex-col sm:flex-row md:gap-x-10 border border-primaryBg rounded-lg shadow-sm">
            <img src={`/React-E-Commerce/images/products/${product.image}`} alt={product.title}
                className="w-[280px] rounded-lg shadow-md hover:shadow-lg hover:-rotate-1 hover:scale-[103%] ease-linear duration-100" />
            <div className="text-black text-sm sm:text-base font-semibold sm:flex flex-col justify-evenly">
              <h2 className="mt-5 sm:text-lg">{product.title}</h2>
              <div className="flex items-center justify-between my-3">
                <span className="text-neutral-500">{product.category}</span>
                <span className="font-bold">${product.price}</span>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <p className="flex gap-4 border border-primaryBg p-2 rounded-lg">
                    Count :
                    <span className="font-bold text-lg">{count}</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button onClick={() => setCount(c => c + 1)}
                    className="w-7 h-8 rounded-md text-white font-bold flex items-center justify-center shadow-sm bg-green-500 hover:bg-green-600 transition">+</button>
                  <button onClick={() => setCount(c => c > 0 ? c - 1 : 0)} disabled={count === 0} style={count === 0 ? {'cursor': 'not-allowed', 'backgroundColor': '#f97316'} : {'cursor': 'pointer'}}
                    className="w-7 h-8 rounded-md text-white font-bold flex items-center justify-center shadow-sm bg-red-500 hover:bg-red-600 transition">-</button>
                </div>
              </div>
              <button
                onClick={() => addToCart(product, count)}
                className="text-white bg-blue-500 flex items-center justify-center gap-3 rounded shadow-md w-[280px] py-1">
                <FaShoppingCart />
                  Add to Cart
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails



