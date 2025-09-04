"use client"

import {useTranslations} from "next-intl";
import Image from "next/image";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import {ShinyButton} from "@/components/magicui/shiny-button";
import Link from "next/link";

const AboutMe = () => {
  const t = useTranslations("home.about-me")

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
      <div className={"flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 h-fit"}>
        <div className={"flex-1 text-muted-foreground"}>
          <p className={"text-pretty"}>{t("description.1")}</p>
          <br/>
          <p className={"text-pretty"}>{t("description.2")}</p>
          <br/>
          <p className={"text-pretty"}>{t("description.3")}</p>
        </div>
        <div className={"flex justify-center lg:justify-end flex-1 text-muted-foreground lg:text-pretty"}>
          <Image className={"-mt-24 lg:-mt-48 border-b border-primary w-auto h-auto"} src={"/akm-1.png"} alt={"akmal"} width={360} height={360} />
        </div>
      </div>
      <div>
        <Link href={"/contacts"}>
          <InteractiveHoverButton className={"w-fit hidden md:block"}>{t("view-all")}</InteractiveHoverButton>
          <ShinyButton className={"w-fit md:hidden text-white"}>{t("view-all")} {"=>"}</ShinyButton>
        </Link>
      </div>
    </div>
  )
}

export default AboutMe;