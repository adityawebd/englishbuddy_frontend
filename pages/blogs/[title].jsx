"use client";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import Layout from "../../components/Layout"; // Make sure to import your Layout component
import Link from "next/link";

export default function Page({ params }) {
  const [blogInfo, setBlogInfo] = useState({
    imageURL: "https://www.englishbuddy.co.in/assets/img/EnglishBuddy%20Blog_August-5-03.jpg",
    title: "Things to remember while appearing for IELTS Writing Module",
    author: "Aditya Raj Gupta",
    createdAt: "9/30/2024",
    content: 
    `
        <h2>Enabling an Improved Strategy to Master the IELTS Exam.</h2>
        <h3>Introduction</h3>
        <p>Several aspirants attempt IELTS to get their dream educational institute or their favourite job. But they often face difficulties while preparing for the exam. Appropriate professional guidance and the right approach can help students to clear IELTS with flying colours. </p>

        <h3>What are the mistakes committed by aspirants while preparing for the IELTS exam?</h3>
        <ul> 
            <li>Not having a good command of English grammar and vocabulary.</li>
            <li>Lack of proficiency in conversating.</li>
        </ul>
    `
  }); // Initialize with null
  const [blogs, setBlogs] = useState([]);

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

  //   useEffect(() => {
  //     // Simulate data fetching
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetch(`/api/blogs`);
  //         const result = await res.json();
  //         if (result.success) {
  //           setBlogs(result.data);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  // Check if params is defined and contains title
  const url = params && params.title ? decodeURIComponent(params.title) : "";

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const res = await fetch("/api/blogs?url=" + url);
          const result = await res.json();
          if (result.success) {
            setBlogInfo(result.data);
          }
        } catch (error) {
          console.error("Error fetching blog info:", error);
        }
      };

      fetchData();
    }
  }, [url]);

  function formatDate(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <Layout>
      <div className="container lg:px-32 py-10">
        <div className="flex max-sm:flex-col">
          <div className="w-2/3 px-2 max-sm:w-full">
            <div className="flex justify-center w-full px-3 pb-3">
              {blogInfo?.imageURL && (
                <img
                  src={blogInfo.imageURL}
                  loading="lazy"
                  alt="Card image"
                  className="rounded w-[100%]"
                />
              )}
            </div>

            <div className="flex-row justify-center">
              <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-3 text-center">
                  {blogInfo?.title || "Loading..."} {/* Add a fallback text */}
                </h1>

                <div className="flex justify-center items-center">
                  <p className="text-sm text-gray-500 flex items-center">
                    <User size={16} /> Published by {blogInfo?.author || "N/A"}
                  </p>
                  <span className="px-2 text-slate-400">|</span>
                  <p className="text-sm text-gray-500">
                    {blogInfo?.createdAt
                      ? formatDate(blogInfo.createdAt)
                      : "N/A"}
                  </p>
                </div>

                <hr className="h-px my-8 dark:bg-gray-700" />

                <div
                  className="text-lg blog_content"
                  style={{ all: "initial" }}
                  dangerouslySetInnerHTML={{ __html: blogInfo?.content || "" }} // Fallback to an empty string
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 px-2 max-sm:w-full max-sm:mt-5 border-l">
            <div className="w-full rounded mb-2">
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
    </Layout>
  );
}
