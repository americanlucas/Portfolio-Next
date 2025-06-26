import Image from "next/image";
import Lukament from "../../../../../public/images/Lukament.png"

export function ProjectImage() {
  return (
    <div className="h-[300px] w-full overflow-hidden">
      <Image
        className="transition duration-300 object-cover w-full hover:scale-102"
        src={Lukament}
        alt="Lukament APP"
        width={400}
        height={100}
      />
    </div>
  );
}
