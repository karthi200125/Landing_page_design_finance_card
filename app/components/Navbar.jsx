import { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import { IoIosArrowRoundForward } from 'react-icons/io'
import { TbShoppingBag } from "react-icons/tb"
import Button from './Button'
import Menu from './Menu'
import MenuContent from './MenuContent'
import RoundeBtn from './RoundeBtn'
import TextAnimation from '../animations/TextAnimation'

export const navlinks = [
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

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full flex flex-row items-center justify-between'>
      {/* nav links */}
      <div className='flex h-[50px] rounded-full px-3 flex-row items-center'>
        <Menu onMenu={(d) => setMenuOpen(d)} />
        <MenuContent menuOpen={menuOpen} />
      </div>


      {/* right side */}
      <div className='flex flex-row items-center gap-2'>
        <RoundeBtn icon={<FiSearch size={20} />} className='hidden lg:flex text-black cursor-pointer bg-white' />
        <RoundeBtn icon={<TbShoppingBag size={20} />} className='hidden lg:flex text-black cursor-pointer bg-white' />
        <Button className="hidden sm:flex"><TextAnimation text="Order Copa" /></Button>
        <RoundeBtn className='sm:hidden z-[] bg-[var(--green)] text-black' icon={<IoIosArrowRoundForward size={20} />} />
      </div>

    </div>
  )
}

export default Navbar