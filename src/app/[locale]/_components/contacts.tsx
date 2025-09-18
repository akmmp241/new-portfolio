"use client"

import {useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";

const Contacts = () => {
  const t = useTranslations("home.contacts")

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
      <div className={"flex gap-12 flex-col md:flex-row"}>
        <div className={"lg:max-w-4/5"}>
          <p className={"text-muted-foreground"}>{t("description")}</p>
        </div>
        <div>
          <div className={"flex flex-col gap-4 w-72 p-4 border"}>
            <h1 className={"font-semibold"}>{t("tagline")}</h1>
            <ul>
              <li>
                <Link className={"flex items-center gap-2 text-muted-foreground hover:text-white hover:fill-white"} href={"mailto:akmalmp241@gmail.com"}>
                  <Image className={"inline"}  src={"/email.svg"} alt={"email"} height={32} width={32} />
                  akmalmp241@gmail.com
                </Link>
              </li>
              <li>
                <Link className={"flex items-center gap-2 text-muted-foreground hover:text-white hover:fill-white"} href={"https://github.com/akmmp241"}>
                  <Image className={"inline"}  src={"/github.svg"} alt={"email"} height={32} width={32} />
                  akmmp241
                </Link>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
