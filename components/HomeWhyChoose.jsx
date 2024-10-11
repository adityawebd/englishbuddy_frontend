import React from "react";

const HomeWhyChoose = () => {
  return (
    <>
      <div
        className="text-xl uppercase text-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        why choose us
      </div>
      <div
        className="text-4xl uppercase font-bold mt-2 pb-4 text-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        For itels coaching
      </div>

      <div className="relative mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 pt-10">
          <div>
            <div className="bg-primary container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 relative pt-48 max-sm:pt-10">
              <div
                className="bg-secondary rounded-3xl p-10 bg_outofbox absolute -top-10 mr-24 max-sm:relative max-sm:top-auto max-sm:mr-auto"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h3 className="text-xl uppercase text-white"> Our Strength</h3>
                <div className="border-l border-white pl-5 uppercase text-white my-5">
                  Our students are well prepared to get qualified for best of
                  international universities.
                </div>
                <p className="text-white/70 text-sm">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>

              <div
                className="bg-white/20 shadow-xl rounded-t-3xl p-10 mt-16 max-sm:mt-10"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h3 className="text-xl uppercase text-white">Our Accolades</h3>
                <div className="border-l border-white pl-5 uppercase text-white my-5">
                  Our team has been recognised as one of the best coaching
                  experts for english proficiency test preparation.
                </div>
                <p className="text-white/70 text-sm">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -top-10 h-[570px] w-full max-sm:top-0 max-sm:h-auto">
                <img
                  src="/assets/images/why_choose_iltes.png"
                  alt=""
                  className="rounded-l-2xl h-[100%] w-full max-sm:rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhyChoose;
