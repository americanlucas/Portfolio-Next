import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";

type CareerIconProps = {
  icon: ElementType;
  url: string;
};

export function CareerIcon({ icon: Icon, url }: CareerIconProps) {
  return (
    <Link target="_blank" href={url}>
      <Button
        className="hover:bg-zinc-800 cursor-pointer border-1 border-zinc-600"
        variant={"default"}
      >
        <Icon />
      </Button>
    </Link>
  );
}
