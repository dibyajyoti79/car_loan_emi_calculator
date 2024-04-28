import React from "react";

const Eligibility = () => {
  return (
    <section className="bg-gray-50 text-gray-900" id="eligibility">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Eligibility for loan
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-10 text-teal-500 ml-[40%]"
              id="person"
            >
              <g>
                <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"></path>
              </g>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Salaried Individuals
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              All india residents minimum age of 21 years maximum age of loan
              maturity at 59 years <br /> Income requirement as per the veichle
              model, veichle age and repayment tenure
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500 ml-[40%]"
              viewBox="0 0 24 24"
              id="add-person"
            >
              <g>
                <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2zm-11 5a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"></path>
              </g>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Self Employed
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              Minimum age of 21 years maximum age of loan maturity at 59 years{" "}
              <br />
              Income requirement as per the veichle model, veichle age and
              repayment tenure
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500 hover:shadow-teal-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-teal-500 ml-[40%]"
              viewBox="0 0 24 24"
              id="document"
            >
              <path d="M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Required Documents
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              Application Form <br />
              Registration Certificate of Veichle <br /> Kyc Documents
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
