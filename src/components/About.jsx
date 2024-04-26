const About = () => {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1602019025788-20997a1c2d09?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-10">
            <h2 className="text-base font-bold sm:text-3xl">
              CAR Loan EMI Calculator
            </h2>

            <p className="mt-4 text-gray-600">
              India is currently the world’s 4th largest market for 4-wheelers.
              Growth has been steady at 9.5% year-on-year. It is no wonder that
              the demand for a reliable and easy to use car loan EMI calculator
              has also skyrocketed. While the Internet is flooded with
              calculators determining car loan EMIs, simplicity is the key that
              make it stand out. Groww brings you the best and easy to use EMI
              calculating tool which will help you take an informed decision on
              how much funding you need to purchase your dream car, how much
              your EMIs are likely to be and other details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
