import React from "react";
import Link from "next/link";

const HomeAbout = () => {
  const date = new Date();

  return (
    <>
      <div className="container relative my-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 py-10">
          <div>
            <div
              className="text-xl uppercase"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              about us
            </div>
            <div
              className="text-4xl uppercase font-bold mt-2 pb-4"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              what makes us special in {date.getFullYear()}
            </div>
            <img
              src="https://www.glion.edu/wp-content/uploads/2023/07/Entrepreneur-vs-business-owner-whats-the-difference-in-hospitality.jpg"
              alt=""
              className="rounded-2xl mt-5 w-[600px]"
              data-aos="zoom-in-right"
              data-aos-duration="700"
            />
          </div>
          <div className="md:mt-10 max-sm:mt-10">
            <h3
              className="text-lg font-semibold"
              data-aos="fade-up"
              data-aos-duration="550"
            >
              EnglishBuddy started with the aim of carving students’ score who
              aspire to get a remarkable score in English proficiency tests. We
              aim to bring out the best of education to those who aspire.
            </h3>

            <div className="mt-5 pt-4">
              <div className="flex justify-start items-start mb-5 max-sm:gap-4">
                <div className="w-[20%] max-sm:w-[30%] relative group">
                  {/* Default image */}
                  <img
                    src="/assets/icons/purpose_red.png"
                    alt="purpose icon"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary/10 group-hover:hidden p-4  transition-all duration-500 ease-in-out" // Hide on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                  {/* Image to display on hover */}
                  <img
                    src="/assets/icons/purpose_white.png"
                    alt="purpose icon on hover"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary hidden group-hover:block  p-4  transition-all duration-500 ease-in-out" // Show on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                </div>
                <div className="w-[80%] max-sm:w-[70%]">
                  <h3
                    className="uppercase text-lg font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    Our Purpose
                  </h3>
                  <p
                    className="text-md text-textClr"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    To provide optimum teaching experience that improves the
                    lives of the students who have an aspiration to go abroad.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start mb-5 max-sm:gap-4">
                <div className="w-[20%] max-sm:w-[30%] relative group">
                  {/* Default image */}
                  <img
                    src="/assets/icons/value_red.png"
                    alt="value icon"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary/10 group-hover:hidden p-4  transition-all duration-500 ease-in-out" // Hide on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                  {/* Image to display on hover */}
                  <img
                    src="/assets/icons/value_white.png"
                    alt="value icon on hover"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary hidden group-hover:block  p-4  transition-all duration-500 ease-in-out" // Show on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                </div>
                <div className="w-[80%] max-sm:w-[70%]">
                  <h3
                    className="uppercase text-lg font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Our Values
                  </h3>
                  <p
                    className="text-md text-textClr"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    We function on integrity, leadership, passion for winning
                    and building trust.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start mb-5 max-sm:gap-4">
                <div className="w-[20%] max-sm:w-[30%] relative group">
                  {/* Default image */}
                  <img
                    src="/assets/icons/principle_red.png"
                    alt="principle icon"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary/10 group-hover:hidden p-4  transition-all duration-500 ease-in-out" // Hide on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                  {/* Image to display on hover */}
                  <img
                    src="/assets/icons/principle_white.png"
                    alt="principle icon on hover"
                    className="w-[80px] h-[80px] border rounded-xl bg-secondary hidden group-hover:block  p-4  transition-all duration-500 ease-in-out" // Show on hover
                    data-aos="fade-right"
                    data-aos-duration="800"
                  />
                </div>
                <div className="w-[80%] max-sm:w-[70%]">
                  <h3
                    className="uppercase text-lg font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Our Principles
                  </h3>
                  <p
                    className="text-md text-textClr"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    We value mastery and believe that continual innovation in
                    teaching methodology is the key to success.
                  </p>
                </div>
              </div>

              <Link
                href="/about-us"
                className="rounded-3xl border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary mt-5"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
