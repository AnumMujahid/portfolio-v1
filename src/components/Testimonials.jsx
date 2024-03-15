import React from "react";
import Feedback1 from "../assets/testimonial1.jpeg";
import Feedback2 from "../assets/testimonial2.jpeg";
import Feedback3 from "../assets/testimonial3.jpeg";
import Reveal from "./Reveal";

const Testimonials = () => {
  const feedbacks = [
    {
      id: "feedback-1",
      bg: "#ccffc3",
      border: "#77fa60",
      text: "Anum is an energetic and a highly motivated youth. She can utilize good communication skills and technical expertise to positively contribute to the organizations' objectives.",
      name: "Farah Tahir",
      company: "Technical Team Lead @ Hactric Solutions",
      image: Feedback1,
    },
    {
      id: "feedback-2",
      bg: "#f5f5f5",
      border: "#77fa60",
      text: "During her tenure, Anum consistently demonstrated exceptional skills, dedication, and professionalism, making valuable contributions to our organization.",
      name: "Abdul Ghani Khan",
      company: "Manager HR @ CHI Technologies",
      image: Feedback2,
    },
    {
      id: "feedback-3",
      bg: "#c0ecff",
      border: "#77fa60",
      text: "Great app, idk how but details are super realistic and seem awesome.",
      name: "Soban Mujtaba Baig",
      company: "User @ Creativerse",
      image: Feedback3,
    },
  ];
  return (
    <div className="mx-24 pb-32">
      <h1 className="text-4xl pb-10 pt-32 text-left font-black max-w-md">
        Don't just build software, build success
      </h1>
      <Reveal direction="right">
        <div className="flex gap-2">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="border flex-1 rounded-xl p-5"
              style={{
                borderColor: `${feedback.borderColor}`,
                backgroundColor: `${feedback.bg}`,
              }}
            >
              <h1 className="text-left text-md font-bold">{feedback.text}</h1>
              <div className="flex items-center pt-5">
                <img
                  src={feedback.image}
                  className="w-11 h-11 object-cover rounded-full"
                />
                <div className="text-left pl-2">
                  <p className="text-sm font-medium">{feedback.name}</p>
                  <p className="text-xs">{feedback.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Testimonials;
