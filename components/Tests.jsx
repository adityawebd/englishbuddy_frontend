import React from "react";
import { MapPin, CalendarDays, Timer } from "lucide-react";
import Link from "next/link";

const testItems = [
  {
    title: "IELTS",
    imageUrl:
      "https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg",
    location: "Online",
    date: "Sept 27, 2024",
    time: "10.00 AM",
    price: "25",
    description:
      "International English Language Testing System (IELTS) is an english proficiency test that enables students from non-native speaking countries.",
  },
  {
    title: "TOEFL",
    imageUrl:
      "https://chronus.com/wp-content/uploads/2016/02/MentoringWomenLeadership.jpg",
    location: "Online",
    date: "Sept 28, 2024",
    time: "12.00 PM",
    price: "45",
    description:
      "Test of English as a Foreign Language is a standardized test to measure the english language ability of non-native speakers wishing to enroll in english-speaking universities.",
  },
  {
    title: "PTE",
    imageUrl:
      "https://ccc.bc.edu/content/ccc/blog-home/2024/01/mentoring-in-workplace-examples-best-practices/_jcr_content/entry/richtext_copy_copy/image.bound.size.img.400x300.jpg/1705369735145.jpg",
    location: "Online",
    date: "Sept 29, 2024",
    time: "02.00 PM",
    price: "99",
    description:
      "Pearson Language Tests is a unit of the Pearson PLC group, dedicated to assessing and validating the English language usage of non-native english speakers.",
  },
];

const Tests = () => {
  return (
    <div className="bg-primary py-20 flex max-sm:flex-col">
      <div className="h-full w-[10%] border-textClr/20"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="flex flex-col justify-center items-center">
          <div
            className="text-xl uppercase text-white text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            tests
          </div>
          <div
            className="text-4xl uppercase font-bold mt-4 pb-4 text-white text-center w-[60%] max-sm:text-2xl max-sm:w-[100%]"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            our consummate & experienced team of mentors help students
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col justify-center items-center">
            {testItems.map((test, index) => (
              <div
                key={index}
                className="rounded-2xl w-full flex border border-textClr mb-5 max-sm:flex-col animated-border-box"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="w-[30%] max-sm:w-full rounded-2xl relative">
                  <img
                    src={test.imageUrl}
                    alt={test.title}
                    className="h-[100%] w-full rounded-2xl"
                  />
                  
                  <div className="absolute bottom-0 left-10 bg-primary/60 rounded-t-2xl p-5 flex flex-col justify-center items-center">
                    <div className="uppercase text-white/80 font-semibold">
                      ticket
                    </div>
                    <div className="uppercase text-white text-4xl font-bold">
                      ₹{test.price}
                    </div>
                  </div>
                </div>
                <div className="w-[70%] max-sm:w-full rounded-2xl p-8">
                  <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                    <div className="flex items-center text-white/70">
                      <MapPin size={16} className="text-green" /> &nbsp;
                      {test.location}
                    </div>
                    <div className="flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:mt-5">
                      <div className="flex items-center text-white/70 border-r border-textClr pr-5 max-sm:border-0">
                        <CalendarDays size={16} className="text-green" /> &nbsp;
                        {test.date}
                      </div>
                      <div className="flex items-center text-white/70">
                        <Timer size={16} className="text-green" /> &nbsp;
                        {test.time}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl text-white font-bold uppercase mt-5">
                    {test.title}
                  </h2>

                  <p className="text-white/70 mt-4">{test.description}</p>

                  <div className="mt-10 flex gap-4 items-center">
                    <Link
                      href="/register"
                      prefetch={true}
                      className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90 border-2 border-secondary/90 text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-sm shadow-white/20"
                    >
                      buy ticket
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
            ))}
          </div>
        </div>
      </div>

      <div className="h-full w-[10%] border-textClr/20"></div>
    </div>
  );
};

export default Tests;
