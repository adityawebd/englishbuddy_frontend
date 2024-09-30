"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

import { EditIcon, MoveRight } from "lucide-react";
// import { MdDelete } from "react-icons/md";
// import { DateRangePicker } from 'react-date-range';

export default function Blog() {
  // const [blogs, setBlogs] = useState([]);
  // const [dateRange, setDateRange] = useState({
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection'
  // });

  // useEffect(() => {
  //     // Simulate data fetching
  //     const fetchData = async () => {
  //         try {
  //             const res = await fetch(`/api/blogs`);
  //             const result = await res.json();
  //             if (result.success) {
  //                 setBlogs(result.data);
  //                 setFilteredBlogs(result.data);
  //             }
  //         } catch (error) {
  //             console.error("Error fetching data:", error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  const blogs = [
    {
      _id: 1,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      date: "30/9/2024",
      url: "url-of-the-blog",
    },
    {
      _id: 2,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      date: "30/9/2024",
      url: "url-of-the-blog",
    },
    {
      _id: 3,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      date: "30/9/2024",
      url: "url-of-the-blog",
    },
    {
      _id: 4,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      date: "30/9/2024",
      url: "url-of-the-blog",
    },
    {
      _id: 5,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      date: "30/9/2024",
      url: "url-of-the-blog",
    },
  ];

  const recentBlogs = [
    {
      _id: 1,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      url: "url-of-the-blog",
    },
    {
      _id: 2,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      url: "url-of-the-blog",
    },
    {
      _id: 3,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      url: "url-of-the-blog",
    },
    {
      _id: 4,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL: "",
      url: "url-of-the-blog",
    },
    {
      _id: 5,
      title: "Things to remember while appearing for IELTS Writing Module",
      imageURL:
        "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
      url: "url-of-the-blog",
    },
  ];

  // console.log(blogs)

  return (
    <Layout>
      <div className=" py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
            Our Blogs
          </div>
        </div>

        <div class="container mx-auto lg:px-28 mt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-[70%_30%] gap-4">
            <div>
              <div className="">
                <div className="blogs_card_wrapper flex flex-wrap ">
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="blogs_card rounded shadow-md border border-slate-500 p-3 h-[350px] w-[280px] bg-white m-2 max-sm:w-full max-sm:h-[auto]"
                      >
                        <img
                          src={
                            blog.imageURL ||
                            "https://via.placeholder.com/300x200"
                          } // Fallback image URL
                          alt={blog.title}
                          className="rounded h-[75%] w-full border mb-2"
                        />
                        <Link
                          href={"/blogs/" + blog.url}
                          className="text-xl mt-3 text-black font-semibold"
                        >
                          {blog.title.length > 20
                            ? blog.title.slice(0, 20) + "..."
                            : blog.title}
                        </Link>
                        <div className="text-sm text-slate-500 font-medium">
                          Date: {new Date(blog.date).toLocaleDateString()}
                        </div>
                        <Link
                          href={"/blogs/" + blog.url}
                          className="rounded-full py-1 text-xs text-black flex items-center hover:text-violet-500"
                        >
                          Read this blog{" "}
                          <span className="ml-2">
                            <MoveRight size={14} />
                          </span>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500">
                      No blogs found
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="px-4">
              <div className="">
                <h2 class="text-2xl font-semibold pb-5">Recent Posts</h2>

                <div>
                  {recentBlogs.length > 0 ? (
                    recentBlogs.map((recentBlog) => (
                      <div className="p-2 rounded grid grid-cols-[30%_70%] gap-2">
                        <img
                          src={
                            recentBlog.imageURL ||
                            "https://via.placeholder.com/300x200"
                          } // Fallback image URL
                          alt=""
                          loading="lazy"
                          className="h-[100px] w-full max-sm:h-[auto]"
                        />
                        <div>
                          <Link
                            href={"/blogs/" + recentBlog.url}
                            className="text-lg text-black font-normal line-clamp-3 max-sm:text-base"
                          >
                            {/* {recentBlog.title.length > 20
                              ? recentBlog.title.slice(0, 20) + "..."
                              : recentBlog.title} */}
                              {recentBlog.title}
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500">
                      No blogs found
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
