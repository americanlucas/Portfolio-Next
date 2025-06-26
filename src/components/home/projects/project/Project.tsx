import { ProjectImage } from "./ProjectImage";
import { ElementType } from "react";
import Link from "next/link";

type ProjectProps = {
  name: string;
  description: string;
  tools: string[];
  url: string;
  icon: ElementType;
};

export default function Project({description,icon: Icon,name,tools,url}:ProjectProps) {
  return (
    <div className="border-1 rounded overflow-hidden md:w-[420px]">
      <ProjectImage />
      <div className="p-4">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h1 className="muted">{description}</h1>
        <div className="flex flex-wrap gap-4 py-4">
          {tools.map((tool, index) => (
            <h1
              key={index}
              className="bg-zinc-800 p-2 rounded transition duration-200 border-1 border-zinc-600 hover:bg-zinc-700"
            >
              {tools[index]}
            </h1>
          ))}
        </div>
        <Link
          target="_blank"
          className="flex items-center gap-1 w-fit mutedHover"
          href={`${url}`}
        >
          <Icon size={16} />
          <h1>View On GitHub</h1>
        </Link>
      </div>
    </div>
  );
}
