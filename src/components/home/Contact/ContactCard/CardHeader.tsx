import { CardHeader } from "@/components/ui/card";

type ContactCardHeaderProps = {
  title: string;
};

export function ContactCardHeader({ title }: ContactCardHeaderProps) {
  return (
    <CardHeader className="text-lg font-semibold text-center">{title}</CardHeader>
  );
}
