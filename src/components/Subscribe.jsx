import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.png";
import Reveal from "./Reveal";

const options = { loop: true, axis: "y" };
const slides = [
  Logo1,
  Logo2,
  "https://chi-technologies.com/wp-content/uploads/2023/02/CHI-ultra-light.png",
  Logo1,
  Logo2,
  "https://chi-technologies.com/wp-content/uploads/2023/02/CHI-ultra-light.png",
  Logo1,
  Logo2,
  "https://chi-technologies.com/wp-content/uploads/2023/02/CHI-ultra-light.png",
  Logo1,
  Logo2,
  "https://chi-technologies.com/wp-content/uploads/2023/02/CHI-ultra-light.png",
];

const Subscribe = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);
  return (
    <Reveal direction="bottom">
      <div className="flex max-h-96 mx-24 mt-16 mb-5">
        <div className="bg-[#c0ecff] border border-[#77bfde] rounded-2xl flex-1">
          <div className="pl-10 md:pl-20 py-20">
            <h1 className="text-[#213046] font-black text-2xl max-w-md text-left pb-5">
              Have a vision for amazing software? Let's turn it into a reality.
            </h1>
            <div className="flex relative text-[#0e1d42] max-w-fit">
              <div className="outline-none border-none py-[10px] pr-32 pl-5 rounded-3xl text-sm bg-[#f5f5f5] text-black">
                Book a 30-min Call
              </div>
              <div className="absolute top-[7px] bottom-0 right-0">
                <a
                  target="_blank"
                  href="https://calendly.com/kueenz-technologies/design-build-powerful-softwares-for-your-business"
                  className="w-28 pt-[10px] pb-3 outline-none border-none cursor-pointer z-10 text-sm font-normal px-4 rounded-full bg-[#3bff0f] text-[#0e1d42]"
                >
                  Let's Talk
                </a>
              </div>
            </div>
            {/* <p className="text-sm text-[#0e1d42] text-left pt-3">
            Join 15000+ investors
          </p> */}
          </div>
          <div>{/* image */}</div>
        </div>
        <div className="bg-[#213046] embla rounded-2xl ml-4">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="flex flex-col h-80">
              {slides.map((slide, index) => (
                <div className="flex-shrink-0 flex-grow-0 min-w-0" key={index}>
                  <div className="embla__slide__number">
                    <img
                      src={slide}
                      width={200}
                      style={{ filter: "brightness(0) invert(1)" }}
                      className="object-contain h-11 my-5 mx-5"
                    />
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

export default Subscribe;
