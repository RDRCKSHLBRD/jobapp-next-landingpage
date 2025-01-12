"use client";

import React, { useState } from "react";

// Testimonials Data
const testimonialsData = [
  {
    id: 0,
    name: "Samantha Rodez",
    title: "Marketing Specialist",
    text: "I never thought finding the perfect job could be so easy until I used this platform. The AI-powered skill gap analysis showed me exactly what I was missing, and the personalized recommendations helped me upgrade my resume and land a dream role in just three weeks! The ATS optimization ensured my application stood out. It's not just a job matching tool, it's a career changer!",
    image: "/images/testimonial-thumb/Samantha Rodez-sm.jpg",
  },
  {
    id: 1,
    name: "Micheal Liam",
    title: "Software Engineer",
    text: "This app gave me more than just job matches it gave me a career strategy. The job post analysis and skill gap breakdown were spot-on, and the resume optimization took my application to the next level. I even learned new skills from the recommended courses. I’ve already referred three friends, and they’re loving it too!",
    image: "/images/testimonial-thumb/Micheal Liam-sm.jpg",
  },
  {
    id: 2,
    name: "Elena Mensah",
    title: "HR Professional",
    text: "Job hunting used to feel overwhelming, but this platform turned it into a breeze. From uploading my resume to generating an AI-crafted cover letter, everything was seamless. The real game-changer for me was the ATS resume optimization I finally got callbacks from top companies. It's like having a personal career coach on demand!",
    image: "/images/testimonial-thumb/Elena Mensah-sm.jpg",
  },
  {
    id: 3,
    name: "Roderick Raj",
    title: "Data Analyst",
    text: "I spent months applying for jobs with no response until I tried this app. The matching algorithm found jobs perfectly suited to my experience, and the cover letter generator gave me the confidence I was lacking. The best part? I secured a position within weeks. This platform is a must-have for serious job seekers!",
    image: "/images/testimonial-thumb/Roderick Raj-sm.jpg",
  },
  {
    id: 4,
    name: "Linda Jesulayomi",
    title: "Project Manager",
    text: "As someone juggling a full-time job and looking for better opportunities, I needed a tool that works efficiently. This app delivered! The job board integration saved me hours of searching, and the step-by-step process kept me motivated. The final ATS-optimized resume made all the difference. Trust me, it’s worth it!",
    image: "/images/testimonial-thumb/Linda Jesulayomi-sm.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  // Calculate the dynamic order of the testimonials
  const getDynamicOrder = () => {
    const total = testimonialsData.length; // Total testimonials
    const centerIndex = Math.floor(total / 2); // Dynamic center position

    return Array.from({ length: total }, (_, i) => {
      return testimonialsData[(activeIndex + i - centerIndex + total) % total];
    });
  };

  const dynamicOrder = getDynamicOrder(); // Recalculate order whenever activeIndex changes

  // Update activeIndex on button click
  const handleSelect = (index) => {
    setFadeClass("opacity-0"); // Trigger fade-out for text
    setTimeout(() => {
      setActiveIndex(index); // Update the selected index
      setFadeClass("opacity-100"); // Trigger fade-in for text
    }, 300); // Matches the CSS transition duration
  };

  return (
    <section id="testimonials" className="p-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>
      <h2 className="text-xl font-medium text-center mb-8">What Users Are Saying</h2>
      <div className="flex justify-center gap-6 mb-8">
        {dynamicOrder.map((testimonial, index) => (
          <button
            key={`${testimonial.id}-${activeIndex}`} // Unique key to force re-render
            onClick={() => handleSelect(testimonial.id)}
            className={`relative transition-transform duration-500 ${
              testimonial.id === activeIndex
                ? "translate-y-[-20px] scale-110 z-10" // Slightly raised and scaled
                : "translate-y-0 scale-100"
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              onError={(e) => (e.target.src = "/images/default-avatar.jpg")} // Fallback image
              className={`w-36 h-36 object-cover rounded-full transition-transform duration-500 ${
                testimonial.id === activeIndex ? "shadow-lg" : "shadow-md"
              }`}
            />
            {testimonial.id === activeIndex && (
              <div
                className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"
                aria-hidden="true"
              ></div>
            )}
          </button>
        ))}
      </div>
      <div
        className={`bg-white p-6 rounded-lg text-center transition-opacity duration-500 ${fadeClass}`}
        style={{
          width: "629px",
          margin: "0 auto",
          border: "0.5px solid lightgray",
        }}
      >
        <p className="mb-4">&quot;{dynamicOrder[2].text}&quot;</p>
        <p className="font-bold">{dynamicOrder[2].name}</p>
        <p className="text-sm text-gray-500">{dynamicOrder[2].title}</p>
      </div>
    </section>
  );
}
