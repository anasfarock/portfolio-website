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
      <div className="relative bg-gradient-to-r from-[#1a2e35] via-[#2d4a44] to-[#1a2e35] bg-[length:200%_100%] rounded-full py-8 px-16 flex flex-col sm:flex-row items-center justify-between overflow-hidden animate-gradient-x">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-4000"></div>
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
