import React from "react";

// Array of mentor data
const mentors = [
  {
    image: "/assets/teachers/t1.png",
    name: "Shamita Arora",
    designation: "CEO GlobalTech",
  },
  {
    image: "/assets/teachers/t4.png",
    name: "Susan Mathew",
    designation: "CEO GlobalTech",
  },
  {
    image: "/assets/teachers/t2.png",
    name: "Sayantani Ghosh",
    designation: "CEO GlobalTech",
  },
  {
    image: "/assets/teachers/t6.png",
    name: "Mellisa Brown",
    designation: "CEO GlobalTech",
  },
  {
    image: "/assets/teachers/t3.png",
    name: "Jasmine Grewal",
    designation: "CEO GlobalTech",
  },
  {
    image: "/assets/teachers/t5.png",
    name: "John Wheeler",
    designation: "CEO GlobalTech",
  },
];

const OurMentors = () => {
  return (
    <div className="max-sm:pt-80 our_mentors_bg">
      <div className="bg-white/95">
        <div
          className="text-xl uppercase text-center pt-24"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          OUR
        </div>
        <div
          className="text-4xl uppercase font-bold mt-2 pb-4 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Mentors
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 py-10 mt-20 gap-10">
            {mentors.map((mentor, index) => (
              <div key={index}>
                <div className="bg-skin p-5 rounded-2xl mx-10 mb-24" data-aos="zoom-in">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-[300px] rounded-t-2xl -mt-20"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  />
                  <div className="flex flex-col justify-center items-center text-center bg-primary p-5 rounded-2xl">
                    <h3 className="uppercase text-white" data-aos="fade-up">{mentor.name}</h3>
                    <p className="text-textClr text-sm mt-2" data-aos="fade-up">
                      {mentor.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMentors;
