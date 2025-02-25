
import { FaFacebookF, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <section className="bg-primaryBg h-[100vh]">
      <div className="container mx-auto px-6 py-12 h-[100vh] flex items-center justify-center">
        <div className='bg-white py-12 px-10 flex-1 max-w-[500px] rounded-lg shadow-md flex flex-col gap-5'>
          <h2 className='text-3xl font-bold tracking-wider text-orange-500'>
            Sign Up
          </h2>
          <p className="text-neutral-500">Hello there, sign up to continue.</p>
          <form action="/"
            className='flex flex-col gap-5 mt-3'>
            <div className="relative">
              <label className="absolute top-0 left-6 translate-y-[-50%] text-sm text-neutral-500 font-normal bg-white px-2"
               htmlFor="name">Name</label>
              <div className="flex items-center justify-between gap-2 border border-neutral-300 h-[50px] px-4 rounded-3xl">
                <input type="text" id="name" name="name" placeholder="Enter Your Full Name" required
                    className="outline-none flex-1"/>
                <FaUser className="text-2xl text-neutral-500 hover:text-neutral-400 cursor-pointer" />
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-0 left-6 translate-y-[-50%] text-sm text-neutral-500 font-normal bg-white px-2"
               htmlFor="email">Email</label>
              <div className="flex items-center justify-between gap-2 border border-neutral-300 h-[50px] px-4 rounded-3xl">
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required
                    className="outline-none flex-1"/>
                <MdEmail className="text-2xl text-neutral-500 hover:text-neutral-400 cursor-pointer" />
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-0 left-6 translate-y-[-50%] text-sm text-neutral-500 font-normal bg-white px-2"
               htmlFor="password">Password</label>
              <div className="flex items-center justify-between gap-2 border border-neutral-300 h-[50px] px-4 rounded-3xl">
                <input type="password" id="password" name="password" placeholder="Enter Your Password" required
                className="outline-none flex-1"/>
                <FaLock className="text-2xl text-neutral-500 hover:text-neutral-400 cursor-pointer" />
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-0 left-6 translate-y-[-50%] text-sm text-neutral-500 font-normal bg-white px-2"
               htmlFor="confirm-password">Confirm Password</label>
              <div className="flex items-center justify-between gap-2 border border-neutral-300 h-[50px] px-4 rounded-3xl">
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter Your Password" required
                className="outline-none flex-1"/>
                <FaLock className="text-2xl text-neutral-500 hover:text-neutral-400 cursor-pointer" />
              </div>
            </div>
            <button type='submit'
                className='flex items-center justify-center gap-1 self-center rounded-[40px] shadow-md text-white bg-orange-500 hover:bg-orange-400 ease-linear duration-200 w-fit py-2 px-10'>
                Continue
            </button>
          </form>
          <p className='text-center font-bold text-xl tracking-wide text-neutral-500'>
            OR Use
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="flex items-center justify-center p-3 border border-neutral-300 rounded-full bg-primaryBg hover:bg-neutral-200 ease-linear duration-200">
                <FaGoogle className="text-2xl text-[#DB4437] cursor-pointer" />
            </button>
            <button className="flex items-center justify-center p-3 border border-neutral-300 rounded-full bg-primaryBg hover:bg-neutral-200 ease-linear duration-200">
                <FaFacebookF className="text-2xl text-[#1877F2] cursor-pointer" />
            </button>
            <button className="flex items-center justify-center p-3 border border-neutral-300 rounded-full bg-primaryBg hover:bg-neutral-200 ease-linear duration-200">
                <FaTwitter className="text-2xl text-[#1DA1F2] cursor-pointer" />
            </button>
          </div>
          <p className='text-lg text-center'>
            Already have an account?
            <Link to='/login'
                className='text-orange-500 ps-2 text-sm font-semibold'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup

