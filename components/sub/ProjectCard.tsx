import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string[]; // Update the prop name to be in lowercase and an array of strings
}

const ProjectCard = ({ src, title, description, technologies }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="relative p-4">
        <h1 className="text-md font-semibold text-white">Technologies</h1>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="mt-2 font-normal text-[14px] text-gray-300 bg-[#2A0E61] py-1 px-2 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
