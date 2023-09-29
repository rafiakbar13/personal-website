import React from "react";
import { getProjects } from "@/app/api/projects/route";
import ProjectCard from "./ProjectCard";
const ProjectsList = async () => {
    const projects = await getProjects();
    return (
        <section className="">
            {projects.map((project: any) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
};

export default ProjectsList;
