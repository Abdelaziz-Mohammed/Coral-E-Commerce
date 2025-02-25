
import Banner from './Banner';
import Categories from './Categories';
import Products from './Products';
import Collections from './Collections'
import BestSellers from './BestSellers';
import NewsLetters from './NewsLetters';
import Footer from './Footer';

function Home() {
  return (
    <>
        <div>
            <Banner />
            <Categories />
            <Products />
            <Collections />
            <BestSellers />
            <NewsLetters />
            <Footer />
        </div>
    </>
  )
}

export default Home
