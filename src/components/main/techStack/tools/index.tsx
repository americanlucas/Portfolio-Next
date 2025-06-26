type ToolsProps = {
  area: string;
  tools: string[];
  className?: string;
};

export default function Tools({ area, tools, className }: ToolsProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold pb-4">{area}</h1>
      <div className={`${className} gap-4`}>
        {tools.map((tool, index) => (
          <h1
            className={`bg-zinc-800 p-2 rounded border-1 border-zinc-500 hover:bg-zinc-700`}
            key={index}
          >
            {tools[index]}
          </h1>
        ))}
      </div>
    </div>
  );
}
