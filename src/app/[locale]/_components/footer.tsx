"use client"

import Image from "next/image";

const Footer = () => {
  return (
      <div className={"flex flex-col md:flex-row justify-between items-center gap-6 pt-8 px-6 lg:px-0 border-t"}>
          <div className={"flex flex-col gap-2 md:gap-4"}>
              <div className={"flex flex-col md:flex-row justify-center md:justify-normal md:items-center md:gap-2"}>
                  <Image src={"/logo.svg"} alt={"logo"} width={24} height={24}/>
                  <h1 className={"font-bold "}>Akmalmp</h1>
                  <p className={"text-muted-foreground md:ml-8"}>akmalmp241@gmail.com</p>
              </div>
              <p className={"text-sm"}>Software Engineer and Backend Enthusiast.</p>
          </div>
          <div>
              <p className={"text-muted-foreground"}>Akmalmp. 2025. Design by Elias</p>
          </div>
      </div>
  )
}

export default Footer
