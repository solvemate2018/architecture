import {socials} from '../data';

export function Socials() {
    return (
            <div className="h-full w-full flex justify-center items-center">
                {socials.map(social => {
                    return (<a href={social.url} className="mx-8">
                        <social.icon className='text-primary'/>
                        </a>)
                })}
            </div>
    )
  }
  