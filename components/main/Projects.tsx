import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.png"
          title="Travelling CMS Landing Page"
          description="It is a landing page for Travelling CMS where customers can access all the packages that has been created by Admin."
          technologies={["MongoDB", "Express.Js", "React.Js", "Node.Js"]}
        />
        <ProjectCard
          src="/project1.1.png"
          title="Travelling CMS Admin Panel"
          description="It is our client's project in it we have to make a content Management system for them.Admin can create Packages and show it on the website for customers."
          technologies={["MongoDB", "Express.Js", "React.Js", "Node.Js"]}
        />
        <ProjectCard
          src="/ims.jpg"
          title="Inventory Management System"
          description="It is our Hackathon project that we completed with my team Orace."
          technologies={["MongoDB", "Express.Js", "React.Js", "Node.Js"]}
        />
        <ProjectCard
          src="/solarsystem.png"
          title="Galaxy Tour"
          description="It is a Space tour website that gives you a chance to see the whole solar system with animation.It is also provide much information about the planets and popular space organizations (ISRO ,NASA ,ROSCOSMOS)."
          technologies={["html", "css", "javaScript"]}
        />
      </div>
    </div>
  );
};

export default Projects;