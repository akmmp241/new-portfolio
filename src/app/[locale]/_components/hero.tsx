"use client"

import {Highlighter} from "@/components/magicui/highlighter";
import Link from "next/link";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import Image from "next/image";
import {ShinyButton} from "@/components/magicui/shiny-button";
import {useTranslations} from "next-intl";
import {useCurrentLang} from "@/lib/useLang";
import Dots from "@/assets/dots.png"

const Hero = () => {
  const t = useTranslations("home.hero")
  const currentLang = useCurrentLang()

  return (
    <div className={"flex flex-col md:flex-row gap-12 items-center justify-center mt-16 px-6 lg:px-0"}>
      <div className={"flex-1 flex flex-col gap-12"}>
        <h1 className={"text-3xl font-extrabold leading-[1.8]"}>
          {t("taglines.1")} {""} <br/>
          <Highlighter action={"underline"} color={"#C778DDFF"}>
            <span className={currentLang === "id" ? "italic" : ""}>Software Engineer.</span>
          </Highlighter>
          <br/>
          {t("taglines.2")} {" "}
          <br/>
          <Highlighter action={"box"} color={"#C778DDFF"}>
            <span className={currentLang === "id" ? "italic" : ""}>Backend Development.</span>
          </Highlighter>
        </h1>
        <p className={"text-muted-foreground"}>
          {t("description.1")} <br className={"lg:hidden"}/> {t("description.2")}
        </p>
        <Link href={"/contacts"}>
          <InteractiveHoverButton className={"w-fit hidden md:block"}>{t("contact-me")}</InteractiveHoverButton>
          <ShinyButton className={"w-fit md:hidden text-white"}>{t("contact-me")} {"=>"}</ShinyButton>
        </Link>
      </div>
      <div className={"relative -top-12"}>
        <div className={"border-b border-primary"}>
          <Image className={"absolute top-28 left-6 -z-20"} src={"/logo-2.svg"} alt={"logo-2"} width={120}
                 height={120}/>
          <Image className={"w-auto h-auto"} src={"/akm-2.png"} alt={"akmal"} width={400} height={400}/>
          <Image className={"absolute bottom-16 right-0"} src={Dots} alt={"dots"} width={80} height={80}/>
        </div>
        <div
          className={"flex w-fit m-auto justify-center items-center gap-4 border border-muted-foreground py-1.5 px-2"}>

          {/* square box*/}
          <div className={"w-3 h-3 border border-primary"}>
          </div>

          <p className={"text-muted-foreground"}>{t("opportunities")}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;