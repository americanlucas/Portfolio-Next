"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function ContactMe() {
  return (
    <div className="mb-10">
      <h1 className="text-center text-4xl font-black mb-10">Get In Touch</h1>
      <div className="min-w-xs sm:min-w-[440px] md:min-w-lg">
        <Card className="bg-zinc-900 text-white border-zinc-400">
          <CardHeader className="text-lg font-semibold text-center">
            Contact me for more informations
          </CardHeader>
          <form>
            <div className="flex flex-col px-6 gap-5">
              <div className="grid">
                <Label className="pb-2" htmlFor="name">
                  Name
                </Label>
                <Input
                  className="caret-black"
                  id="name"
                  type="text"
                  placeholder="Your Name Here"
                ></Input>
              </div>
              <div className="grid">
                <Label className="pb-2" htmlFor="email">
                  E-Mail
                </Label>
                <Input
                  className="caret-black"
                  id="email"
                  type="email"
                  placeholder="Your E-Mail Here"
                ></Input>
              </div>
              <div className="grid">
                <Label className="pb-2" htmlFor="note">
                  Message
                </Label>
                <Textarea
                  className="caret-black"
                  id="note"
                  placeholder="Write a Note Here"
                />
              </div>
              <Button
                size="lg"
                className="bg-black hover:bg-zinc-800 cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
