"use client";
import Contact from "@/components/home/Contact/Contact";
import Career from "@/components/home/Career/Career";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/techStack";

import { Github, Linkedin, X } from "lucide-react";
import { CareerTitle } from "@/components/home/Career/CareerTitle";
import { CareerDescription } from "@/components/home/Career/CareerDescription";
import { CareerIcon } from "@/components/home/Career/CareerIcon";
import { ContactTitle } from "@/components/home/Contact/ContactTitle";
import { ContactCard } from "@/components/home/Contact/ContactCard/ContactCard";


export default function HomePage() {
  return (
    <div
      className="
      flex flex-col items-center
      gap-40 pt-30 relative
    "
    >
      <Career>
        <CareerTitle title="Front-End Developer" />
        <CareerDescription />
        <div className="flex gap-4">
          <CareerIcon url="https://github.com/americanlucas" icon={Github} />
          <CareerIcon url="https://www.linkedin.com/in/americanlucas/" icon={Linkedin} />
        </div>
      </Career>
      <Projects />
      <TechStack />
      <Contact>
        <ContactTitle title="Get In Touch"/>
        <ContactCard/>
      </Contact>
    </div>
  );
}
