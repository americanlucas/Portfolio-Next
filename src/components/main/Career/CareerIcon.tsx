import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";

type CareerIconProps = {
  icon: ElementType;
};

export function CareerIcon({ icon: Icon }: CareerIconProps) {
  return (
    <Link target="_blank" href={"https://github.com/americanlucas"}>
      <Button
        className="hover:bg-zinc-800 cursor-pointer border-1 border-zinc-600"
        variant={"default"}
      >
        <Icon />
      </Button>
    </Link>
  );
}
