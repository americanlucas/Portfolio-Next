type ContactTitleProps = {
    title: string
}

export function ContactTitle ({title}:ContactTitleProps) {
    return(
        <h1 className="text-center text-4xl font-black mb-10">{title}</h1>
    )
}
