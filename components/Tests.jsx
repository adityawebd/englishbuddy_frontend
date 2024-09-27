import React from "react";
import { MapPin, CalendarDays, Timer, Link2 } from "lucide-react";
import Link from "next/link";

const Tests = () => {
  return (
    <>
      <div className="bg-primary py-20 flex max-sm:flex-col">
        <div className="h-[full] w-[10%] border-textClr/20"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl uppercase text-white text-center">
              tests
            </div>
            <div className="text-4xl uppercase font-bold mt-4 pb-4 text-white text-center w-[60%] max-sm:text-2xl max-sm:w-[100%]">
              our consummate & experienced team of mentors help students
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-2xl w-full flex border border-textClr mb-5 max-sm:flex-col">
                <div className="w-[30%] max-sm:w-full rounded-2xl relative">
                  <img
                    src="https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg"
                    alt=""
                    className="h-[100%] w-full rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-10 bg-primary/60 rounded-t-2xl p-5 flex flex-col justify-center items-center">
                    <div className="uppercase text-white/80 font-semibold">
                      ticket
                    </div>
                    <div className="uppercase text-white text-4xl font-bold">
                      $25
                    </div>
                  </div>
                </div>
                <div className="w-[70%] max-sm:w-full rounded-2xl p-8">
                  <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                    <div className="flex items-center text-white/70">
                      <MapPin size={16} className="text-green" /> &nbsp; Stone
                      Hotel Kuta - Bali
                    </div>
                    <div className="flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:mt-5">
                      <div className="flex items-center text-white/70 border-r border-textClr pr-5 max-sm:border-0">
                        <CalendarDays size={16} className="text-green" /> &nbsp;
                        Stone Sept 23, 2024
                      </div>
                      <div className="flex items-center text-white/70">
                        <Timer size={16} className="text-green" /> &nbsp; Stone
                        10.00 AM
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl text-white font-bold uppercase mt-5">
                    ielts
                  </h2>

                  <p className="text-white/70 mt-4">
                    In publishing and graphic design, text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content.
                  </p>

                  <div className="mt-10 flex gap-4 items-center">
                    <Link
                      href="/register"
                      prefetch={true}
                      className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90 border-2 border-secondary/90 text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-sm shadow-white/20"
                    >
                      but ticket
                    </Link>

                    <Link
                      href="/register"
                      prefetch={true}
                      className="text-white uppercase border-b-2 pb-1 border-textClr transition duration-500 hover:text-textClr hover:border-white"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl w-full flex border border-textClr mb-5 max-sm:flex-col">
                <div className="w-[30%] max-sm:w-full rounded-2xl relative">
                  <img
                    src="https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg"
                    alt=""
                    className="h-[100%] w-full rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-10 bg-primary/60 rounded-t-2xl p-5 flex flex-col justify-center items-center">
                    <div className="uppercase text-white/80 font-semibold">
                      ticket
                    </div>
                    <div className="uppercase text-white text-4xl font-bold">
                      $25
                    </div>
                  </div>
                </div>
                <div className="w-[70%] max-sm:w-full rounded-2xl p-8">
                  <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                    <div className="flex items-center text-white/70">
                      <MapPin size={16} className="text-green" /> &nbsp; Stone
                      Hotel Kuta - Bali
                    </div>
                    <div className="flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:mt-5">
                      <div className="flex items-center text-white/70 border-r border-textClr pr-5 max-sm:border-0">
                        <CalendarDays size={16} className="text-green" /> &nbsp;
                        Stone Sept 23, 2024
                      </div>
                      <div className="flex items-center text-white/70">
                        <Timer size={16} className="text-green" /> &nbsp; Stone
                        10.00 AM
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl text-white font-bold uppercase mt-5">
                    ielts
                  </h2>

                  <p className="text-white/70 mt-4">
                    In publishing and graphic design, text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content.
                  </p>

                  <div className="mt-10 flex gap-4 items-center">
                    <Link
                      href="/register"
                      prefetch={true}
                      className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90 border-2 border-secondary/90 text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-sm shadow-white/20"
                    >
                      but ticket
                    </Link>

                    <Link
                      href="/register"
                      prefetch={true}
                      className="text-white uppercase border-b-2 pb-1 border-textClr transition duration-500 hover:text-textClr hover:border-white"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl w-full flex border border-textClr mb-5 max-sm:flex-col">
                <div className="w-[30%] max-sm:w-full rounded-2xl relative">
                  <img
                    src="https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg"
                    alt=""
                    className="h-[100%] w-full rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-10 bg-primary/60 rounded-t-2xl p-5 flex flex-col justify-center items-center">
                    <div className="uppercase text-white/80 font-semibold">
                      ticket
                    </div>
                    <div className="uppercase text-white text-4xl font-bold">
                      $25
                    </div>
                  </div>
                </div>
                <div className="w-[70%] max-sm:w-full rounded-2xl p-8">
                  <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                    <div className="flex items-center text-white/70">
                      <MapPin size={16} className="text-green" /> &nbsp; Stone
                      Hotel Kuta - Bali
                    </div>
                    <div className="flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:mt-5">
                      <div className="flex items-center text-white/70 border-r border-textClr pr-5 max-sm:border-0">
                        <CalendarDays size={16} className="text-green" /> &nbsp;
                        Stone Sept 23, 2024
                      </div>
                      <div className="flex items-center text-white/70">
                        <Timer size={16} className="text-green" /> &nbsp; Stone
                        10.00 AM
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl text-white font-bold uppercase mt-5">
                    ielts
                  </h2>

                  <p className="text-white/70 mt-4">
                    In publishing and graphic design, text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content.
                  </p>

                  <div className="mt-10 flex gap-4 items-center">
                    <Link
                      href="/register"
                      prefetch={true}
                      className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90 border-2 border-secondary/90 text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-sm shadow-white/20"
                    >
                      but ticket
                    </Link>

                    <Link
                      href="/register"
                      prefetch={true}
                      className="text-white uppercase border-b-2 pb-1 border-textClr transition duration-500 hover:text-textClr hover:border-white"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[full] w-[10%] border-textClr/20"></div>
      </div>
    </>
  );
};

export default Tests;
