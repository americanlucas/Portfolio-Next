import { title } from "process"

type CareerTitleProps = {
    title: string
}

export function CareerTitle ({title}: CareerTitleProps) {
    return(
        <h1 className="text-5xl md:text-7xl font-black">{title}</h1>
    )
}