const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Veichle Loan EMI Calculator
            <strong className="font-extrabold text-teal-700 sm:block">
              {" "}
              Let's calculate{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            A car loan EMI calculator is a tool that helps you calculate the
            monthly instalment (EMI) you will have to pay for a car loan. It
            takes into account the loan amount, interest rate, and loan tenure
            to give you an estimate of the EMI.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#emi"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
