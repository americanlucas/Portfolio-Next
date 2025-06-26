import { ReactNode } from "react";

type ContactProps = {
  children: ReactNode;
};

export default function Contact({ children }: ContactProps) {
  return <div className="mb-10">{children}</div>;
}
