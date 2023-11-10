import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { HiBars3 } from 'react-icons/hi2'

import { motion } from 'framer-motion';
import { sections } from '../data';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
      hidden: {
        scale: 0,
      },
      visible: {
        scale: 120,
        transition: {
          type: 'spring',
          stiffness: 160,
          damping: 60,
        },
      },
    };
  
    const ulVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.1,
        },
      },
    };
  
    return (
      <nav className='relative'>
        <div
          onClick={() => setIsOpen(true)}
          className='cursor-pointer text-snow'
        >
          <HiBars3 className='w-16 h-16 text-primary'/>
        </div>
  
        {/* circle */}
        <motion.div
          variants={circleVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          className='w-4 h-4 bg-primary fixed top-1/2 right-1/2'
        ></motion.div>
  
        <motion.ul
          variants={ulVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : ''}
          className={`${
            isOpen ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className='cursor-pointer absolute top-8 right-8 z-10'
          >
            <RxCross1 className='w-8 h-8 text-primary' />
          </div>
          <div className='grid grid-flow-col grid-rows-none h-full w-full divide-x-2'>
            {
                sections.map(section => {
                    return <NavLink id={section.id} name={section.name} imgUrl={section.imgUrl} onClick={null}/>
                })
            }
          </div>
        </motion.ul>
      </nav>
    );
}

const NavLink = (props) => {
    return (
      <div>
    <a 
    className={"h-full flex justify-center items-center bg-cover"} 
    onClick={props.onClick}
    href={'/'}
    >
        <div className='h-full w-full blur-[2px] hover:blur-sm' style={{backgroundImage: `url("${props.imgUrl}")`}}>
        </div>
        <div className='absolute bg-secondary p-4 rounded-xl'>
            <p className='justify-center text-center font-sagoe text-xl text-primary '>{props.name}</p>
        </div>
    </a>
    </div>
    )
}