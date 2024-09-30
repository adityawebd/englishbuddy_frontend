import React from "react";
import { FaStar } from "react-icons/fa";
import { Check } from 'lucide-react'

const Testimonials = () => {
  return (
    <>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 ">
          {/* First div spans full width on mobile, half on medium screens, and two-thirds on large screens */}
          <div className=" col-span-1 md:col-span-1 lg:col-span-2">
            {/* Content here takes 2/3 of the space on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-16">
              <div className="max-sm:order-last">
                <div className="border p-10 flex flex-col justify-center items-center text-center rounded-tl-3xl max-sm:rounded-none">
                  <div className="flex justify-center items-center text-secondary">
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} />
                  </div>
                  <h5 className="uppercase font-semibold mt-4">
                    {" "}
                    
                    EnglishBuddy has really helped me by providing best training for IELTS.I really for their incredible efforts.
                              
                  </h5>

                  <div className="flex justify-center items-center gap-4 mt-10">
                    <img
                      src=""
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div>
                      <div className="uppercase font-bold text-base text-secondary text-left">
                        mehul garg
                      </div>
                      <div className="uppercase font-semibold text-sm text-textClr text-left">
                        designation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-10 flex flex-col justify-center items-center text-center rounded-bl-3xl bg-primary max-sm:rounded-b-3xl">
                  <a href="/testimonials" className="uppercase text-xl flex justify-center items-center text-center text-white font-bold h-[220px]">
                  view more <br />testimonials
                  </a>
                </div>
              </div>
              <div className="max-sm:order-first">
                <div className="border p-10 flex flex-col justify-center items-center text-center rounded-tr-3xl max-sm:rounded-t-3xl">
                  <div className="flex justify-center items-center text-secondary">
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} />
                  </div>
                  <h5 className="uppercase font-semibold mt-4">
                    {" "}
                    
                    Learning curve at EnglishBuddy was just superb. Highly recommended for english language test preparation.
                              
                  </h5>

                  <div className="flex justify-center items-center gap-4 mt-10">
                    <img
                      src=""
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div>
                      <div className="uppercase font-bold text-base text-secondary text-left">
                       kajal sharma
                      </div>
                      <div className="uppercase font-semibold text-sm text-textClr text-left">
                      designation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-10 flex flex-col justify-center items-center text-center rounded-br-3xl max-sm:rounded-none">
                  <div className="flex justify-center items-center text-secondary">
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} /> <FaStar size={14} />{" "}
                    <FaStar size={14} />
                  </div>
                  <h5 className="uppercase font-semibold mt-4">
                    {" "}
                    
                    Learning curve at EnglishBuddy was just superb. Highly recommended for english language test preparation.
                              
                  </h5>

                  <div className="flex justify-center items-center gap-4 mt-10">
                    <img
                      src=""
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div>
                      <div className="uppercase font-bold text-base text-secondary text-left">
                        shreya dhir
                      </div>
                      <div className="uppercase font-semibold text-sm text-textClr text-left">
                      designation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second div spans full width on mobile, half on medium screens, and one-third on large screens */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 max-sm:mt-10">
            {/* Content here takes 1/3 of the space on large screens */}
            <h1 className="text-4xl font-bold uppercase">Testimonials</h1>

            <p className="text-textClr text-sm mt-5 font-medium">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual
            </p>

            <ul className="mt-10">
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2"><span className="p-1 rounded-full bg-green-400"><Check size={15} /></span> mehul garg</li>
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2"><span className="p-1 rounded-full bg-green-400"><Check size={15} /></span> kajal sharma</li>
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2"><span className="p-1 rounded-full bg-green-400"><Check size={15} /></span> shreya dhir</li>
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2"><span className="p-1 rounded-full bg-green-400"><Check size={15} /></span> natasha kapoor</li>
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2"><span className="p-1 rounded-full bg-green-400"><Check size={15} /></span> kavish vohra</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
