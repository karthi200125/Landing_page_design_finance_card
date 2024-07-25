import { IoIosArrowRoundForward } from 'react-icons/io'
import logo from '../../public/logo.png'
import SparklesText from '../animations/SparkleText'
import AvatarCircles from './AvatarCircles'
import Navbar from './Navbar'
import RoundeBtn from './RoundeBtn'
import Magnete from '../animations/Magnet'
import Button from './Button'
import TextAnimation from '../animations/TextAnimation'

const Hero = () => {

    return (
        <section className='h-screen flex items-center justify-center p-2 sm:p-5'>
            <div className='relative h-full w-full bg-[var(--gray)] p-2 sm:p-5 overflow-hidden sm:rounded-[30px]'>

                {/* hero backgroun vdeio */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className="relative w-full h-full lg:h-0 lg:pb-[56.25%]" >
                        <div className="absolute top-0 left-0 w-full h-full">
                            <video
                                src={"https://res.cloudinary.com/duextvtta/video/upload/v1721810368/bg_lr4ars.mp4"}
                                className="w-full h-full object-cover bg-black brightness-50"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>

                </div>

                {/* top custom */}
                <div className='absolute left-1/2 transform -translate-x-1/2 top-0 z-[2]'>
                    <div className='relative bg-white'>
                        <div className='herotop max-w-max h-[60px] flex items-center justify-center'>
                            <div className='flex flex-row items-center gap-5 xl:gap-10 w-full'>
                                <span className='md:w-[50px] xl:w-[150px] h-[1px] bg-black rounded-full'></span>
                                <h2 className='text-xl sm:text-3xl'><TextAnimation text="CAPO" /></h2>
                                <span className='md:w-[50px] xl:w-[150px] h-[1px] bg-black rounded-full'></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom custom */}
                <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 rotate-180 z-[2]'>
                    <div className='relative bg-white'>
                        <div className='herobottom w-[100px] lg:w-[250px] px-5 h-[60px] flex items-center justify-center'>
                            <Magnete>
                                <div className='rotate-180 custom-cursor-target rounded-full cursor-pointer'>
                                    <img src={logo.src} alt="" className=' w-[60px] h-[60px] object-contain' />
                                </div>
                            </Magnete>
                        </div>
                    </div>
                </div>

                {/* navbar */}
                <Navbar />

                {/* custom color */}
                <div className='hidden md:flex flex-col gap-5 absolute bottom-0 mb-[20px] right-5'>
                    <div className='hidden lg:flex glass w-[150px] xl:w-[200px] h-[100px] lg:h-[100px] xl:h-[120px] rounded-[30px] p-5 justify-between flex-col text-white'>
                        <div className='space-y-1 lg:space-y-3'>
                            <h3><TextAnimation text='Material' /></h3>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='w-10 h-10 rounded-full bg-[var(--black)]'></div>
                            <div className='w-10 h-10 rounded-full bg-[var(--white)] '></div>
                            <div className='w-10 h-10 rounded-full bg-[var(--white)] '></div>
                            <div className='w-10 h-10 rounded-full bg-[var(--white)]'></div>
                        </div>
                    </div>
                    <div className='hidden md:flex glass w-[200px] xl:w-[250px] h-[180px] lg:h-[200px] xl:h-[250px] rounded-[30px] p-5 justify-between flex-col text-white'>
                        <div className='space-y-1 lg:space-y-3'>
                            <h3><TextAnimation text='Color' /></h3>
                            <h4><TextAnimation text='You can Custom color of you cards' /></h4>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='w-10 h-10 rounded-full bg-[var(--green)]'></div>
                            <div className='w-10 h-10 rounded-full bg-violet-600'></div>
                            <div className='w-10 h-10 rounded-full bg-red-400'></div>

                            <RoundeBtn icon={<IoIosArrowRoundForward size={20} className='-rotate-45' />} className='border' />
                        </div>
                    </div>
                </div>

                {/* main text center */}
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <div className='max-w-max  text-white text-center'>
                        <h2 className='text-3xl sm:text-5xl'>
                            <TextAnimation text="Streamlining Your" />
                        </h2>
                        <h2 className='text-3xl sm:text-5xl'>
                            <TextAnimation text="Financial Journy" />
                        </h2>
                        <h2 className='text-3xl sm:text-5xl'> <TextAnimation text="Online" /></h2>
                        <div className='md:hidden mx-auto max-w-max mt-5'>
                            <Button >Order Copa</Button>
                        </div>
                    </div>
                </div>

                {/* bottom left content */}
                <div className='hidden md:block absolute bottom-5 left-10'>
                    <div className='relative w-[300px] h-[120px] lg:h-[150px]'>
                        <div className='absolute left-0 top-0 max-w-max bg-black flex flex-row items-center gap-1 p-2 lg:p-5' style={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px' }}>
                            <AvatarCircles />
                        </div>
                        <div className='absolute bottom-0 left-3 lg:right-0 w-[200px] lg:w-[250px] bg-black flex flex-row items-center justify-center gap-5 lg:gap-10 text-white p-2 lg:p-5' style={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                            <h3>+57K</h3>
                            <p>people order copa cards</p>
                        </div>
                        <div className='hidden lg:flex absolute top-0 right-0 flex-row items-center gap-3 h-[60px] justify-center text-white'>
                            <h4 >read more</h4>
                            <IoIosArrowRoundForward size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero