import Link from "next/link";
import React, { useEffect, useState } from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { MapPin, CalendarDays, Timer, Link2 } from "lucide-react";
import Head from "next/head";

const HeroSection = () => {
  const date = new Date();
  const [zoomIn, setZoomIn] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);

  //upcoming events json data
  const upcomingEvents = [
    {
      _id: 1,
      title: "IELTS Session",
      date: "22 - 26 September 2024",
      time: "10:00 AM - 12:00 PM",
      link: "https://rapiddigitalgrowth.com/",
    },
    {
      _id: 2,
      title: "TOEFL Session",
      date: "23 - 27 September 2024",
      time: "10:00 AM - 12:00 PM",
      link: "https://rapiddigitalgrowth.com/",
    },
    {
      _id: 3,
      title: "PTE Session",
      date: "24 - 28 September 2024",
      time: "10:00 AM - 12:00 PM",
      link: "https://rapiddigitalgrowth.com/",
    },
  ];

  useEffect(() => {
    // Trigger the zoom-in animation and text animation after component mounts
    setZoomIn(true);
    setTextLoaded(true);
  }, []);

  const text = "English Languages";

  const renderText = () => {
    return text.split("").map((letter, index) => {
      // Check if the letter is a space and return a normal space
      if (letter === " ") {
        return <span key={index}>&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className={`letter letter-appear-${index % 6}`} // Cycle through animation delays
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      );
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" />
      </Head>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 py-10">
          <div>
            <div className="py-5">
              <h5 className="text-primary font-semibold text-lg uppercase">
                English Prep
                <span className="text-secondary font-extrabold">X</span>perts
              </h5>
              <h1 className="text-primary font-semibold text-5xl uppercase mt-4">
                
                Your Ultimate guide
              </h1>
              <h1 className="text-primary font-semibold text-5xl uppercase mt-1">
                To{" "}
                <span className="shining-border border-b-4 border-green-500 -mb-3">
                  
                  {textLoaded ? renderText() : text}
                </span>
              </h1>

              <p className="text-md text-textClr mt-8 font-medium mb-10 lg:pr-64">
                Your one-stop destination for all things related to IELTS,
                TOEFL, PTE
              </p>

              <Link
                href="/register"
                className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90  text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-xl"
              >
                Register Now
              </Link>

              {/* <div>
                <h5 className="text-base text-primary font-semibold mt-20 lg:pr-64">
                  Our Sponsors:
                  <div>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1.5}
                      loop={true}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      breakpoints={{
                        320: {
                          slidesPerView: 2, 
                          spaceBetween: 5,
                        },
                        500: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        768: {
                          spaceBetween: 15,
                        },
                        1024: {
                          slidesPerView: 2.5, 
                          spaceBetween: 20,
                        },
                        1300: {
                          slidesPerView: 2.5, 
                          spaceBetween: 20,
                        },
                        1500: {
                          slidesPerView: 2.5, 
                          spaceBetween: 20,
                        },
                      }}
                      modules={[Autoplay, Navigation, A11y]}
                      className="swiper-wrapper mx-auto mb-4"
                    >
                      <SwiperSlide className="mr-5">
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="border border-primary h-[70px]"></div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </h5>
              </div> */}
            </div>
          </div>
          <div>
            <div className="">
              {/* <img src="/assets/images/main_element.png" alt="" /> */}
              <img
                src="/assets/images/main_element.png"
                alt="Main Element"
                className={`transition-transform duration-1000 ease-out ${
                  zoomIn ? "zoom-in" : ""
                }`}
              />
              <div className="absolute bottom-0 right-32 max-sm:right-auto bg-primary/50 p-7 rounded-t-2xl flex flex-col text-white w-[320px]">
                <div className="text-xs uppercase">
                  upcoming event {date.getFullYear()}
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1.5}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  // navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  breakpoints={{
                    // Mobile small (smaller than 500px)
                    320: {
                      slidesPerView: 1, // 1 slide on very small screens
                      spaceBetween: 5,
                    },
                    // Mobile medium (around 500px)
                    500: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // Tablets (around 768px)
                    768: {
                      slidesPerView: 1, // Can show partial next slide
                      spaceBetween: 15,
                    },
                    // Tablets large (around 1024px)
                    1024: {
                      slidesPerView: 1, // Showing 2 slides
                      spaceBetween: 20,
                    },
                    // Laptops (around 1300px)
                    1300: {
                      slidesPerView: 1, // Show 2.5 slides
                      spaceBetween: 25,
                    },
                    // Desktop (larger than 1500px)
                    1500: {
                      slidesPerView: 1, // Show 3 full slides
                      spaceBetween: 30,
                    },
                  }}
                  // navigation={true}
                  //  modules={[Autoplay, Pagination, Navigation]}
                  modules={[Autoplay, Navigation, A11y]}
                  className="swiper-wrapper"
                >
                  {upcomingEvents.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className="h2 uppercase mt-3">{data.title}</div>
                      <div className="border-t pt-3 mt-1">
                        <div className="flex items-center">
                          <CalendarDays size={16} /> &nbsp; {data.date}
                        </div>
                        <div className="flex items-center">
                          <Timer size={16} /> &nbsp; {data.time}
                        </div>
                        <div className="flex items-center">
                          <Link2 size={16} /> &nbsp;
                          <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.link}
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
