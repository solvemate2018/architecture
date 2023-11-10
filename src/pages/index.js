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
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
      <link rel="manifest" href="./favicons/site.webmanifest" />
    </head>
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
