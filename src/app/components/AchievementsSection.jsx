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
    metric: "Users",
    value: "100",
    postfix: "+",
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
      <div className="relative px-1 py-1 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] animate-gradient-slide"></span>
        <div className="relative bg-[#121212] rounded-full py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 relative z-10"
              >
                <h2 className="text-[#ffffff] text-4xl font-bold flex flex-row">
                  {achievement.prefix && achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                    locale="en-US"
                    className="text-[#ffffff] text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix && achievement.postfix}
                </h2>
                <p className="text-gray-300 text-base font-medium mt-2">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
