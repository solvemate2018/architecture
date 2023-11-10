import { Headline } from "../components/Headline"
import { AboutUs } from "../data"
import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="w-full xl:h-screen h-fit bg-primary xl:px-28 p-20 sm:py-10">
            <Headline title={AboutUs.title} subtitle={AboutUs.subtitle}></Headline>
            <div className="flex xl:flex-row flex-col w-full h-5/6 justify-center items-center">
                <motion.div className="h-80 xl:w-1/2 w-5/6 xl:px-2 my-6 relative" initial={{x: -300}} animate={{ x: 0 }}>
                    <img className="h-80 w-full rounded-lg object-cover object-center" src={AboutUs.imgUrl} alt={AboutUs.title} />
                </motion.div>
                <div className="xl:w-1/2 xl:px-20">
                    <p className="font-sagoe text-lg text-justify text-secondary">
                        {AboutUs.text}
                    </p>
                </div>
            </div>
        </section>
    )
}
