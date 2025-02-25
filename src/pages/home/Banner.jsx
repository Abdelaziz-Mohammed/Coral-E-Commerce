
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

function Banner() {
  return (
    <section className="bg-primaryBg relative">
        <div className="container mx-auto px-6 py-12">
            <div className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 sm:justify-between'>
                {/* text in the left side */}
                <div className='flex flex-col pl-5 sm:pl-0 gap-5 justify-center w-full sm:w-1/2'>
                    <h1 className='text-3xl sm:text-5xl text-bold'>
                        Collections
                    </h1>
                    <p className='text-sm md:text-lg capitalize'>
                        <span className='leading-10 tracking-normal md:tracking-wide'>you can explore and shop many differnt</span>
                        <br />
                        <span className='leading-10 tracking-normal md:tracking-wide'>collection from various barands here.</span>
                    </p>
                    <Link to='/'
                        className='flex items-center justify-center gap-2 text-white bg-black hover:bg-orange-500 ease-linear duration-200 rounded-sm px-4 py-2 shadow-lg w-fit'>
                        <FaShoppingBag />
                        <span className='text-sm text-bold uppercase'>shop now</span>
                    </Link>
                </div>
                {/* image in the right side */}
                <div className='flex items-center justify-center w-full sm:w-1/2'>
                    <img src="images/banner.png" alt="banner-img"
                        className='max-h-[300px] sm:max-h-[500px]'/>
                </div>
            </div>
        </div>
        {/* images outside banner container */}
        <img src="images/out-banner-1.svg" alt="out-img"
            className='absolute bottom-4 left-0 hidden xl:block' />
        <img src="images/out-banner-2.svg" alt="out-img"
            className='absolute top-[50%] translate-y-[-50%] right-0 hidden xl:block' />
    </section>
  )
}

export default Banner
