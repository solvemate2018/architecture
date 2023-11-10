import { Headline } from "../components/Headline"
import { TeamMember } from "../components/TeamMember"
import { TeamData } from "../data"

export function Team() {
    return (
        <section id="team" className="w-full xl:h-screen h-fit bg-primary xl:px-28 p-20 sm:py-10">
            <Headline title={TeamData.title} subtitle={TeamData.subtitle}></Headline>
            <div className="flex w-full h-5/6 xl:flex-row flex-col justify-evenly items-center">
            <TeamMember name={TeamData.members[0].name} pictureUrl={TeamData.members[0].imgUrl} description={TeamData.members[0].description}></TeamMember>
            <TeamMember name={TeamData.members[1].name} pictureUrl={TeamData.members[1].imgUrl} description={TeamData.members[1].description}></TeamMember>
            </div>
        </section>
    )
  }
  