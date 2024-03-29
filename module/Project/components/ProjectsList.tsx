import React from "react";
import { getProjects } from "@/app/api/projects/route";
import ProjectCard from "./ProjectCard";
import { ProjectProps } from "@/common/types/projects";
const ProjectsList = async () => {
    const projects = await getProjects();
    return (
        <section className="grid grid-cols-3 w-1/2 gap-5 mt-8 justify-center items-center">
            {projects && projects.map((project: ProjectProps) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
};

export default ProjectsList;
