import React from 'react'
import Navbar from './Navbar'
import RoundeBtn from './RoundeBtn'
import { IoIosArrowRoundForward } from 'react-icons/io'
import logo from '../../public/logo.png'
import profile1 from '../../public/profile1.webp'

const Hero = () => {
    return (
        <section className='h-screen flex items-center justify-center p-5'>
            <div className='relative h-full w-full bg-[var(--gray)] p-5 overflow-hidden rounded-[30px]'>

                {/* hero backgroun vdeio */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <video
                                src="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>

                </div>

                {/* top custom */}
                <div className='absolute left-1/2 transform -translate-x-1/2 top-0'>
                    <div className='relative bg-white'>
                        <div className='herotop max-w-max h-[60px] flex items-center justify-center'>
                            <div className='flex flex-row items-center gap-10 w-full'>
                                <span className='w-[150px] h-[3px] bg-black rounded-full'></span>
                                <h2>CAPO</h2>
                                <span className='w-[150px] h-[3px] bg-black rounded-full'></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom custom */}
                <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 rotate-180'>
                    <div className='relative bg-white'>
                        <div className='herobottom max-w-max px-20 h-[60px] flex items-center justify-center'>
                            <div className='rotate-180'>
                                <img src={logo.src} alt="" className='w-[80px] h-[80px] object-contain' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* navbar */}
                <Navbar />

                {/* custom color */}
                <div className='absolute bottom-0 mb-[20px] right-5 w-[250px] h-[250px] rounded-[30px] bg-white p-5 flex justify-between flex-col'>
                    <div className='space-y-3'>
                        <h3>Color</h3>
                        <h4>You can Custom color of you cards</h4>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='w-10 h-10 rounded-full bg-[var(--green)]'></div>
                        <div className='w-10 h-10 rounded-full bg-violet-600'></div>
                        <div className='w-10 h-10 rounded-full bg-red-400'></div>

                        <RoundeBtn icon={<IoIosArrowRoundForward size={20} className='-rotate-45' />} />
                    </div>
                </div>

                {/* <h2>Streaminling Your</h2>
                    <h2>Financial Journy</h2>
                    <h2>Online</h2> */}

                {/* bottom left content */}
                <div className='absolute bottom-5 left-10'>
                    <div className='relative w-[350px] h-[150px]'>
                        <div className='absolute left-0 top-0 max-w-max  bg-black flex flex-row items-center gap-1 p-3' style={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px' }}>
                            <img src={profile1.src} alt="" className='w-[40px] h-[40px] rounded-full object-contain' />
                            <img src={profile1.src} alt="" className='w-[40px] h-[40px] rounded-full object-contain' />
                            <img src={profile1.src} alt="" className='w-[40px] h-[40px] rounded-full object-contain' />
                            <img src={profile1.src} alt="" className='w-[40px] h-[40px] rounded-full object-contain' />
                        </div>
                        <div className='absolute bottom-0 right-0 w-[250px]  bg-black flex flex-row items-center justify-center gap-10 text-white p-5' style={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                            <h3>+57K</h3>
                            <p>people order copa cards</p>
                        </div>
                        <div className='absolute top-0 right-0 flex flex-row items-center gap-3 h-[60px] justify-center'>
                            <h4>read more</h4>
                            <IoIosArrowRoundForward size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero