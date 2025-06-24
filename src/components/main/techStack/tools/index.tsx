type ToolsProps = {
    area: string
    tools: string[]
}

export default function Tools (props: ToolsProps) {
    return(
        <div>
            <h1 className="text-2xl font-bold pb-4">{props.area}</h1>
            <div className="flex gap-4">
                {props.tools.map((tool, index) => (
                    <h1 className="bg-zinc-800 p-2 rounded border-1 border-zinc-500" key={index}>{props.tools[index]}</h1>
                ))}
            </div>
        </div>
    )
}