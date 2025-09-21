import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  if (isSelected) {
    return (
      <button
        onClick={() => onClick(name)}
        className="px-3 sm:px-6 inline-block py-2 sm:py-3 rounded-full relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-[linear-gradient(90deg,#4A6118_0%,#5A7D2A_20%,#6B8E23_35%,#88A454_50%,#6B8E23_65%,#5A7D2A_80%,#4A6118_100%)] bg-[length:200%_100%] animate-gradient-slide"></span>
        <span className="relative text-white font-medium text-base sm:text-xl">{name}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => onClick(name)}
      className="px-3 sm:px-6 py-2 sm:py-3 text-base sm:text-xl rounded-full text-[#ADB7BE] hover:text-white border-2 border-slate-600 hover:border-white transition-colors"
    >
      {name}
    </button>
  );
};

export default ProjectTag;
