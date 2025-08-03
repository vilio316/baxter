import stock_shot from "@/public/stock.jpg";
export default function AboutUs() {
  return (
    <section className="text-white bg-slate-800 body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-2xl"
            alt="hero"
            src={stock_shot.src}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
            Never Make a Wrong Investment Again
          </h1>
          <p className="mb-8 leading-relaxed">
            Baxter is your ultimate tool for making informed investment
            decisions. We provide up-to-date stock charts, detailed data, and
            essential guidance to help you navigate the complexities of the
            stock market with confidence and security. Our goal is to empower
            individuals, businesses and corporate bodies to make informed
            decisions and secure their assets over the short and long term.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-600 border-0  py-2 px-6 focus:outline-none hover:bg-green-700 rounded font-light hover:font-normal">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
