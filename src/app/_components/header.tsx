"use client"

import Image from "next/image";
import HamburgerOpen from "@/assets/hamburger-open.png";
import HamburgerClose from "@/assets/hamburger-close.png";
import {useState} from "react";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={"text-white"}>
      <div className={"max-w-5xl flex flex-row items-center justify-between m-auto p-6"}>
        <div className={"flex flex-row gap-2"}>
          <Image src={"/logo.svg"} alt={"logo"} width={24} height={24}/>
          <h1 className={"font-bold text-xl"}>Akmalmp</h1>
        </div>
        <nav className={"hidden md:block"}>
          <ul className={"flex flex-row gap-4 font-[500]"}>
            <Link href={"/"}>
              <li className={"text-xl"}><span className={"text-primary"}>#</span>home</li>
            </Link>
            <Link href={"/projects"}>
              <li className={"text-xl text-muted-foreground"}><span className={"text-primary"}>#</span>projects</li>
            </Link>
            <Link href={"/about-me"}>
              <li className={"text-xl text-muted-foreground"}><span className={"text-primary"}>#</span>about-me</li>
            </Link>
            <Link href={"/contacts"}>
              <li className={"text-xl text-muted-foreground"}><span className={"text-primary"}>#</span>contacts</li>
            </Link>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-body-text cursor-pointer"
        >
          {!isOpen ? <Image src={HamburgerOpen} alt={"hamburger open"} width={20} height={20}/> :
            <Image src={HamburgerClose} alt={"hamburger close"} width={20} height={20}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen w-screen px-4 pt-12">
          <nav className={"mb-48"}>
            <ul className={"text-6xl flex flex-col gap-16"}>
              <li>
                <span className={"text-primary"}>#</span>home
              </li>
              <li className={"text-muted-foreground"}>
                <span className={"text-primary"}>#</span>projects
              </li>
              <li className={"text-muted-foreground"}>
                <span className={"text-primary"}>#</span>about-me
              </li>
              <li className={"text-muted-foreground"}>
                <span className={"text-primary"}>#</span>contacts
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
                  <Image src={"/email.svg"} alt={"github"} width={96} height={96}/>
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/akmalmuhammadp/"}>
                  <Image src={"/linkedin.svg"} alt={"github"} width={96} height={96}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}