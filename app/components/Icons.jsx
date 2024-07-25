import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Magnete from '../animations/Magnet';

const Icons = () => {
    return (
        <div className='flex flex-row items-center p-3 bg-white/5 rounded-full gap-1'>
            <Magnete>
                <a href="" className='custom-cursor-target w-12 h-12 rounded-full bg-[var(--gray)] flex items-center justify-center'>
                    <FaInstagram size={25} className='text-black' />
                </a>
            </Magnete>
            <Magnete>
                <a href="" className='custom-cursor-target w-12 h-12 rounded-full bg-[var(--gray)] flex items-center justify-center'>
                    <FaPinterestP size={25} className='text-black' />
                </a>
            </Magnete>
            <Magnete>
                <a href="" className='custom-cursor-target w-12 h-12 rounded-full bg-[var(--gray)] flex items-center justify-center'>
                    <FaTwitter size={25} className='text-black' />
                </a>
            </Magnete>
            <Magnete>
                <a href="" className='custom-cursor-target w-12 h-12 rounded-full bg-[var(--gray)] flex items-center justify-center'>
                    <FaLinkedin size={25} className='text-black' />
                </a>
            </Magnete>
        </div>
    )
}

export default Icons