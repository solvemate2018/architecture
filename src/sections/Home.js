import { Nav } from '../components/Nav';

export function Home() {
    return (
        <section id="home" className="w-full h-screen bg-secondary">
            <div className="h-full w-full flex justify-center items-center sm:gap-60 gap-16">
                <img className="h-32" src='./logosDefault/logoWhiteTransperant.png' alt='Лого'></img>
                <div className=""><Nav /></div>
            </div>
        </section>
    )
  }
  