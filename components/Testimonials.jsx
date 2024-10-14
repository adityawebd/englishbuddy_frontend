import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      _id: 1,
      stars: 4.5,
      feedback: "EnglishBuddy has really helped me by providing best training for IELTS. I really appreciate their incredible efforts.",
      personName: "Mehul Garg",
      imageURL: "",
    },
    {
      _id: 2,
      stars: 3,
      feedback: "I improved my English speaking skills a lot thanks to EnglishBuddy's great training sessions.",
      personName: "Kajal Sharma",
      imageURL: "",
    },
    {
      _id: 3,
      stars: 5,
      feedback: "EnglishBuddy's program is fantastic. I highly recommend it to anyone looking to improve their IELTS scores.",
      personName: "Shreya Dhir",
      imageURL: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Ref for react-slick Slider
  const slickSliderRef = useRef(null);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} size={14} className="text-secondary" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" size={14} className="text-secondary" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} size={14} className="text-secondary" />);
    }

    return stars;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  // Syncing the Swiper and react-slick vertical slider
  useEffect(() => {
    if (slickSliderRef.current && activeIndex !== null) {
      slickSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-sm:gap-2 py-20">
        {/* Swiper Section */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Sync active index with slick slider
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 5 },
              500: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 1, spaceBetween: 15 },
              1024: { slidesPerView: 1, spaceBetween: 20 },
              1300: { slidesPerView: 1, spaceBetween: 25 },
              1500: { slidesPerView: 1, spaceBetween: 30 },
            }}
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper"
          >
            {testimonialsData.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="relative group border p-10 flex flex-col justify-center items-center text-center rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/10 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center items-center text-secondary">
                      {renderStars(data.stars)}
                    </div>
                    <h5 className="uppercase font-semibold mt-4">{data.feedback}</h5>
                    <div className="flex justify-center items-center gap-4 mt-10">
                      <div className="uppercase font-bold text-base text-secondary text-left">
                        {data.personName}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Testimonials Name List Section */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 max-sm:mt-10">
          <h1 className="text-4xl font-bold uppercase max-sm:text-2xl">Testimonials</h1>
          <p className="text-textClr text-sm mt-5 font-medium">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual
          </p>

          {/* Slick Slider for Names */}
          <Slider {...sliderSettings} ref={slickSliderRef}>
            {testimonialsData.map((data, index) => (
              <div key={data._id} className="p-2">
                <li
                  className={`uppercase font-semibold text-black flex gap-4 items-center mb-2 transition-all duration-300 ${
                    activeIndex === index ? "text-primary font-bold scale-125 ml-10" : "text-gray-400"
                  }`}
                >
                  <span className="p-1 rounded-full bg-green-400">
                    <Check size={15} />
                  </span>
                  {data.personName}
                </li>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
