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
      <div className="pt-28 pb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
            Our Blogs
          </div>
        </div>


        {/* <div class="bookcase">
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/81jN2hzQg9L._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/31IZBzabP-L._SX342_SY445_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/5176ZejmyrL._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/61wNuShMlXL._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/71gnJ-dXgxL._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/81jWWukq-3L._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/51QNbULKwNL.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/615DcJOIL-L._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/A1OlSDr1xgL._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/71sjnMMv+CL._SY522_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/51xvqwJ1EJL._SY445_SX342_.jpg" />
            </div>
          </div>
          <div class="bookwrap">
            <div class="book">
              <img src="https://m.media-amazon.com/images/I/41aX0fEkNwL._SY445_SX342_.jpg" />
            </div>
          </div>
        </div> */}

        <div className="bookcase">
          {blogs.map((blog) => (
            <div key={blog._id} className="bookwrap">
              <div className="book">
                <img src={blog.imageURL} alt={blog.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
