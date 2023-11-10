import {Headline} from "../components/Headline"
import {Project} from "../components/Project"
import { ProjectsData } from "../data"


export function Projects() {
    return (
        <section id="projects" className="w-full xl:h-screen h-fit bg-primary xl:px-28 p-20 sm:py-10">
            <Headline title={ProjectsData.title} subtitle={ProjectsData.subtitle}></Headline>
            <div className="flex xl:flex-row flex-col w-full h-5/6 justify-center items-evenly">
            <Project name={ProjectsData.projects[0].title} pictureUrls={ProjectsData.projects[0].imgUrls}></Project>
            <Project name={ProjectsData.projects[1].title} pictureUrls={ProjectsData.projects[1].imgUrls}></Project>
            <Project name={ProjectsData.projects[2].title} pictureUrls={ProjectsData.projects[2].imgUrls}></Project>
            </div>
        </section>
    )
  }
  