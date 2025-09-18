"use client"

import {useTranslations} from "next-intl";
import ProjectCard, {ProjectCardProps} from "@/app/[locale]/_components/project-card";

const project_list: ProjectCardProps[] = [
  {
    image: "/powerup.webp",
    title: "PowerUP",
    description: "Top Up platform with multiple online payments",
    techstack: "Next.js TS Laravel Xendit Mysql",
    badges: {
      fe: "https://github.com/akmmp241/powerup-client-service",
      be: "https://github.com/akmmp241/powerup-rest-service",
      live: "https://powerup.akmalmp.my.id"
    }
  },
  {
    image: "/akmalstore.jpeg",
    title: "AkmalStore",
    description: "API service for online top up platform with microservice architecture",
    techstack: "Go Postgres Xendit Kafka Docker Redis",
    badges: {
      fe: "",
      be: "https://github.com/akmmp241/topupstore-microservice",
      live: ""
    }
  },
  {
    image: "/evia.webp",
    title: "Evia",
    description: "Mobile apps for recognizing external wounds",
    techstack: "Go Redis Postgres Expo GeminiAPI",
    badges: {
      fe: "",
      be: "https://github.com/akmmp241/dinacom-go-rest",
      live: ""
    }
  }
];

const Projects = () => {
  const t = useTranslations("home.projects")

  return (
      <div id={"projects"} className={"flex flex-col gap-12 px-6 lg:p-0"}>
        <div className={"flex items-center"}>
          <div className={"flex-1 flex items-center gap-4"}>
            <h1 className={"text-3xl md:text-4xl font-medium tracking-wide"}>
              <span className={"text-primary"}>#</span>
              {t("title")}
            </h1>
            {/* line shape */}
            <div className={"w-1/5 md:w-2/5 h-0.5 bg-primary"}></div>
          </div>
        </div>
        <div className={"grid md:grid-cols-3 gap-4"}>
          {project_list.map(({image, title, description, techstack, badges}: ProjectCardProps, i: number) => (
              <ProjectCard image={image} title={title} description={description} techstack={techstack} badges={badges}
                           key={i}/>
          ))}
        </div>
      </div>
  )
}

export default Projects;