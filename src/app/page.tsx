import ContactMe from "@/components/main/contactMe";
import Description from "@/components/main/description";
import Projects from "@/components/main/projects";
import TechStack from "@/components/main/techStack";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="
      flex flex-col items-center
      gap-40 pt-30
    ">
      <Description />
      <Projects />
      <TechStack/>
      <ContactMe/>
    </div>
  );
}
