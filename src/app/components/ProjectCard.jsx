import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, showLivePreview }) => {
  return (
    <div className="relative group">
      <div className="h-52 md:h-72 bg-[#181818] rounded-t-xl overflow-hidden">
        {showLivePreview ? (
          // Live website preview using iframe
          <div className="relative w-full h-full overflow-hidden">
            <iframe
              src={previewUrl}
              title={`${title} Preview`}
              className="w-full h-full border-0 outline-0"
              style={{
                width: '400%',
                height: '400%',
                transform: 'scale(0.25)',
                transformOrigin: 'top left',
                overflow: 'hidden'
              }}
              scrolling="no"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 pointer-events-none"></div>
          </div>
        ) : (
          // Regular image display
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        )}
        
        {/* Overlay with action buttons */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;