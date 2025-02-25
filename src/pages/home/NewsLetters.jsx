
function NewsLetters() {
  return (
    <section className="bg-primaryBg">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="section-title">
            Follow products and discounts on Instagram
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <img src="images/newsletters-1.png" alt="newsletters" />
            <img src="images/newsletters-2.png" alt="newsletters" />
            <img src="images/newsletters-3.png" alt="newsletters" />
            <img src="images/newsletters-4.png" alt="newsletters" />
            <img src="images/newsletters-5.png" alt="newsletters" />
            <img src="images/newsletters-6.png" alt="newsletters" />
          </div>
          <h2 className="section-title pt-6">
            Or subscribe to the newsletters
          </h2>
          <form action="/"
                className="flex items-center justify-center gap-5 max-w-[720px] w-full">
            <input type="email" placeholder="Your Email" required
                className="w-2/3 border border-neutral-200 border-b-2 border-b-black outline-none h-[40px] pl-5 bg-primaryBg"/>
            <button type="submit"
                className="w-1/3 border border-neutral-200 border-b-2 border-b-black h-[40px] text-black uppercase bg-primaryBg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsLetters

