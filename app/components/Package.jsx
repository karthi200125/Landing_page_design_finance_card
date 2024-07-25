import React from 'react'
import star from '../../public/star.png'
import graph from '../../public/graph.webp'
import RoundeBtn from './RoundeBtn'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Button from './Button';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import TextAnimation from '../animations/TextAnimation';


const Package = () => {
    return (
        <section className='min-h-[600px] flex flex-col lg:flex-row items-center gap-10'>
            {/* left side box */}
            <div className='w-full lg:w-[65%] xl:flex-1 h-[600px] bg-[var(--gray)] rounded-[30px] relative'>
                {/* bottom left */}
                <div className='packtopleft absolute top-0 left-0 max-w-max px-5 bg-[var(--white)] flex flex-row items-center gap-3' style={{ borderBottomRightRadius: "20px" }}>
                    <img src={star.src} alt="" className='w-[70px] h-[70px] object-contain' />
                    <h4><TextAnimation text="The special one" /></h4>
                </div>
                {/* bottom right */}
                <div className='packbottomright absolute bottom-0 right-0 max-w-max py-3 px-5  bg-[var(--white)] flex flex-row items-center gap-3' style={{ borderTopLeftRadius: "20px" }}>
                    2x
                    <div className='w-10 h-10 rounded-full bg-violet-700'></div>
                    <div className='w-10 h-10 rounded-full bg-[var(--green)]'></div>
                    <div className='w-10 h-10 rounded-full border flex items-center justify-center'></div>
                </div>
                {/* top right */}
                <div className='hidden sm:flex absolute top-3 right-3 w-[200px] h-[200px] rounded-[20px]  bg-[var(--white)] p-5 flex-col justify-between'>
                    <h4>Copa pack</h4>
                    <img src={graph.src} alt="" className='w-full object-contain h-[70px]' />
                    <h4 className='flex flex-row items-center justify-between'>123$
                        <RoundeBtn icon={<IoIosArrowRoundForward size={20} className='-rotate-45' />} />
                    </h4>
                </div>

                {/* inside cards */}
                <div className='absolute left-[20px] sm:left-[50px] top-1/2 transform -translate-y-1/2 mt-5'>
                    <div className='relative overflow-hidden  w-[300px] md:w-[350px] h-[380px] md:h-[450px]'>
                        <div className='w-[200px] md:w-[280px] h-[90%] rounded-[30px] bg-[var(--black)] text-[var(--white)] p-5 flex flex-col justify-between'>
                            <h3 className='flex flex-row items-center justify-between'>
                                <HiMiniSpeakerWave size={20} />
                                VISA
                            </h3>
                            <div className='flex flex-col justify-between'>
                                <h2>1254</h2>
                                <h2>5432</h2>
                                <h2>3521</h2>
                                <h2>3090</h2>
                            </div>
                            <div className='bg-violet-600 flex flex-row items-center justify-between rounded-[10px] px-3 py-2'>
                                <h4>Farzad Gardoxz</h4>
                                <h4>09 / 23</h4>
                            </div>
                        </div>
                        <div className='absolute bottom-0 right-0 w-[200px] md:w-[280px] h-[90%] rounded-[30px] bg-[var(--black)] text-[var(--white)] border-[5px] border-solid border-[var(--gray)] p-5 flex flex-col justify-between'>
                            <h3 className='flex flex-row items-center justify-between'>
                                <HiMiniSpeakerWave size={20} />
                                VISA
                            </h3>
                            <div className='flex flex-col justify-between'>
                                <h2>1254</h2>
                                <h2>5432</h2>
                                <h2>3521</h2>
                                <h2>3090</h2>
                            </div>
                            <div className='bg-violet-600 flex flex-row items-center justify-between rounded-[10px] px-3 py-2'>
                                <h4>Farzad Gardoxz</h4>
                                <h4>09 / 23</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
k
            {/* right side content */}
            <div className='w-full lg:w-[35%] xl:flex-1 space-y-[50px] lg:space-y-[200px]'>
                <div className='space-y-[50px]'>
                    <h2><TextAnimation text="Check Our Packages" /></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptate, nostrum sequi exercitationem, illo suscipit quasi repellat, illum doloremque ipsa fugiat optio laboriosam ipsam accusamus tempore architecto impedit cum blanditiis</p>
                    <div className='w-[70%] flex flex-row items-center justify-between'>
                        <span className='w-[30%] h-[4px] bg-[var(--black)] rounded-full'></span>
                        <span className='w-[30%] h-[4px] bg-[var(--gray)] rounded-full'></span>
                        <span className='w-[30%] h-[4px] bg-[var(--gray)] rounded-full'></span>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Button><TextAnimation text="Explore More" /></Button>
                    <div className='flex flex-row items-center'>
                        <RoundeBtn icon={<IoIosArrowRoundBack size={25} />} />
                        <RoundeBtn icon={<IoIosArrowRoundForward size={25} />} className='bg-[var(--green)]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package