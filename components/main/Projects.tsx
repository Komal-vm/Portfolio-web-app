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
          src="/what-is-encryption.jpg"
          title="Modern Next.js Token-Text-Transfer-app"
          description="Token Text Transfer lets you share text via tokens. Built with React, Tailwind, Turborepo, and deployed on Vercel."
          
        />
        <ProjectCard
          src="/image.png"
          title="Scan-Dine"
          description="
ScanDine is a smart dining solution that lets users scan QR codes to view menus, place orders, and streamline restaurant service. Built with React, Tailwind,"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Blast off into a sleek, space-themed experience where design meets the cosmos.
Explore a digital galaxy built for speed, style, and stellar vibes. 🌌🚀"
        />
      </div>
    </div>
  );
};

export default Projects;
