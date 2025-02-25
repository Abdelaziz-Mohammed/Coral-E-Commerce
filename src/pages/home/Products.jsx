
import { useEffect, useState } from "react"
import { FaChevronDown, FaFilter } from "react-icons/fa"
import ProductCard from "../../components/ProductCard"

function Products() {
  const [filters, setFilters] = useState([
    { id: 1, name: "All", isON: true },
    { id: 2, name: "Dress", isON: false },
    { id: 3, name: "Hoody", isON: false },
    { id: 4, name: "Bag", isON: false },
    { id: 5, name: "Shoe", isON: false },
    { id: 6, name: "Glasses", isON: false },
  ]);
  const [appliedFilter, setAppliedFilter] = useState(1); // applied filter id
  const [products, setProducts] = useState([]); // all products
  const [filteredProducts, setFilteredProducts] = useState([]); // filtered ones
  const [numberOfProducts, setNumberOfProducts] = useState(8);
  // get products
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await ((await fetch('products.json')).json());
        setProducts(response);
        setFilteredProducts(response);
      }
      catch(err) {
        console.log("Error fetching data", err);
      }
    }
    getProducts();
  }, []);
  function handleFilterClick(id) {
    setAppliedFilter(id);
    setFilters(f => f.map(filter => filter.id === id ? {...filter, isON: true} : {...filter, isON: false}));
  }
  function handleFilteringProducts() {
    if (appliedFilter === 1) { // All
      setFilteredProducts(products);
    }
    else if (appliedFilter === 2) { // Dress
      setFilteredProducts(products.filter(p => p.category === 'Dress'));
    }
    else if (appliedFilter === 3) { // Hoody
      setFilteredProducts(products.filter(p => p.category === 'Hoody'));
    }
    else if (appliedFilter === 4) { // Bag
      setFilteredProducts(products.filter(p => p.category === 'Bag'));
    }
    else if (appliedFilter === 5) { // Shoe
      setFilteredProducts(products.filter(p => p.category === 'Shoe'));
    }
    else { // Glasses
      setFilteredProducts(products.filter(p => p.category === 'Glasses'));
    }
  }
  function handleShowMore() {
    let newN;
    if (Window.innerWidth < 1024) {
      newN = Math.min(numberOfProducts + 2, filteredProducts.length);
    }
    else if (Window.innerWidth < 1280) {
      newN = Math.min(numberOfProducts + 3, filteredProducts.length);
    }
    else {
      newN = Math.min(numberOfProducts + 4, filteredProducts.length);
    }
    setNumberOfProducts(newN);
  }
  return (
    <section className="bg-white">
        <div className="container mx-auto px-6 py-12">
            {/* heading */}
            <h1 className="section-title">
                Or subscribe to the newsletter
            </h1>
            {/* filter bar */}
            <div className="flex items-center justify-between mb-6">
              <ul className="flex items-center justify-center gap-2 sm:gap-3">
                {
                  filters.map(filter => 
                    <li key={filter.id} onClick={() => handleFilterClick(filter.id)}
                      className={`text-xs sm:text-sm cursor-pointer ${filter.isON ? "font-bold" : "font-normal"}`}>
                      {filter.name}
                    </li>
                  )
                }
              </ul>
              <button onClick={handleFilteringProducts}
                className="flex items-center justify-center gap-1 text-white tracking-wide bg-black hover:bg-orange-500 ease-linear duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded shadow">
                <FaFilter />
                Filter
              </button>
            </div>
            {/* product cards */}
            <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center">
              {
                filteredProducts.map((p, index) => {
                  if (index < numberOfProducts) {
                    return <ProductCard key={p.id} product={p} />
                  }
                })
              }
            </div>
            {/* Show More Button */}
            {
              (filteredProducts.length > numberOfProducts)
              &&
              <div className="flex flex-wrap items-center justify-center mt-12">
                <button onClick={handleShowMore}
                  className="flex items-center justify-center gap-2 text-white bg-black hover:bg-orange-500 ease-linear duration-200 text-sm sm:text-base px-4 py-2 rounded shadow">
                  <FaChevronDown />
                  <span>Show More</span>
                </button>
              </div>
            }
        </div>
    </section>
  )
}

export default Products
