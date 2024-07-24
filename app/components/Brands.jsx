import Image from 'next/image'
import React from 'react'
import dell from '../../public/dell.webp'
import upwork from '../../public/upwork.webp'
import petal from '../../public/petal.webp'
import vice from '../../public/vice.webp'
import rakuten from '../../public/rakuten.webp'
import logo from '../../public/logo.png'
import profile1 from '../../public/profile1.webp'
import profile2 from '../../public/profile2.webp'
import profile3 from '../../public/profile3.webp'
import profile4 from '../../public/profile4.webp'
import AvatarCircles from './AvatarCircles'


const Brands = () => {
    return (
        <section className='min-h-[400px] flex items-center justify-center flex-col '>

            <div className='flex flex-col gap-5 items-center'>
                {/* avatars */}
                <div className='lg:mr-[200px] flex flex-row items-center gap-2 bg-[var(--gray)] py-3 rounded-xl px-5 max-w-max'>
                    <AvatarCircles />
                </div>

                {/* texts */}
                <div className='space-y-10 text-center'>
                    <h2>
                        Join +57k People Who Trust
                        {/* <SparklesText
                                text="Streamlining Your"
                                colors={{ first: "#FF5733", second: "white" }}
                                className="w-full"
                                sparklesCount={5}
                            /> */}
                    </h2>
                    <div className='flex flex-row items-start'>
                        <h2>Us With Using</h2>
                        <div
                            className='relative w-[250px] h-[200px] rounded-[30px] bg-[var(--gray)] mt-[80px] mx-[-80px] md:mx-[-20px]'>
                            <div className='absolute top-[-80px] w-[60px] md:w-[100px] h-[60px] md:h-[100px] left-1/2 transform -translate-x-1/2 bg-[var(--gray)] rounded-[30px] flex items-center justify-center'>
                                <img src={logo.src} alt="" className='w-16 h-16 object-contain' />
                            </div>
                            <div className='flex flex-row items-center gap-5 justify-center mt-[30px]'>
                                <div className='h-[170px] w-[140px] rounded-lg bg-[var(--black)] text-white'>
                                    visa
                                </div>
                                <div className='space-y-2'>
                                    <div className='w-7 h-7 rounded-full bg-yellow-500'></div>
                                    <div className='w-7 h-7 rounded-full bg-violet-600'></div>
                                    <div className='w-7 h-7 rounded-full bg-red-300'></div>
                                    <div className='w-7 h-7 rounded-full bg-sky-400'></div>
                                </div>
                            </div>
                        </div>
                        <h2>Copo Card</h2>
                    </div>
                </div>
            </div>

            {/* brand logos */}
            <div className='mt-[50px] md:mt-[100px] w-full bg-[var(--black)] rounded-[30px] max-h-max sm:h-[150px] flex items-center justify-between px-5 md:px-10 lg:px-20'>
                {/* <div
                    className="absolute left-[35%] top-0 bg-white w-[100px] h-[50px] rotate-180"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div> */}
                <img src={dell.src} alt='' className='w-[50px] md:w-[100px] h-[40px] object-contain' />
                <img src={upwork.src} alt='' className=' w-[50px] md:w-[120px] h-[60px] object-contain' />
                <img src={vice.src} alt='' className='w-[50px] md:w-[100px] h-[40px] object-contain' />
                <img src={petal.src} alt='' className='w-[50px] md:w-[120px] h-[60px] object-contain' />
                <img src={rakuten.src} alt='' className='w-[50px] md:w-[120px] h-[60px] object-contain' />
            </div>
        </section>
    )
}

export default Brands