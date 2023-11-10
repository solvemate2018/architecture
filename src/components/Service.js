export function Service(props) {
    return (
        <div className="flex justify-start items-start flex-col m-12 bg-black p-6 h-full xl:w-1/5 lg:w-2/5 w-5/6 rounded-xl">
            <div className="">
                <p className='font-sagoe text-xl text-white'>{props.name}</p>
                {/* Logo */}
            </div>
            <br />
            <ul className="font-sagoe text-white ">{props.description.map(description => {
                return (<li>{description}</li>)
            })}</ul>
        </div>

    )
}
