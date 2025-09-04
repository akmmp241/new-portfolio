"use client"

import Image from "next/image";
import HamburgerOpen from "@/assets/hamburger-open.png";
import HamburgerClose from "@/assets/hamburger-close.png";
import {use, useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Locale from "@/app/[locale]/_components/locale";
import {useTranslations} from "next-intl";
import {useCurrentLang} from "@/lib/useLang";

interface NavProps {
  href: string;
  label: string;
}

const navs: NavProps[] = [
  {
    href: "",
    label: "home"
  },
  {
    href: "/projects",
    label: "projects"
  },
  {
    href: "/about-me",
    label: "about-me"
  },
  {
    href: "/contacts",
    label: "contacts"
  }
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = useCurrentLang()
  const t = useTranslations("home.nav")

  const hamburgerMenuClicked = () => {
    if (!isOpen) {
      document.getElementById("main")?.classList.add("invisible");
    } else {
      document.getElementById("main")?.classList.remove("invisible");
    }
    setIsOpen(!isOpen);
  }

  return (
    <header className={"relative text-white px-6 lg:p-0"}>

      {/* Fixed Socials list (Desktop Only) */}
      <div className={"hidden lg:flex fixed flex-col items-center pl-2"}>
        {/* Side Line */}
        <div className={"h-80 border-l w-[1px]"}>
        </div>
        {/*Socials list*/}
        <ul>
          <li>
            <Link href={"https://github.com/akmmp241"}>
              <Image src={"/github.svg"} alt={"github"} width={40} height={40}/>
            </Link>
          </li>
          <li>
            <Link href={"mailto:akmalmp241@gmail.com"}>
              <Image src={"/email.svg"} alt={"email"} width={40} height={40}/>
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/akmalmuhammadp/"}>
              <Image src={"/linkedin.svg"} alt={"linkedin"} width={40} height={40}/>
            </Link>
          </li>
        </ul>
      </div>

      <div className={"max-w-5xl flex flex-row items-center justify-between m-auto py-6"}>
        <div className={"flex flex-row gap-2"}>
          <Image className={"w-auto h-auto"} src={"/logo.svg"} alt={"logo"} width={24} height={24}/>
          <h1 className={"font-bold text-xl"}>Akmalmp</h1>
        </div>

        {/* Desktop View Navigation*/}
        <nav className={"hidden lg:block"}>
          <ul className={"flex flex-row justify-center items-center gap-4 font-[500]"}>
            {navs.map((nav: NavProps, index: number) => {
              const isActive = pathname === ("/" + currentLang + nav.href)

              return (
                <li key={index} className={`text-xl ${isActive ? "" : "text-muted-foreground"}`}>
                  <Link href={`/${currentLang + nav.href}`} key={index}>
                    <span
                      className={"text-primary"}>#</span>{t(nav.label)}
                  </Link>
                </li>
              )
            })}
            <li>
              <Locale/>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={hamburgerMenuClicked}
          className="lg:hidden flex items-center text-body-text cursor-pointer">
          {!isOpen ? <Image src={HamburgerOpen} alt={"hamburger open"} width={20} height={20}/> :
            <Image src={HamburgerClose} alt={"hamburger close"} width={20} height={20}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute z-[999] bg-background h-screen w-screen px-4 pt-12">
          <nav className={"mb-48"}>
            <ul className={"flex flex-col gap-12"}>
              {navs.map((nav: NavProps, index: number) => {
                const isActive = pathname === (nav.href + currentLang)

                return (
                  <li key={index} className={`text-4xl ${isActive ? "" : "text-muted-foreground"}`}>
                    <Link href={`/${currentLang + nav.href}`} key={index}>
                    <span
                      className={"text-primary"}>#</span>{t(nav.label)}
                    </Link>
                  </li>
                )
              })}
              <li className={"text-4xl"}>
                <Locale/>
              </li>
            </ul>
          </nav>
          <div className={""}>
            <ul className={"flex gap-8 justify-center items-center"}>
              <li>
                <Link href={"https://github.com/akmmp241"}>
                  <Image src={"/github.svg"} alt={"github"} width={96} height={96}/>
                </Link>
              </li>
              <li>
                <Link href={"mailto:akmalmp241@gmail.com"}>
                  <Image src={"/email.svg"} alt={"email"} width={96} height={96}/>
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/akmalmuhammadp/"}>
                  <Image src={"/linkedin.svg"} alt={"linkedin"} width={96} height={96}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

    </header>
  )
}