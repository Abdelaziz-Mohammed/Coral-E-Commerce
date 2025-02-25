
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

function Login() {
  return (
    <section className="bg-primaryBg h-[100vh]">
      <div className="container mx-auto px-6 py-12 h-[100vh] flex items-center justify-center">
        <div className='bg-white py-16 px-10 flex-1 max-w-[500px] rounded-lg shadow-md flex flex-col gap-5'>
          <Link to='/'>
            <img src="/React-E-Commerce/logo.svg" alt="logo" />  
          </Link>
          <p className='text-neutral-500'>Wellcome back !!!</p>
          <h2 className='text-3xl font-bold tracking-wider text-orange-500'>
            Sign in
          </h2>
          <form action="/"
            className='flex flex-col gap-3'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" required
                className='bg-white border border-neutral-300 rounded w-full h-[30px] sm:h-[40px] ps-2 outline-none focus:bg-neutral-50 text-black' />
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required
                className='bg-white border border-neutral-300 rounded w-full h-[30px] sm:h-[40px] ps-2 outline-none focus:bg-neutral-50 text-black' />
            </div>
            <button type='submit'
                className='flex items-center justify-center gap-1 rounded-[40px] shadow-md text-white bg-orange-500 hover:bg-orange-400 ease-linear duration-200 w-fit py-2 px-4 self-center my-5'>
                Sign In <FaArrowRight />
            </button>
          </form>
          <p className='text-lg text-center'>
            I don&apos;t have an account ?
            <Link to='/signup'
                className='text-orange-500 ps-2 text-sm font-semibold'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
