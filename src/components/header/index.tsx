import Link from "next/link";
import { Button } from "../ui/button";

export default function Header () {
    return(
        <nav className="
            flex items-center justify-between 
            px-10 border-b-3 rounded border-zinc-600 pb-4
         ">
            <div className="flex text-lg gap-6 ">
                <Link className="mutedHover text-xl font-bold" href={'/'}>Lucas.dev</Link>
                <Link className="mutedHover" href={'/about'}>About</Link>
                <Link className="mutedHover" href={'/projects'}>Projects</Link>
                <Link className="mutedHover" href={'/contact'}>Contact</Link>
            </div>
            <div>
                <Button 
                    className="p-[22px] text-md cursor-pointer bg-black hover:bg-zinc-800" 
                    variant={"default"}
                >Currículo</Button>
            </div>
        </nav>
    )
}