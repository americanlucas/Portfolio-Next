import Project from "./project";

export default function Projects() {
    return(
        <div>
            <h1 className="text-center text-4xl font-black mb-10">Projects</h1>
            <div className="grid grid-cols-3 gap-8 items-center">
                <div className="col-span-3">
                    <Project
                        name="Lukament"
                        description="Landing Page de um SaaS na área financeira"
                        tools={["ReactTS", "TailwindCSS", "Figma"]}
                        url="https://lukament.vercel.app/"
                    />
                </div>
            </div>
        </div>
    )
}