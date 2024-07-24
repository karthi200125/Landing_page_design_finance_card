import React from 'react'
import RoundeBtn from './RoundeBtn'
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ children }) => {
    return (
        <div className='flex flex-row items-center group cursor-pointer max-w-max z-[99]'>
            <button className='h-[60px] flex text-black items-center justify-center px-10 text-md font-semibold rounded-full bg-[var(--green)] group-hover:bg-black group-hover:text-white  transition duration-300'>{children}</button>
            <RoundeBtn icon={<IoIosArrowRoundForward size={30} />} className='bg-black text-white ml-[-15px] -rotate-45 group-hover:bg-[var(--green)] group-hover:text-black group-hover:rotate-0 transition duration-300' />
        </div>
    )
}

export default Button