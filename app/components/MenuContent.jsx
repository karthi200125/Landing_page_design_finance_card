'use client'

import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'
import Magnete from '../animations/Magnet'
import Logo from './Logo'
import TextAnimation from '../animations/TextAnimation'

const social = [
    'Instgram',
    "Twitter",
    "Facebook",
    "Linkedin"
]

const MenuContent = ({ menuOpen }) => {


    return (
        <div
            className={`w-full h-full bg-[var(--green)] text-[var(--black)] absolute left-0 transition-transform duration-1000 z-[1] flex items-center justify-center
          ${menuOpen ? 'translate-y-0 bottom-0' : '-translate-y-full'
                }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.45, 0.1, 0.45, 1)' }}
        >
            <div
                className='relative w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-[80%] gap-10'>
                <div className='hidden flex-1 lg:flex items-center justify-center'>
                    <Logo />
                </div>
                <div className='lg:flex-1 text-center flex flex-col'>
                    {navlinks.map((nl) => (
                        <Magnete key={nl.id}>
                            <Link href='' className='text-[50px] sm:text-[80px] lg:text-[100px] leading-none font-bold'>
                                <TextAnimation text={nl.title} delayMultiple={0.1} />
                            </Link>
                        </Magnete>
                    ))}
                </div>

                <div className='hidden flex-1 lg:flex flex-col items-center gap-5'>
                    {social.map((s) => (
                        <Magnete key={s}>
                            <Link href='' className='text-xl font-semibold'>
                                <TextAnimation text={s} />
                            </Link>
                        </Magnete>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MenuContent