
function Categories() {
  const brands = [
    {id: 1, img: 'brand-1' },
    {id: 2, img: 'brand-2' },
    {id: 3, img: 'brand-3' },
    {id: 4, img: 'brand-4' },
    {id: 5, img: 'brand-5' },
  ];
  return (
    <section className="bg-white relative">
        <div className="container mx-auto px-6 py-12">
            {/* Brand Logos */}
            <div className="flex items-center justify-between gap-4 py-12">
                {
                    brands.map(brand => 
                        <div key={brand.id}
                            className="flex items-center justify-center w-1/5">
                            <img src={`images/${brand.img}.png`} alt={brand.img}
                            className="max-w-[100%] object-contain" />
                        </div>
                    )
                }
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-10 items-center">
                <p className="font-normal uppercase text-center text-sm md:text-lg text-black tracking-wide
                    hidden xl:block absolute top-[50%] left-0 -rotate-90">
                    <span>Explore new and</span>
                    <br />
                    <span>popular styles</span>
                </p>
                <div className="w-full flex flex-wrap justify-center gap-5">
                    <img src="images/img-1.png" alt="img-1"
                        className="max-w-[280px] rounded shadow-lg" />
                    <img src="images/img-2.png" alt="img-2"
                        className="max-w-[280px] rounded shadow-lg" />
                    <img src="images/img-3.png" alt="img-3"
                        className="max-w-[280px] rounded shadow-lg" />
                    <img src="images/img-4.png" alt="img-4"
                        className="max-w-[280px] rounded shadow-lg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories
