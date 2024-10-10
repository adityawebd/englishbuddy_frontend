import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Importing all necessary star icons
import { Check } from "lucide-react";

// Swiper.js imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonialsData = [
    {
      _id: 1,
      stars: 4.5,
      feedback:
        "EnglishBuddy has really helped me by providing best training for IELTS. I really appreciate their incredible efforts.",
      personName: "Mehul Garg",
      imageURL: "",
    },
    {
      _id: 2,
      stars: 3,
      feedback:
        "I improved my English speaking skills a lot thanks to EnglishBuddy's great training sessions.",
      personName: "Kajal Sharma",
      imageURL: "",
    },
    {
      _id: 3,
      stars: 5,
      feedback:
        "EnglishBuddy's program is fantastic. I highly recommend it to anyone looking to improve their IELTS scores.",
      personName: "Shreya Dhir",
      imageURL: "",
    },
  ];

  // Function to render stars dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Get the number of full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - Math.ceil(rating); // Calculate remaining empty stars

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} size={14} className="text-secondary" />
      );
    }

    // Add half star if applicable
    if (halfStar) {
      stars.push(
        <FaStarHalfAlt key="half" size={14} className="text-secondary" />
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} size={14} className="text-secondary" />
      );
    }

    return stars;
  };

  return (
    <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-sm:gap-2 py-20">
        {/* First div spans full width on mobile, half on medium screens, and two-thirds on large screens */}
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
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper"
          >
            {testimonialsData.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="border p-10 flex flex-col justify-center items-center text-center rounded-3xl">
                  <div className="flex justify-center items-center text-secondary">
                    {/* Rendering stars dynamically based on rating in the array */}
                    {renderStars(data.stars)}
                  </div>
                  <h5 className="uppercase font-semibold mt-4">
                    {data.feedback}
                  </h5>
                  <div className="flex justify-center items-center gap-4 mt-10">
                    {/* <img
                      src={data.imageURL}
                      alt="testimonial-image"
                      className="w-[60px] h-[60px] rounded-full"
                    /> */}
                    <div>
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

        {/* Second div spans full width on mobile, half on medium screens, and one-third on large screens */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 max-sm:mt-10">
          {/* Content here takes 1/3 of the space on large screens */}
          <h1 className="text-4xl font-bold uppercase">Testimonials</h1>

          <p className="text-textClr text-sm mt-5 font-medium">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual
          </p>

          <ul className="mt-10">
            {testimonialsData.map((data) => (
              <li className="uppercase font-semibold text-black flex gap-4 items-center mb-2">
                <span className="p-1 rounded-full bg-green-400">
                  <Check size={15} />
                </span>{" "}
                {data.personName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
