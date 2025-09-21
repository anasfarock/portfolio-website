"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Certifications",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="pt-8 px-4 xl:gap-16 sm:pt-16 xl:px-16">
      <div className="relative bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] rounded-full py-8 px-16 flex flex-col sm:flex-row items-center justify-between overflow-hidden animate-gradient-slide">
        {/* Fast moving circles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Extra Large circles */}
          <div className="absolute w-96 h-96 bg-[#344312]/15 rounded-full mix-blend-overlay animate-circle-1"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#52691A]/10 rounded-full mix-blend-overlay animate-circle-2"></div>
          <div className="absolute w-[450px] h-[450px] bg-[#7D6D55]/15 rounded-full mix-blend-overlay animate-circle-3"></div>
          <div className="absolute w-[350px] h-[350px] bg-[#465E1B]/10 rounded-full mix-blend-overlay animate-circle-4"></div>
          <div className="absolute w-[380px] h-[380px] bg-[#3D4D15]/15 rounded-full mix-blend-overlay animate-circle-5"></div>

          {/* Layer 2 - Large circles */}
          <div className="absolute w-64 h-64 bg-[#4A6118]/20 rounded-full mix-blend-overlay animate-circle-6"></div>
          <div className="absolute w-72 h-72 bg-[#5A7D2A]/15 rounded-full mix-blend-overlay animate-circle-7"></div>
          <div className="absolute w-80 h-80 bg-[#6B8E23]/20 rounded-full mix-blend-overlay animate-circle-8"></div>
          <div className="absolute w-56 h-56 bg-[#8B4513]/15 rounded-full mix-blend-overlay animate-circle-9"></div>
          <div className="absolute w-60 h-60 bg-[#556B2F]/20 rounded-full mix-blend-overlay animate-circle-10"></div>

          {/* Layer 3 - Medium circles */}
          <div className="absolute w-48 h-48 bg-[#3D4D15]/25 rounded-full mix-blend-overlay animate-circle-11"></div>
          <div className="absolute w-40 h-40 bg-[#465E1B]/20 rounded-full mix-blend-overlay animate-circle-12"></div>
          <div className="absolute w-44 h-44 bg-[#52691A]/25 rounded-full mix-blend-overlay animate-circle-13"></div>
          <div className="absolute w-36 h-36 bg-[#344312]/20 rounded-full mix-blend-overlay animate-circle-14"></div>
          <div className="absolute w-52 h-52 bg-[#7D6D55]/25 rounded-full mix-blend-overlay animate-circle-15"></div>

          {/* Layer 4 - Additional circles for more coverage */}
          <div className="absolute w-32 h-32 bg-[#4A6118]/20 rounded-full mix-blend-overlay animate-circle-16"></div>
          <div className="absolute w-28 h-28 bg-[#6B8E23]/25 rounded-full mix-blend-overlay animate-circle-17"></div>
          <div className="absolute w-36 h-36 bg-[#A69577]/20 rounded-full mix-blend-overlay animate-circle-18"></div>
          <div className="absolute w-40 h-40 bg-[#52691A]/25 rounded-full mix-blend-overlay animate-circle-19"></div>
          <div className="absolute w-44 h-44 bg-[#465E1B]/20 rounded-full mix-blend-overlay animate-circle-20"></div>
        </div>
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#A69577]/15 rounded-full mix-blend-overlay blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4A6118]/15 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-[#6B8E23]/15 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
