export function TeamMember(props) {
    return (
        <div className="flex justify-center items-center flex-col m-12">
            <div className='group h-80 w-80 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    <div className='absolute inset-0'>
                        <img className='h-full w-full rounded-full object-cover shadow-xl shadow-black/40' src={props.pictureUrl} alt={props.name} fill={true} />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="font-sagoe text-xl font-bold">{''}</h1>
                            <br />
                            <div className="font-sagoe text-base">{props.description.map(d => {
                                return (<p >{d}</p>)
                            })}</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-sagoe text-xl pt-10 text-secondary'>{props.name}</p>
        </div>

    )
}
