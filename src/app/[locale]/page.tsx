"use client"

import Hero from "@/app/[locale]/_components/hero";
import QuoteSection from "@/app/[locale]/_components/quote";
import Projects from "@/app/[locale]/_components/projects";
import AboutMe from "@/app/[locale]/_components/about-me";
import Skills from "@/app/[locale]/_components/skills";
import Contacts from "@/app/[locale]/_components/contacts";
import Footer from "@/app/[locale]/_components/footer";
import Experience from "@/app/[locale]/_components/experience";

const Home = () => {
  return (
      <main id={"main"} className={"max-w-5xl flex flex-col gap-24 my-8 m-auto text-white"}>
        <Hero/>
        <QuoteSection/>
        <Projects/>
        <Skills/>
        <Experience/>
        <AboutMe/>
        <Contacts/>
        <Footer/>
      </main>
  );
}

export default Home;