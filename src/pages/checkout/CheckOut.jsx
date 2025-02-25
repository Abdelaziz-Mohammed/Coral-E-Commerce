
import { FaCcMastercard, FaCcVisa, FaDollarSign, FaPaypal } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

function CheckOut() {
  const {state: {totalPrice}} = useLocation();
  return (
    <section className='bg-white'>
      <div className='container mx-auto px-6 py-12'>
        <h1 className="text-center text-black text-3xl tracking-wide font-bold my-12 flex items-center justify-center">
          <FaDollarSign /> Check Out
        </h1>
        <div>
          <p className='font-semibold text-neutral-600 mb-3'>
            Select a payment method
          </p>
          <div className="flex items-center justify-center gap-5 text-3xl mb-6">
            <FaCcVisa className="text-blue-600 border border-neutral-300 rounded h-[60px] sm:h-[70px] flex-1 hover:bg-neutral-100 ease-linear duration-200 cursor-pointer" />
            <FaCcMastercard className="text-red-600 border border-neutral-300 rounded h-[60px] sm:h-[70px] flex-1 hover:bg-neutral-100 ease-linear duration-200 cursor-pointer" />
            <FaPaypal className="text-blue-400 border border-neutral-300 rounded h-[60px] sm:h-[70px] flex-1 hover:bg-neutral-100 ease-linear duration-200 cursor-pointer" />
          </div>
          <form action='/'>
            <div className="flex flex-col">
                <label htmlFor='card-name' className="text-neutral-600 font-semibold mb-3">Name On Card:</label>
                <input type="text" id='card-name' className="border border-neutral-300 rounded h-[40px] sm:h-[50px] p-2 outline-none mb-6" required />
                <label htmlFor='card-number' className="text-neutral-600 font-semibold mb-3">Card Number:</label>
                <input type="text" id='card-number' className="border border-neutral-300 rounded h-[40px] sm:h-[50px] p-2 outline-none mb-6" required />
                <label htmlFor='security-code' className="text-neutral-600 font-semibold mb-3">Security Code:</label>
                <input type="text" id='security-code' className="border border-neutral-300 rounded h-[40px] sm:h-[50px] p-2 outline-none mb-8" required />
                <input type="submit" value={`Pay $ ${totalPrice}`}
                  className='w-full text-white text-lg font-bold bg-blue-500 hover:bg-blue-600 rounded shadow-lg ease-linear duration-200 flex items-center justify-center gap-2 h-12 cursor-pointer'/>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CheckOut
