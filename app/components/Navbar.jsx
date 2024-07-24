import React from 'react'
import Logo from './Logo'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Button from './Button'
import RoundeBtn from './RoundeBtn'
import { IoPersonOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link'
import Magnete from '../animations/Magnet'

const Navbar = () => {

  const navlinks = [
    {
      id: 1,
      title: "About",
      herf: '/about'
    },
    {
      id: 2,
      title: "Home",
      herf: '/'
    },
    {
      id: 3,
      title: "FAQ",
      herf: '/faq'
    },
    {
      id: 4,
      title: "Package",
      herf: '/package'
    },
  ]

  return (
    <div className='w-full flex flex-row items-center justify-between'>
      {/* nav links */}
      <div className='flex h-[50px] rounded-full px-3 flex-row items-center z-[99]'>
        <div className='lg:hidden'>menu</div>
        {navlinks.map((nav) => (
          <Magnete key={nav.id}>
            <Link href='' className='hidden lg:flex px-4 py-2  text-sm rounded-full border text-white hover:bg-white hover:text-black cursor-pointer'>{nav?.title}</Link>
          </Magnete>
        ))}
      </div>


      {/* right side */}
      <div className='hidden sm:flex flex-row items-center gap-2 z-[99]'>
        <RoundeBtn icon={<FiSearch size={20} />} className='hidden lg:flex text-black cursor-pointer bg-white' />
        <RoundeBtn icon={<TbShoppingBag size={20} />} className='hidden lg:flex text-black cursor-pointer bg-white' />
        {/* <RoundeBtn icon={<IoPersonOutline size={25} />} className='text-white cursor-pointer bg-black' /> */}
        <Button>Order Copa</Button>
      </div>

    </div>
  )
}

export default Navbar