import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col mx-24 gap-2">
      <div className="flex gap-2">
        <Reveal direction="bottom">
          <a href="https://github.com/Fatima-Mujahid/mentor-sphere/">
            <div className="border-[#77fa60] bg-[#ccffc3] flex-1 p-10 rounded-2xl flex items-center gap-4 h-80">
              <div className="text-left text-[#213046]">
                <h1 className="text-3xl font-black pb-5">
                  AI-Powered EdTech Solution
                </h1>
                <p className="text-base">
                  Designed, developed and launched a scalable EdTech platform
                  empowering teachers and students with AI driven learning.
                </p>
              </div>
              <img src={Project1} className="h-48 rounded-md object-cover" />
            </div>
          </a>
        </Reveal>
        <Reveal direction="bottom">
          <a href="https://github.com/AnumMujahid/mern-ecommerce">
            <div className="bg-[#213046] w-96 px-10 pt-10 rounded-2xl flex flex-col justify-between h-80">
              <h1 className="text-3xl font-black text-white">
                Ecommerce Application
              </h1>
              <img
                src={Project2}
                className="h-40 rounded-md object-cover object-top"
              />
            </div>
          </a>
        </Reveal>
      </div>
      <div className="flex gap-2">
        <Reveal direction="bottom">
          <a href="https://github.com/AnumMujahid/mern-whatsapp-clone/">
            <div className="bg-[#f5f5f5] w-96 px-10 pt-10 rounded-2xl flex flex-col justify-between h-80">
              <h1 className="text-3xl font-black text-[#213046]">
                Realtime Chat Application
              </h1>
              <img
                src={Project3}
                className="h-40 rounded-md object-fit object-center"
              />
            </div>
          </a>
        </Reveal>
        <Reveal direction="bottom">
          <a href="https://play.google.com/store/apps/details?id=com.kueenztechnologies.creativerse">
            <div className="bg-[#c0ecff] flex-1 p-10 rounded-2xl flex items-center gap-4 h-80">
              <div className="text-left text-[#213046]">
                <h1 className="text-3xl font-black pb-5">
                  AI-Art Generator From Concept to Launch
                </h1>
                <p className="text-base">
                  Designed, developed and integrated cutting-edge AI models for
                  seamless art creation.
                </p>
              </div>
              <img src={Project4} className="h-48 rounded-md object-cover" />
            </div>
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
