import React from 'react'
import star from '../../public/star.png'
import RoundeBtn from './RoundeBtn'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Button from './Button';


const Package = () => {
    return (
        <section className='min-h-[600px] flex flex-row items-center gap-10'>
            {/* left side box */}
            <div className='flex-1 w-full h-[700px] bg-[var(--gray)] rounded-[30px] relative'>
                {/* bottom left */}
                <div className='packtopleft absolute top-0 left-0 max-w-max px-5 bg-white flex flex-row items-center gap-3' style={{ borderBottomRightRadius: "20px" }}>
                    <img src={star.src} alt="" className='w-[70px] h-[70px] object-contain' />
                    <h4>The special one</h4>
                </div>
                {/* bottom right */}
                <div className='packbottomright absolute bottom-0 right-0 max-w-max py-3 px-5  bg-white flex flex-row items-center gap-3' style={{ borderTopLeftRadius: "20px" }}>
                    2x
                    <div className='w-10 h-10 rounded-full bg-violet-700'></div>
                    <div className='w-10 h-10 rounded-full bg-[var(--green)]'></div>
                    <div className='w-10 h-10 rounded-full border flex items-center justify-center'></div>
                </div>
                {/* top right */}
                <div className='absolute top-3 right-3 w-[200px] h-[200px] rounded-[20px]  bg-white p-5 flex flex-col justify-between'>
                    <h4>Copa pack</h4>
                    <h4 className='flex flex-row items-center justify-between'>123$
                        <RoundeBtn icon={<IoIosArrowRoundForward size={20} className='-rotate-45' />} />
                    </h4>
                </div>

                {/* inside cards */}
                <div className='absolute left-[50px] top-1/2 transform -translate-y-1/2'>
                    <div className='relative overflow-hidden w-[350px] h-[450px]'>
                        <div className='w-[280px] h-[90%] rounded-[30px] bg-[var(--black)] text-white p-5'>one</div>
                        <div className='absolute bottom-0 right-0 w-[280px] h-[90%] rounded-[30px] bg-[var(--black)] text-white border-[5px] border-solid border-[var(--gray)] p-5'>tow</div>
                    </div>
                </div>

            </div>

            {/* right side content */}
            <div className='flex-1  space-y-[200px]'>
                <div className='space-y-10'>
                    <h2>Check Our Packages</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptate, nostrum sequi exercitationem, illo suscipit quasi repellat, illum doloremque ipsa fugiat optio laboriosam ipsam accusamus tempore architecto impedit cum blanditiis.</p>
                    <div className='w-[70%] flex flex-row items-center justify-between'>
                        <span className='w-[30%] h-[4px] bg-[var(--black)] rounded-full'></span>
                        <span className='w-[30%] h-[4px] bg-[var(--gray)] rounded-full'></span>
                        <span className='w-[30%] h-[4px] bg-[var(--gray)] rounded-full'></span>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Button>Explore More</Button>
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