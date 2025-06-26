"use client";
import ContactMe from "@/components/main/contactMe";
import Career from "@/components/main/Career/Career";
import Projects from "@/components/main/projects";
import TechStack from "@/components/main/techStack";

import { Github, Linkedin, X } from "lucide-react";
import { CareerTitle } from "@/components/main/Career/CareerTitle";
import { CareerDescription } from "@/components/main/Career/CareerDescription";
import { CareerIcon } from "@/components/main/Career/CareerIcon";

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
          <CareerIcon icon={Github} />
          <CareerIcon icon={Linkedin} />
        </div>
      </Career>
      <Projects />
      <TechStack />
      <ContactMe />
    </div>
  );
}
