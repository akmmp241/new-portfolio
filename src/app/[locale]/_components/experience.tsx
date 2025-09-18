"use client"

import {ExperienceList} from "@/app/[locale]/_components/experience-list";
import {useTranslations} from "next-intl";

interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  skills?: string[]
  type?: "work" | "education" | "intern" | "project"
}

const sampleExperiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer Intern",
    company: "Nine Dragon Lab",
    location: "Semarang, Jawa Tengah",
    startDate: "Okt 2024",
    endDate: "Dec 2024",
    description:
        "Trusted to handle an international client, working on a warehouse management project with OCR and QR scanning features.",
    skills: ["Laravel", "Filamen", "React", "Tesseract"],
    type: "intern",
  },
  {
    id: "2",
    title: "Software Engineer Intern",
    company: "Kodingworks",
    location: "Semarang, Jawa Tengah & Remote",
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    description:
        "Developed an LMS website with online video features and built a web-based payment aggregator integrated with Xendit.",
    skills: ["NextJS", "Laravel", "Xendit", "Docker"],
    type: "intern",
  },
  {
    id: "3",
    title: "Web Developer & Team Lead",
    company: "SMK Negeri 8 Semarang",
    location: "Semarang, Jawa Tengah",
    startDate: "Jul 2024",
    endDate: "Okt 2024",
    description:
        "Led the PEMILOS (student council and MPK election) web project, integrated a system-wide monitoring solution, and built a live count feature using WebSocket.",
    skills: ["Laravel", "Pusher", "Grafana", "Loki", "Prometheus", "Docker"],
    type: "project",
  },
  {
    id: "4",
    title: "Web Developer Intern",
    company: "Dinustek",
    location: "Semarang, Jawa Tengah",
    startDate: "Okt 2023",
    endDate: "Des 2023",
    description:
        "Learning about Dinustek core laravel environment and continuing web-based project management for internal Dinustek",
    skills: ["Laravel"],
    type: "intern",
  },
]

const Experience = () => {
  const t = useTranslations("home.experience")

  return (
      <div className={"flex flex-col gap-12 px-6 lg:p-0"}>
        <div className={"flex-1 flex items-center gap-4"}>
          <h1 className={"text-3xl md:text-4xl font-medium tracking-wide"}>
            <span className={"text-primary"}>#</span>
            {t("title")}
          </h1>
          {/* line shape */}
          <div className={"w-1/5 md:w-2/5 h-0.5 bg-primary"}></div>
        </div>
        <ExperienceList experiences={sampleExperiences} />
      </div>
  )
}

export default Experience