import { ReactNode } from "react";

type CareerProps = {
  children: ReactNode;
};

export default function Career({ children }: CareerProps) {
  return (
    <div
      className="
            flex flex-col items-center
            gap-8
            sm: text-center
        "
    >{children}</div>
  );
}
