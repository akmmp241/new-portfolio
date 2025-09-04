"use client"

import Image from "next/image";
import ProjectBadge from "@/app/[locale]/_components/project-badge";

export interface ProjectCardProps {
  image: string;
  title: string;
  techstack: string;
  description: string;
  badges: {
    fe: string;
    be: string;
    live: string
  }
}

const ProjectCard = ({image, title, techstack, description, badges, ...props}: ProjectCardProps) => {
  return (
    <div className={"flex flex-col h-fit border-2 border-muted-foreground"} {...props}>
      <div className={"h-full md:max-h-56"}>
        {image !== "" ? (
          <Image src={image} alt={title} width={200} height={200} className={"w-full h-full object-cover"} />
        ) : (
          <div className={"flex justify-center items-center border w-full h-full min-h-72 md:min-h-44"}>
            No photo
          </div>
        )}
      </div>
      <div className={"bg-background p-2 border-2"}>
        <p className={"text-sm text-muted-foreground leading-relaxed tracking-wide"}>{techstack}</p>
      </div>
      <div className={"flex flex-col gap-3 bg-background p-2 py-4"}>
        <h2 className={"text-xl tracking-wide font-medium"}>{title}</h2>
        <p className={"text-muted-foreground"}>{description}</p>
        {badges.be !== "" || badges.live !== "" || badges.fe !== "" ? (
          <div className={"flex flex-wrap gap-4"}>
            {badges.be !== "" ? (
              <ProjectBadge href={badges.be} variant={"be"}/>
            ) : undefined}
            {badges.fe !== "" ? (
              <ProjectBadge href={badges.fe} variant={"fe"}/>
            ) : undefined}
            {badges.live !== "" ? (
              <ProjectBadge href={badges.live} variant={"live"} />
            ) : undefined}
          </div>
        ): undefined}
      </div>
    </div>
  )
}

export default ProjectCard;