import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Team } from '../sections/Team'
import { Projects } from '../sections/Projects'
import { Services } from '../sections/Services'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
    <main>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </main>
    </>
  )
}
