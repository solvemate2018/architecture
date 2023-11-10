import {Socials} from "../components/Socials";

export function Footer() {
    return (
        <section id="footer" className="w-full h-16 bg-secondary">
            <div className="h-full w-full grid grid-cols-3 justify-evenly items-center ">
                <Socials />
                <div className="flex justify-center align-middle"><img className="h-10" src='/logosDefault/logoWhiteTransperant.png' alt='Лого'></img></div>
                <p className="text-white font-sagoe text-center">©2023 PD Design. All rights reserved.</p>
            </div>
        </section>
    )
  }
  