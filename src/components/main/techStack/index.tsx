import Tools from "./tools";

export default function TechStack () {
    return(
        <>
            <div>
                <h1 className="text-center text-4xl font-black mb-10">Tech Stack</h1>
                <div className="grid grid-cols-2 mx-auto gap-10 w-full p-8">
                    <div className="border-2 p-4 rounded-xl">
                        <Tools 
                            area="Front-End"
                            tools={["JavaScript", "TypeScript", "HTML", "CSS (TailwindCSS)", "Next.JS", "Zustand"]}
                            />   
                    </div>
                    <div className="border-2 p-4 rounded-xl">
                        <Tools
                            area="Back-End"
                            tools={["MySQL", "Prisma (ORM)", "Git", "Python", "Java"]}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}