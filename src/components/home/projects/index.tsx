import { Github } from "lucide-react";
import Project from "./project/Project";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center text-4xl font-black mb-10">Projects</h1>
      <div className="grid grid-cols-3 gap-8 items-center ">
        <div className="grid col-span-3 xl:col-span-1 gap-8 mx-5 md:mx-auto">
          <Project
            name="Lukament"
            description="Landing Page de um SaaS na área financeira"
            tools={["ReactTS", "TailwindCSS", "Figma"]}
            url="https://lukament.vercel.app/"
            icon={Github}
          />
        </div>
        <div className="grid col-span-3 xl:col-span-1 gap-8 mx-5 md:mx-auto">
          <Project
            name="Lukament"
            description="Landing Page de um SaaS na área financeira"
            tools={["NestJS", "NEXT.JS", "DrizzleORM"]}
            url="https://lukament.vercel.app/"
            icon={Github}
          />
        </div>
        <div className="grid col-span-3 xl:col-span-1 gap-8 mx-5 md:mx-auto">
          <Project
            name="Lukament"
            description="Landing Page de um SaaS na área financeira"
            tools={["ReactTS", "TailwindCSS", "Figma"]}
            url="https://lukament.vercel.app/"
            icon={Github}
          />
        </div>
        
      </div>
    </div>
  );
}
