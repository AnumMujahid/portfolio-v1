import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Reveal from "./Reveal";

import Me from "../assets/about.png";

const options = { loop: true };
const slides = [
  "ABOUT",
  ".",
  "ABOUT",
  ".",
  "ABOUT",
  ".",
  "ABOUT",
  ".",
  "ABOUT",
  ".",
];

const services = [
  {
    id: "service-1",
    title: "Product Discovery & Design",
    detail:
      "I'll dive deep into your idea, pinpoint your ideal user, and map out a product that delivers what your market truly craves. No more wasted resources on features that fall flat.",
  },
  {
    id: "service-2",
    title: "Product Development",
    detail:
      "With a focus on efficiency and scalability, I'll turn your validated designs into a robust product. Expect clean code, agile sprints, and a solution that's ready to grow with you.",
  },
  {
    id: "service-3",
    title: "Product Testing & Launch",
    detail:
      "Rigorous testing uncovers issues and ensures you're releasing a product that's polished and user-approved. Data-driven insights will refine everything before it hits the market.",
  },
];

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);
  return (
    <Reveal direction="bottom">
      <div id="about">
        <div
          className="mx-24 bg-[#5173aa] text-white text-left pl-10 rounded-2xl pt-20 relative border border-[#213046] flex justify-between items-end"
          style={{ marginBottom: "-70px", zIndex: "100" }}
        >
          <div className="max-w-lg pb-20">
            <h2 className="text-4xl font-black">What I can do for you</h2>
            <p className="text-sm py-10">
              As Co-founder and Full Stack Developer at{" "}
              <a href="https://www.kueenztechnologies.com">
                Kueenz Technologies
              </a>
              , I'm obsessed with building software that people genuinely love
              using. My experience at{" "}
              <a href="https://www.kueenztechnologies.com">
                Kueenz Technologies
              </a>{" "}
              means I know how to partner with businesses, digging deep into
              their needs to craft winning products.
            </p>

            <div className="w-full pb-10">
              <div className="max-w-md">
                {services.map((service) => (
                  <Disclosure key={service.id}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#587cb7] text-white px-4 py-2 text-left text-sm font-medium hover:bg-[#597eba] focus:outline-none mb-2">
                          <span>{service.title}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-white`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-4 pt-2 text-sm text-gray-50">
                          {service.detail}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>

            <a href="https://www.linkedin.com/in/anum-mujahid/">
              <div className="bg-[#77bfde] w-10 h-10 flex items-center justify-center rounded-full">
                <ArrowUpRightIcon width={24} />
              </div>
            </a>
          </div>
          <img
            src={Me}
            className="filter grayscale saturate-0 brightness-10 hue-rotate-150 h-96"
          />
        </div>
        <div className="embla py-10">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="flex-shrink-0 flex-grow-0 min-w-0" key={index}>
                  <div className="embla__slide__number">
                    {slide != "." && (
                      <h1 className="text-7xl font-black text-[#0e1d42]">
                        {slide}
                      </h1>
                    )}
                    {slide == "." && (
                      <img
                        src="https://framerusercontent.com/images/lDn2JvlUHBK81SUoaSdx5ifWY.svg"
                        width={65}
                        height={65}
                        className="mx-5"
                        style={{ marginBottom: "-80px", zIndex: "0" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
