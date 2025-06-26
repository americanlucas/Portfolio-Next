import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer () {
    return(
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between p-4 border-t-2 border-zinc-600 mt-8">
            <div className="flex gap-4 items-center">
                <Copyright size={16}/>
                <Link className="font-semibold" href={"https://github.com/americanlucas"}>Lucas.dev</Link>
            </div>
            <div className="flex gap-4 items-center hover:items-baseline">
                <h1>All Rights Deserved</h1>
                <Link className="mutedHover hover:border-b-2 border-zinc-600" href={"/"}>Terms of Service</Link>
                <Link className="mutedHover hover:border-b-2 border-zinc-600" href={"/"}>Privacy</Link>
            </div>
        </div>
    )
}