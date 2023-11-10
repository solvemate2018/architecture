import {Headline} from "../components/Headline"
import { Contacts } from "../data"


export function Contact() {
    return (
        <section id="contact" className="w-full xl:h-screen h-fit bg-primary xl:px-28 p-20 sm:py-10">
            <Headline title={Contacts.title} subtitle={Contacts.subtitle}></Headline>
            <div className="flex w-full h-5/6 justify-center items-center">
            <div className='w-full xl:grid xl:grid-cols-3 mt-12'>
                        <div className='col-span-1'>
                            <div className='flex '>
                                <div className='m-6'>
                                    <h1 className='text-secondary text-xl '>Имате въпрос?</h1>
                                    <p className='text-secondary text-md'>Свържете се с нас на Имейл:</p>
                                </div>
                            </div>
                            {/* <div className='flex '>
                                <div className='m-6'>
                                    <h1 className='text-secondary text-xl '>Current location</h1>
                                    <p className='text-secondary text-md'>Copenhagen, Denmark</p>
                                </div>
                            </div> */}
                        </div >
                            <form className='grid grid-cols-2 col-span-2 gap-4'>
                                <input type='text' placeholder='Вашето име' className='rounded appearance-none leading-tight outline-none focus:outline-el-blue focus:shadow-outline h-14 p-4 bg-tertiary text-white'></input>
                                <input type='email' placeholder='Вашият имейл' className='rounded appearance-none leading-tight outline-none focus:outline-el-blue focus:shadow-outline h-14 p-4 bg-tertiary text-white'></input>
                                <input type='text' placeholder='Тема' className='rounded appearance-none leading-tight outline-none focus:outline-el-blue focus:shadow-outline h-14 col-span-2 p-4 bg-tertiary text-white'></input>
                                <textarea type='text' placeholder='Въпрос' className='rounded appearance-none leading-tight outline-none focus:outline-el-blue focus:shadow-outline h-48 col-span-2 p-4 bg-tertiary text-white resize-none' ></textarea>
                                <button type='submit' className='bg-secondary hover:bg-tertiary w-1/2 h-14 rounded text-md text-primary'>Изпрати</button>
                            </form>
                    </div>
            </div>
        </section>
    )
  }
  