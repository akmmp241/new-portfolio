"use client"

import {useTranslations} from "next-intl";
import {IconCloud} from "@/components/magicui/icon-cloud";
import {DotPattern} from "@/components/magicui/dot-pattern";
import {cn} from "@/lib/utils";

const slugs: string[] = [
  "typescript",
  "nextdotjs",
  "postgresql",
  "nginx",
  "docker",
  "git",
  "github",
  "apachekafka",
  "go",
  "laravel",
  "mysql",
  "redis",
  "googlecloud",
  "rust",
  "grafana",
  "prometheus"
];

const external_slugs: string[] = [
  "https://shecancode.io/wp-content/uploads/2022/04/aws.png", // aws
]

interface SkillsProps {
  title: string;
  lists: string[]
}

const skills: SkillsProps[] = [
  {
    title: "Languages & Frameworks",
    lists: [
      "Go",
      "Rust",
      "Typescript",
      "Laravel",
      "Next.JS"
    ]
  },
  {
    title: "Databases",
    lists: [
      "PostgreSQL",
      "MySQL",
      "Redis"
    ]
  },
  {
    title: "Cloud",
    lists: [
      "AWS",
      "GCP",
    ]
  },
  {
    title: "Monitoring",
    lists: [
      "Grafana",
      "Prometheus",
      "Loki"
    ]
  },
  {
    title: "Other Tools",
    lists: [
      "Git",
      "GitHub",
      "Docker",
      "Nginx"
    ]
  },
]

const Skills = () => {
  const t = useTranslations("home.skills")
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  external_slugs.map(slug => images.push(slug));

  return (
    <div className={"relative flex flex-col gap-12 px-6 lg:p-0"}>
      <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
      <div className={"flex-1 flex items-center gap-4"}>
        <h1 className={"text-3xl md:text-4xl font-medium tracking-wide"}>
          <span className={"text-primary"}>#</span>
          {t("title")}
        </h1>
        {/* line shape */}
        <div className={"w-1/5 md:w-2/5 h-0.5 bg-primary"}></div>
      </div>
      <div className={"flex flex-col md:flex-row items-center"}>
        <div className={"relative flex justify-center items-center overflow-hidden"}>
          <IconCloud images={images} />
        </div>
        <div className={"grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-end gap-4 flex-1 lg:h-fit"}>
          {skills.map((skill: SkillsProps, index: number) => (
            <div key={index} className={"flex flex-col border lg:w-fit min-w-40 max-w-48 lg:h-fit "}>
              <h1 className={"p-2 text-lg font-semibold border-b"}>{skill.title}</h1>
              <p className={"text-muted-foreground break-words p-2"}>
                {skill.lists.map((list: string) => {
                  return `${list} `
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;