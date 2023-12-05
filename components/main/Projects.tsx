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
          src="/posty.png"
          title="Full Stack Web App"
          description="Posty is a web app that allows users to create post, view post(both individual and others), edit post, and delete post. Users can also like or dislike on a post, and everyone can see number of likes and dislikes below post content. And lastly, users can write comment to the post."
        />
        <ProjectCard
          src="/servo.png"
          title="Servo App"
          description="This Servo App is developed as a joint effort by a team of five as part of GA's Software Engineering Immersive program. The primary goal was to create an intuitive and efficient Single Page Application (SPA) tailored for individuals seeking to locate petrol stations based on their geographical coordinates."
        />
        <ProjectCard
          src="/animelic.png"
          title="Full Stack React Web App"
          description="Animelic is a website that display animes list base on seasons, user can click on each article to see details on the page, user can also click the link on nav bar to find out what they want, and lastly user can search anime by typing keywords in the input box."
        />
      </div>
    </div>
  );
};

export default Projects;