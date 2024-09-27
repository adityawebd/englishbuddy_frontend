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

          <div className="absolute bottom-0 left-[10%] bg-primary/30 rounded-t-3xl p-10 w-[600px] max-sm:w-[auto] max-sm:relative max-sm:left-[auto] max-sm:rounded-b-3xl max-sm:rounded-none">
            <h2 className="text-4xl text-white font-bold uppercase max-sm:text-2xl">
              connect with industry leaders - Get Started!
            </h2>
            <p className="text-white/70 mt-5">
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
              >
                get started now
              </Link>

              <Link
                href="/register"
                prefetch={true}
                className="text-white uppercase border-b-2 pb-1 border-white/50 transition duration-500 hover:text-white/50 hover:border-white"
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
