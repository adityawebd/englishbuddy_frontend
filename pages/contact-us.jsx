"use client";
import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import {
  Headset,
  Mail,
  MapPin,
  Map,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function About() {
  return (
    <Layout>
      <div className="contact-page-content pt-16">
        <div className=" py-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
              Contact Us
            </div>
            <div className="text-3xl max-sm:text-3xl font-bold mt-4 text-center">
              Contact English Buddy
            </div>
            <div className="text-3xl max-sm:text-3xl font-bold text-center">
              for your queries
            </div>

            <div className="contact_us_card_wrapper flex justify-center items-center flex-wrap my-5">
              <div className="bg-primary rounded-2xl p-10 w-[400px] h-[260px] max-sm:w-[100%] max-sm:h-[auto] mx-3 my-3 ">
                <span className="text-secondary">
                  <Headset size={30} />
                </span>
                <h5 className="my-3 text-white/80 font-semibold text-xl">
                  Contact Phone Number
                </h5>
                <a href="tel:+919587925026" className="text-white block mb-2">
                  <span className="text-white/70">New Delhi:</span> +91
                  9587925026
                </a>
                <a href="tel:+917888825151" className="text-white block">
                  <span className="text-white/70">Amritsar:</span> +91
                  7888825151
                </a>
              </div>
              <div className="bg-primary rounded-2xl p-10 w-[400px] h-[260px] max-sm:w-[100%] max-sm:h-[auto] mx-3 my-3">
                <span className="text-secondary">
                  <Mail size={30} />
                </span>
                <h5 className="my-3 text-white/80 font-semibold text-xl">
                  Our Email Address
                </h5>
                <a href="mailto:info@englishbuddy.co.in" className="text-white">
                  info@englishbuddy.co.in
                </a>
              </div>
              <div className="bg-primary rounded-2xl p-10 w-[400px] h-[260px] max-sm:w-[100%] max-sm:h-[auto] mx-3 my-3">
                <span className="text-secondary">
                  <MapPin size={30} />
                </span>
                <h5 className="my-3 text-white/80 font-semibold text-xl">
                  Our Location
                </h5>
                <a href="#map" className="text-white flex justify-between">
                  <spa className="text-white/70 w-[50%]">New Delhi:</spa>{" "}
                  <span>
                    Sector-5, Aggarwal Tower MLU Plaza, Dwarka New Delhi-110075
                  </span>
                </a>
                <a href="#map" className="text-white flex justify-between">
                  <spa className="text-white/70 w-[50%]">Amritsar:</spa>{" "}
                  <span>
                    Sector-5, Aggarwal Tower MLU Plaza, Dwarka New Delhi-110075
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contactFormStyle">
          <div className="contactFormStyleWrapper ">
            <div className="contactFormStyleBookImg">
              <img src="/assets/images/eb_book_img.png" alt="" />
            </div>
            <div className="contactFormStyleForm">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="container-sm py-5 mt-16" id="map">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-blackClr text-3xl font-bold mb-3">
              Find Us on Google Map
            </h2>
            <p className="text-base text-textClr text-center">
              "Find us easily on Google Maps. Our location is centrally situated
              for your convenience. Click the map below for directions." Feel
              free to tweak it if needed!
            </p>

            <div className="w-full my-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.3292897745278!2d74.8611903707519!3d31.652209637883445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196498464170e9%3A0xd96a51191de26a2!2sThe%20Tile%20World!5e0!3m2!1sen!2sin!4v1727521854459!5m2!1sen!2sin"
                width="100%"
                height="450"
                // style={{ borderRadius: "10px" }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
