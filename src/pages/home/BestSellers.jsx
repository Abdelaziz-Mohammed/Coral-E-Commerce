
import { useEffect, useRef, useState } from "react"
import ProductCard from './../../components/ProductCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    async function getBestSellers() {
      const response = await ((await fetch('products.json')).json());
      setBestSellers(response.filter(p => p.status === 'Best Sellers'));
    }
    getBestSellers();
  }, []);
  const swiperContainer = useRef(null);
  const [swiperContainerWidth, setSwiperContainerWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      if (swiperContainer.current) {
        setSwiperContainerWidth(swiperContainer.current.offsetWidth); 
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="section-title">
          Best Sellers
        </h1>
        <p className="text-black/75 text-sm sm:text-base text-center">
          Discover our top-rated products loved by customers!
          <br />
          Shop the best-selling items that combine quality, style, and great value.
        </p>
        {/* Best Sellers Swiper */}
        <div className="mt-12" ref={swiperContainer}>
          <Swiper
            slidesPerView={Math.max(swiperContainerWidth/280, 1)}
            spaceBetween={12}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {
              bestSellers.map(p =>
                <SwiperSlide key={p.id}
                  className="mb-12"> {/* To make bullets under it */}
                  <ProductCard product={p} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
