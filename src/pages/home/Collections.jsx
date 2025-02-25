
function Collections() {
  return (
    <section className="bg-[url('images/collections-bg.png')] bg-center bg-no-repeat my-12 bg-cover">
      <div className="container mx-auto px-6 py-12 h-[400px] flex items-center justify-end">
        <div className="text-white w-fit sm:w-1/2">
          <img src="images/zara-logo.png" alt="ZARA"
            className="w-[100px] object-contain mb-6" />
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light mb-12">
            Lustrous yet understated. The new evening
            <br />
            wear collection exclusively offered at the
            <br />
            reopened Giorgio Armani boutique in Los
            <br />
            Angeles.
          </p>
          <button className="text-black bg-white hover:bg-orange-500 hover:text-white ease-linear duration-200 text-sm sm:text-base md:text-lg font-normal tracking-wide leading-[32px] rounded-sm shadow px-4 py-2">
            See Collections
          </button>
        </div>
      </div>
    </section>
  )
}

export default Collections
