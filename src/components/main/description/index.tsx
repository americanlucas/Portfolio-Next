import Link from "next/link";
import { Button } from "../../ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Description() {
  return (
    <div
      className="
            flex flex-col items-center
            gap-8
            sm: text-center
        "
    >
      <h1 className="text-5xl md:text-7xl font-black">Front-End Developer</h1>
      <p
        className="
            muted text-xl text-center 
            w-[320px] 
            md:w-[670px]
      "
      >
        Building digital experiences with modern technologies. Focused on
        creating elegant solutions to complex problems.
      </p>
      <div className="flex gap-4">
        <Link target="_blank" href={"https://github.com/americanlucas"}>
          <Button
            className="hover:bg-zinc-800 cursor-pointer border-1 border-zinc-600"
            variant={"default"}
          >
            <Github />
          </Button>
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/americanlucas/"}
        >
          <Button
            className="hover:bg-zinc-800 cursor-pointer border-1 border-zinc-600"
            variant={"default"}
          >
            <Linkedin />
          </Button>
        </Link>
      </div>
    </div>
  );
}
