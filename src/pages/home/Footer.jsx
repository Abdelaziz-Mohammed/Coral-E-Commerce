
import { FaArrowUp, FaCcMastercard, FaCcVisa, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaypal, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* top footer */}
      <section className='bg-white'>
        <div className="container mx-auto px-6 py-12">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8'>
            <div className='h-[180px] md:h-auto flex flex-col gap-2 sm:gap-5'>
              <Link to='/'>
                <img src="/React-E-Commerce/logo.svg" alt="logo" />
              </Link>
              <div className='text-sm max-w-[220px] tracking-wide'>
                <p className='font-semibold text-xs mb-1 text-neutral-500'>Thank you for visiting our store!</p>
                <p className='text-neutral-500'>We are committed to providing you with the best shopping experience</p>
              </div>
              <div className='flex items-center justify-start gap-5'>
               <Link to='https://www.facebook.com' target='_blank'
                  className='flex items-center justify-center w-6 h-6 rounded border border-[#1877F2] hover:bg-primaryBg ease-linear duration-200'>
                 <FaFacebookF className="text-[#1877F2]" />
               </Link>
               <Link to='https://www.twitter.com' target='_blank'
                  className='flex items-center justify-center w-6 h-6 rounded border border-[#1DA1F2] hover:bg-primaryBg ease-linear duration-200'>
                 <FaTwitter className="text-[#1DA1F2]" />
               </Link>
               <Link to='https://www.linkedin.com' target='_blank'
                  className='flex items-center justify-center w-6 h-6 rounded border border-[#0A66C2] hover:bg-primaryBg ease-linear duration-200'>
                 <FaLinkedinIn className="text-[#0A66C2]" />
               </Link>
               <Link to='https://www.instagram.com' target='_blank'
                  className='flex items-center justify-center w-6 h-6 rounded border border-[#E4405F] hover:bg-primaryBg ease-linear duration-200'>
                 <FaInstagram className="text-[#E4405F]" />
               </Link>
              </div>
            </div>
            <div className='h-[180px] md:h-auto flex flex-col justify-start gap-2 sm:gap-5'>
              <h4 className='font-semibold text-xs'>
                CATALOG
              </h4>
              <ul className='text-neutral-500 flex-1 flex flex-col justify-between text-sm'>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Necklaces</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>hoodies</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Jewelry Box</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>t-shirt</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>jacket</li>
              </ul>
            </div>
            <div className='h-[180px] md:h-auto flex flex-col justify-start gap-2 sm:gap-5'>
              <h4 className='font-semibold text-xs'>
                ABOUT US
              </h4>
              <ul className='text-neutral-500 flex-1 flex flex-col justify-between text-sm'>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Our Producers</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Sitemap</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>FAQ</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>About Us</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Terms & Conditions</li>
              </ul>
            </div>
            <div className='h-[180px] md:h-auto flex flex-col justify-start gap-2 sm:gap-5'>
              <h4 className='font-semibold text-xs'>
                CUSTOMER SERVICES
              </h4>
              <ul className='text-neutral-500 flex-1 flex flex-col justify-between text-sm'>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Contact Us</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Track Your Order</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Product Care & Repair</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Book an Appointment</li>
                <li className='cursor-pointer hover:translate-x-2 hover:text-orange-500 ease-linear duration-300'>Shipping & Returns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* bottom footer */}
      <section className='bg-black'>
        <div className="container mx-auto px-6 py-2">
          <div className='flex items-center justify-between gap-2 sm:gap-5 text-white'>
            <p className='text-xs'>
                &copy; {new Date().getFullYear()} Coral, Inc
            </p>
            <div className='flex items-center justify-center gap-1 sm:gap-2 text-lg sm:text-2xl'>
                <FaCcMastercard className='text-blue-600 bg-white rounded-sm h-[20px] w-[40px]' />
                <FaCcVisa className='text-red-600 bg-white rounded-sm h-[20px] w-[40px]' />
                <FaPaypal className='text-blue-400 bg-white rounded-sm h-[20px] w-[40px]' />
            </div>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className='flex items-center justify-between gap-1 border-none outline-none text-xs'>
                <FaArrowUp />
                <small>
                  {
                    window.innerWidth > 640 ?
                    'Back to Top' : 'Top'
                  }
                </small>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
