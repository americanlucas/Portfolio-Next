import Tools from "./tools";

export default function TechStack () {
    return(
        <>
            <div>
                <h1 className="text-center text-4xl font-black mb-10">Tech Stack</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 w-full p-8 justify-center">
                    <div className="flex flex-col border-2 p-8 rounded-xl">
                        <Tools
                            className="flex flex-wrap"
                            area="Front-End"
                            tools={["JavaScript", "TypeScript", "HTML", "CSS (TailwindCSS)", "Next.JS", "Zustand"]}
                            />   
                    </div>
                    <div className="flex flex-col border-2 p-8 rounded-xl">
                        <Tools
                            className="flex flex-wrap"
                            area="Back-End"
                            tools={["MySQL", "Prisma (ORM)", "Git", "Python", "Java"]}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}