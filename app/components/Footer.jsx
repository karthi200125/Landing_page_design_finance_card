import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Icons from './Icons'
import { IoIosArrowRoundForward } from "react-icons/io";
import logoimg from '../../public/logo.png'
import qr from '../../public/qr.png'

const Footer = () => {
  return (
    <section className='relative min-h-[400px] rounded-[30px] p-4 md:p-10 flex flex-col  sm:flex-row items-center gap-10 justify-between bg-[var(--black)] text-[var(--gray)]'>

      <div
        className='footercurve absolute left-1/2 transform -translate-x-1/2 bg-white h-[50px] w-[250px] sm:w-[350px] text-black top-0 flex flex-row items-center justify-center gap-3 px-4 md:px-10'
        style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: '30px' }}
      >
        <h4>Do you check anything</h4>
        <IoIosArrowRoundForward size={30} />
      </div>

      {/*left die */}
      <div className='flex-1 mt-10 sm:mt-0 flex flex-col gap-5 justify-center items-center sm:items-start'>
        <Logo type='footer' />
        <h4 className='text-neutral-500 text-center sm:text-start'>Discover the power of our and rewarding credit cards</h4>
        <Button>Enter email address</Button>
        {/* <div className='flex flex-row items-center p-3 bg-white rounded-full max-w-max'>
          <img src={logoimg.src} alt="" className='w-8 h-8 rounded-full' />
          <img src={logoimg.src} alt="" className='w-8 h-8 rounded-full' />
          <img src={logoimg.src} alt="" className='w-8 h-8 rounded-full' />
          <img src={logoimg.src} alt="" className='w-8 h-8 rounded-full' />
        </div> */}
      </div>

      {/* mid */}
      <div className='mt-[50px] flex-1 flex flex-col gap-10 items-center justify-center'>
        <div className='flex flex-wrap gap-5 lg:gap-10 md:flex-row items-start justify-center'>
          <div className='space-y-5 text-center'>
            <h4>About us</h4>
            <h4>Products</h4>
            <h4>useful Links</h4>
          </div>
          <div className='space-y-5 text-center'>
            <h4>About us</h4>
            <h4>Products</h4>
            <h4>useful Links</h4>
          </div>
          <div className='space-y-5 text-center'>
            <h4>About us</h4>
            <h4>Products</h4>
            <h4>useful Links</h4>
          </div>
        </div>

        {/* icons */}
        <Icons />
      </div>

      {/* right side */}
      <div className='hidden xl:flex flex-1 h-full relative'>
        <div className='absolute bottom-0 right-0 w-[150px] h-[150px] bg-white rounded-[20px] p-1'>
          <img src={qr.src} alt="" className='w-full h-full rounded-[20px]' />
        </div>
      </div>

    </section>
  )
}

export default Footer