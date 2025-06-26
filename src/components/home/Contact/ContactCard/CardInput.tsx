import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ElementType } from "react";

type CardInputProps = {
  icon: ElementType;
  id: string
  placeholder: string
  inputType: string
  labelName: string
};

export function CardInput({ icon: InputName, id, placeholder, inputType, labelName }: CardInputProps) {
  return (
    <div className="grid">
      <Label className="pb-2" htmlFor={id}>
        {labelName}
      </Label>
      <InputName
        className="caret-black"
        id={id}
        type={inputType}
        placeholder={placeholder}
      ></InputName>
    </div>
  );
}
