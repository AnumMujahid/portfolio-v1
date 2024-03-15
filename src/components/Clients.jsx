import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.png";
import Reveal from "./Reveal";

const OPTIONS = { loop: true };
const SLIDES = [
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

const Clients = () => {
  const options = OPTIONS;
  const slides = SLIDES;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);

  return (
    <Reveal direction="bottom">
      <div className="embla bg-[#c0ecff] border border-[#77bfde] rounded-2xl mt-10 mb-32 mx-24">
        <div className="clients">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="flex-shrink-0 flex-grow-0 min-w-0" key={index}>
                  <div className="embla__slide__number">
                    <img
                      src={slide}
                      className="h-11 my-8 mx-10 filter grayscale saturate-0 brightness-50 hue-rotate-150"
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

export default Clients;
