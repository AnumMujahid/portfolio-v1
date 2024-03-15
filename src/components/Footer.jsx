import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const options = { loop: true };
const slides = [
  "SUBSCRIBE",
  ".",
  "SUBSCRIBE",
  ".",
  "SUBSCRIBE",
  ".",
  "SUBSCRIBE",
  ".",
];

const Footer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const links = [
    {
      id: "link-1",
      title: "anum.mujahid.se@gmail.com",
      url: "mailto:anum.mujahid.se@gmail.com",
    },
    {
      id: "link-2",
      title: "linkedin.com/in/anum-mujahid",
      url: "https://www.linkedin.com/in/anum-mujahid/",
    },
    {
      id: "link-3",
      title: "github.com/AnumMujahid",
      url: "https://github.com/AnumMujahid",
    },
    {
      id: "link-4",
      title: "instagram.com/anum_mujahid",
      url: "https://www.instagram.com/anum_mujahid/",
    },
  ];
  const sections = [
    { id: "section-1", title: "Home", url: "#" },
    { id: "section-2", title: "Home", url: "#" },
    { id: "section-3", title: "Home", url: "#" },
    { id: "section-4", title: "Home", url: "#" },
  ];
  const socials = [
    { id: "social-1", title: "Twitter", url: "#" },
    { id: "social-2", title: "Twitter", url: "#" },
    { id: "social-3", title: "Twitter", url: "#" },
    { id: "social-4", title: "Twitter", url: "#" },
  ];
  return (
    <footer className="mx-24 mb-4">
      {/* <div className="bg-[#213046] rounded-2xl pt-20">
        <div className="flex relative text-[#0e1d42] max-w-fit pb-10 pl-10 md:pl-20">
          <div className="outline-none border-none py-[10px] pr-32 pl-5 rounded-3xl text-sm bg-[#f5f5f5] text-black">
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
        <div className="flex pl-10 md:pl-20">
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="pb-4">
                <a
                  href={section.url}
                  className="text-white hover:text-[#c0ecff] text-base"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="pl-10 md:pl-20">
            {socials.map((social) => (
              <li key={social.id} className="pb-4">
                <a
                  href={social.url}
                  className="text-white hover:text-[#c0ecff] text-base"
                >
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="embla py-10">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="flex-shrink-0 flex-grow-0 min-w-0" key={index}>
                  <div className="embla__slide__number">
                    {slide != "." && (
                      <h1 className="text-7xl font-black text-white">
                        {slide}
                      </h1>
                    )}
                    {slide == "." && (
                      <img
                        src="https://framerusercontent.com/images/lDn2JvlUHBK81SUoaSdx5ifWY.svg"
                        width={65}
                        height={65}
                        className="mx-5"
                        style={{ marginBottom: "-80px" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between">
        {links.map((link) => (
          <div className="flex items-center" key={link.id}>
            <div className="h-12 border-l-2 border-dashed border-gray-300"></div>
            <a
              className="text-[#354b6f] text-sm font-bold pl-2"
              href={link.url}
            >
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
