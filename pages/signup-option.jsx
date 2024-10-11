"use client";
import React from "react";
import Layout from "@/components/Layout";

import Link from "next/link";

export default function SignUpOption() {
  return (
    <Layout>
      <div className="pt-28 container mx-auto lg:px-28 py-10">
        <div className="flex justify-center items-center">
          <div className="p-10 w-[60%] max-sm:w-[90%] border bg-primary/10">
            {/* <h1 className="text-3xl font-bold text-white bg-primary block">
              What are you looking for?
            </h1> */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="border flex flex-col">
                <img
                  src="/assets/images/tutor_vector.jpg"
                  alt=""
                  loading="lazy"
                />

                <h3 className="text-2xl font-semibold text-center py-5">
                  <span className="text-secondary font-extrabold uppercase">Tutor</span>{" "}
                  Registration
                </h3>

                <Link
                  href="/signup-tutor"
                  className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90  text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary border hover:border-2 hover:border-secondary uppercase font-bold shadow-xl text-center mx-auto"
                >
                  create your profile
                </Link>
              </div>
              <div className="border flex flex-col">
                <img
                  src="/assets/images/student_vector.jpg"
                  alt=""
                  loading="lazy"
                />

                <h3 className="text-2xl font-semibold text-center py-5">
                  <span className="text-secondary font-extrabold uppercase">student</span>{" "}
                  Registration
                </h3>

                <Link
                  href="#"
                  className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90  text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary border hover:border-2 hover:border-secondary uppercase font-bold shadow-xl text-center mx-auto"
                >
                  Post your Requirement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
