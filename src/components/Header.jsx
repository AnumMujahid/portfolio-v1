import React, { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-24">
      <Reveal direction="bottom">
        <div
          className="rounded-2xl mx-24"
          style={{
            background:
              "linear-gradient(180deg, #a0fc90 9.00900900900901%, #fbfbfb 100%)",
          }}
        >
          <div className="md:max-w-3xl py-20 sm:py-28 lg:py-32 px-10">
            <div className="hidden sm:mb-8 sm:flex sm:justify-start">
              <div className="py-1 text-3xl font-bold text-[#5173aa]">
                Hi, I'm Anum
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-black text-[#0e1d42] leading-tight">
                I help businesses craft software solutions that fuel growth.
              </h1>
              <p className="text-[#354b6f] text-sm pt-14 pb-8 md:max-w-lg">
                I help businesses like yours identify core user pain points,
                design intuitive solutions, and confidently build software that
                solves real problems and delights customers.
              </p>
              <div className="flex relative text-[#0e1d42] max-w-fit">
                <div className="outline-none border-none py-[10px] pr-32 pl-5 rounded-3xl text-sm bg-[#f5f5f5] text-black ring-1 ring-gray-200">
                  Book a 30-min Call
                </div>
                <div className="absolute top-[6px] bottom-0 right-0">
                  <a
                    target="_blank"
                    href="https://calendly.com/kueenz-technologies/design-build-powerful-softwares-for-your-business"
                    className="w-28 pt-[10px] pb-3 outline-none border-none cursor-pointer z-10 text-sm font-normal px-4 rounded-full bg-[#3bff0f] text-[#0e1d42]"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <img
        src="https://framerusercontent.com/images/lDn2JvlUHBK81SUoaSdx5ifWY.svg"
        className="absolute right-16 -bottom-28 -translate-y-10 transition-transform duration-500"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}
      /> */}
        </div>
      </Reveal>
    </div>
  );
}
