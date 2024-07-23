import Image from 'next/image'
import React from 'react'
import dell from '../../public/dell.webp'
import upwork from '../../public/upwork.webp'
import petal from '../../public/petal.webp'
import vice from '../../public/vice.webp'
import rakuten from '../../public/rakuten.webp'

const Brands = () => {
    return (
        <section className='min-h-[400px] flex items-center justify-center flex-col '>

            <div className='flex flex-col gap-5 items-center'>
                {/* avatars */}
                <div className='mr-[200px] flex flex-row items-center gap-2 bg-[var(--gray)] py-3 rounded-xl px-5 max-w-max'>
                    <Image src='' alt='' className='w-12 h-12 rounded-full bg-black object-cover' />
                    <Image src='' alt='' className='w-12 h-12 rounded-full bg-black object-cover' />
                    <Image src='' alt='' className='w-12 h-12 rounded-full bg-black object-cover' />
                    <Image src='' alt='' className='w-12 h-12 rounded-full bg-black object-cover' />
                </div>

                {/* texts */}
                <div className='space-y-10 text-center'>
                    <h2>Join +57k People Who Trust</h2>
                    <div className='flex flex-row items-start gap-[100px]'>
                        <h2>Us With Using</h2>
                        <div>design</div>
                        <h2>Copo Card</h2>
                    </div>
                </div>
            </div>            

            {/* brand logos */}
            <div className='relative mt-[150px] w-full bg-[var(--black)] rounded-[30px] h-[150px] flex items-center justify-between px-20 overflow-hidden'>
                <div
                    className="absolute left-[35%] top-0 bg-white w-[100px] h-[50px] rotate-180"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>

                <img src={dell.src} alt='' className='w-[100px] h-[40px] object-contain' />
                <img src={upwork.src} alt='' className='w-[120px] h-[60px] object-contain' />
                <img src={vice.src} alt='' className='w-[100px] h-[40px] object-contain' />
                <img src={petal.src} alt='' className='w-[120px] h-[60px] object-contain' />
                <img src={rakuten.src} alt='' className='w-[120px] h-[60px] object-contain' />
            </div>
        </section>
    )
}

export default Brands