import React from 'react'
import Logo from './Logo'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Button from './Button'
import RoundeBtn from './RoundeBtn'
import { IoPersonOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row items-center justify-between'>
      {/* nav links */}
      <div className='h-[50px] bg-white rounded-full px-3 flex flex-row items-center gap-3 z-[99]'>
        <Link href='' className='px-5 py-2 bg-[var(--gray)] text-black rounded-full text-sm font-semibold'>Home</Link>
        <Link href='' className='px-5 py-2 bg-[var(--gray)] text-black rounded-full text-sm font-semibold'>About</Link>
        <Link href='' className='px-5 py-2 bg-[var(--gray)] text-black rounded-full text-sm font-semibold'>FAQ</Link>
      </div>

      {/* right side */}
      <div className='flex flex-row items-center gap-2 z-[99]'>
        <RoundeBtn icon={<FiSearch size={25} />} className='text-black cursor-pointer bg-white' />
        <RoundeBtn icon={<TbShoppingBag size={25} />} className='text-black cursor-pointer bg-white' />
        {/* <RoundeBtn icon={<IoPersonOutline size={25} />} className='text-white cursor-pointer bg-black' /> */}
        <Button>Order Copa</Button>
      </div>

    </div>
  )
}

export default Navbar