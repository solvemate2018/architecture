import { Carousel } from "@material-tailwind/react/components/Carousel/index";

export function Project(props) {
    return (
        <div className="flex justify-center items-center flex-col m-12">
            <Carousel className="rounded-2xl border border-black w-80 h-80">
                {props.pictureUrls.map(imageUrl => {
                    return (<img className="object-cover h-full w-full" src={imageUrl} alt={props.name} key={props.name} fill/>);
                })}
            </Carousel>
            <p className='font-sagoe text-xl pt-10'>{props.name}</p>
        </div>

    )
}

