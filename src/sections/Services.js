import {Headline} from "../components/Headline"
import {Service} from "../components/Service"
import { ServicesData } from "../data"

export function Services() {
    return (
        <section id="services" className="w-full xl:h-screen h-fit bg-primary xl:px-28 p-20 sm:py-10">
            <Headline title={ServicesData.title} subtitle={ServicesData.subtitle}></Headline>
            <div className="flex xl:flex-row flex-col w-full h-5/6 mt-16 justify-center items-center">
            <Service name={ServicesData.services[0].title} logo={""} description={ServicesData.services[0].description} />
            <Service name={ServicesData.services[1].title} logo={""} description={ServicesData.services[1].description} />
            <Service name={ServicesData.services[2].title} logo={""} description={ServicesData.services[2].description} />
            </div>
        </section>
    )
  }
  