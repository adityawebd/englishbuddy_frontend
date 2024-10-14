import React from "react";

//imports for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LatestNews = () => {
  //upcoming events json data
  const latestNews = [
    {
      _id: 1,
      imageURL: "/assets/images/why_choose_iltes.png",
      tag: "Tips & Tricks",
      title: "your heroic hub for conferences and gatheings",
      name: "John Doe",
      date: "September 9, 2023",
    },
    {
      _id: 2,
      imageURL: "/assets/images/why_choose_iltes.png",
      tag: "Tips & Tricks",
      title: "your heroic hub for conferences and gatheings",
      name: "John Doe",
      date: "September 9, 2023",
    },
    {
      _id: 3,
      imageURL: "/assets/images/why_choose_iltes.png",
      tag: "Tips & Tricks",
      title: "your heroic hub for conferences and gatheings",
      name: "John Doe",
      date: "September 9, 2023",
    },
    {
      _id: 4,
      imageURL: "/assets/images/why_choose_iltes.png",
      tag: "Tips & Tricks",
      title: "your heroic hub for conferences and gatheings",
      name: "John Doe",
      date: "September 9, 2023",
    },
  ];

  return (
    <>
      <div className="container relative my-10 py-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="text-4xl uppercase font-bold mt-2 pb-4 text-center max-sm:text-2xl">
          latest news & updates
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 pb-10">
          <div></div>
        </div>

        <div className="latestNewCards">
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
              320: {
                slidesPerView: 1, // For very small devices
              },
              480: {
                slidesPerView: 1, // Slightly larger view for small devices
              },
              640: {
                slidesPerView: 1.5, // Better view for tablets or larger mobile screens
              },
              768: {
                slidesPerView: 2, // For tablets
              },
              1024: {
                slidesPerView: 2.5, // Larger tablets or small desktops
              },
              1300: {
                slidesPerView: 3, // Regular desktop view
              },
            }}
            // navigation={true}
            //  modules={[Autoplay, Pagination, Navigation]}
            modules={[Autoplay, Navigation, A11y]}
            className="swiper-wrapper"
          >
            {latestNews.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="p-2 rounded-3xl">
                  <figure className="relative w-full overflow-hidden rounded-3xl animated-border-box-white p-1">
                    <img
                      src={data.imageURL}
                      alt={data.title}
                      loading="lazy"
                      className="rounded-3xl h-[250px] w-full transition duration-700 "
                    />
                    <div className="absolute bottom-5 left-5 bg-green-400 rounded-3xl py-1 px-3 text-xs font-semibold shadow-2xl">
                      {data.tag}
                    </div>
                  </figure>
                  <h2 className="uppercase font-semibold text-xl mt-4">
                    {data.title}
                  </h2>
                  <div className="flex items-center gap-8 text-textClr text-sm mt-5">
                    <div>
                      by <span className="text-black">{data.name}</span>
                    </div>
                    <div>S{data.date}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
