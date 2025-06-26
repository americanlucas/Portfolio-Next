import { Button } from "@/components/ui/button";

type CardButtonProps = {
    size: "default" | "sm" | "lg" | "icon"
}

export function CardButton({size}:CardButtonProps) {
  return (
    <Button
      size={`${size}`}
      className="bg-black hover:bg-zinc-800 cursor-pointer"
      onClick={(e) => e.preventDefault()}
    >
      Send Message
    </Button>
  );
}
