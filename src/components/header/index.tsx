"use client";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

export default function Header() {
  
  return (
    <nav
      className="
            flex items-center justify-between
            px-10 pt-2 border-b-3 rounded border-zinc-600 pb-6
         "
    >
      <div className="flex text-lg gap-6 items-center">
        <div className="flex sm:hidden hover:cursor-pointer">
          <MenuIcon  />
        </div>
        <div>
          <Link className="mutedHover text-xl font-bold" href={"/"}>
            Lucas.dev
          </Link>
        </div>
      </div>
      <div>
        <div className="sm:flex gap-6 hidden">
          <Link className="mutedHover" href={"/about"}>
            About
          </Link>
          <Link className="mutedHover" href={"/projects"}>
            Projects
          </Link>
          <Link className="mutedHover" href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
