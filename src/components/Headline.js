export function Headline(props) {
    return (
            <div className="flex justify-center items-center flex-col h-16 mb-8 text-secondary">
                <div className="lg:w-1/2 md:w-5/6 w-full text-center">
                <h1 className="font-sagoe text-2xl">{props.title}</h1>
                <h3 className="font-sagoe text-l">
                    {props.subtitle}
                </h3>
                </div>
            </div>
    )
}
