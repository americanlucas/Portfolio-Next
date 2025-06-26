import { Card } from "@/components/ui/card";
import { ContactCardHeader } from "./CardHeader";
import { CardInput } from "./CardInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardButton } from "./CardButton";

export function ContactCard() {
  return (
    <div className="min-w-xs sm:min-w-[440px] md:min-w-lg">
      <Card className="bg-zinc-900 text-white border-zinc-400">
        <ContactCardHeader title="Contact me for more informations" />
        <form>
          <div className="flex flex-col px-6 gap-5">
            <CardInput
              labelName="Name"
              icon={Input}
              id="name"
              inputType="text"
              placeholder="Your Name Here"
            />
            <CardInput
              labelName="Email"
              icon={Input}
              id="email"
              inputType="email"
              placeholder="Your E-Mail Here"
            />
            <CardInput
              labelName="Message"
              icon={Textarea}
              id="note"
              inputType="text"
              placeholder="Let Me Know Your Feedback"
            />
            <CardButton size="lg"></CardButton>
          </div>
        </form>
      </Card>
    </div>
  );
}
