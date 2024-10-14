import React from "react";
import Link from "next/link";

const ConnectLeaders = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src="assets/images/connectLeadersBG.png"
            alt=""
            className="w-full h-[auto] max-sm:h-[auto]"
          />

          <div className="lg:absolute lg:bottom-0 lg:left-[10%] bg-primary/30 lg:rounded-t-3xl lg:rounded-b-none p-10 lg:w-[600px] max-sm:w-[auto] md:w-[auto] max-sm:relative md:relative max-sm:left-[auto] md:left-[auto] max-sm:rounded-b-3xl md:rounded-b-3xl max-sm:rounded-none md:rounded-none" data-aos="zoom-in-up" data-aos-duration="900">
            <h2 className="text-4xl text-white font-bold uppercase max-sm:text-2xl" data-aos="fade-up" data-aos-duration="500">
              connect with industry leaders - Get Started!
            </h2>
            <p className="text-white/70 mt-5" data-aos="fade-up" data-aos-duration="700">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="mt-10 flex gap-4 items-center">
              <Link
                href="/register"
                prefetch={true}
                className="bg-gradient-to-t from-secondary via-secondary/80 to-secondary/90 border-2 border-secondary/90 text-white rounded-full px-5 py-3 text-xs transition duration-500 hover:bg-gradient-to-t hover:from-white hover:via-white hover:to-white hover:text-secondary hover:border-2 hover:border-secondary uppercase font-bold shadow-sm shadow-white/20"
                data-aos="zoom-in-right" data-aos-duration="700"
              >
                get started now
              </Link>

              <Link
                href="/register"
                prefetch={true}
                className="text-white uppercase border-b-2 pb-1 border-white/50 transition duration-500 hover:text-white/50 hover:border-white"
                data-aos="fade-up" data-aos-duration="700"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectLeaders;
