import { Github } from "lucide-react";
import Image from "next/image";
import Lukament from "../../../../../public/images/Lukament.png"
import Link from "next/link";

type ProjectProps = {
    name: string;
    description: string;
    tools: string[];
    url: string
}

export default function Project (props: ProjectProps) {
    return(
        <div className="border-1 rounded overflow-hidden w-[420px]">
            <div className="h-[300px] overflow-hidden">
                <Image 
                    className="w-full"
                    src={Lukament} 
                    alt="Lukament APP" 
                    width={200} 
                    height={100}
                    ></Image>
            </div>
            <div className="p-4">
                <h1 className="text-xl font-semibold">{props.name}</h1>
                <h1 className="muted">{props.description}</h1>
                <div className="flex gap-4 py-4">
                    {props.tools.map((tool, index) => (
                        <h1 key={index} className="bg-zinc-800 p-2 rounded">{props.tools[index]}</h1>
                    ))}
                </div>
                <Link target="_blank" className="flex items-center gap-1 w-fit" href={`${props.url}`}>
                    <Github size={16}/>
                    <h1>View On GitHub</h1>
                </Link>
            </div>
        </div>
    )
}