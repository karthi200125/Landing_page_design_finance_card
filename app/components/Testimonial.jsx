'use client';
import React, { useState } from 'react';
import RoundeBtn from './RoundeBtn';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import star from '../../public/star.png';
import profile1 from '../../public/profile1.webp';
import profile2 from '../../public/profile2.webp';
import profile3 from '../../public/profile3.webp';
import profile4 from '../../public/profile4.webp';
import TextAnimation from '../animations/TextAnimation';

const Testimonial = () => {
    const [hoveredCard, setHoveredCard] = useState(0);

    const testimonialdata = [
        {
            id: 0,
            name: 'username',
            img: profile1.src,
            date: '20/05/2001',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores quibusdam odio esse autem dolorum.',
        },
        {
            id: 1,
            name: 'username',
            img: profile2.src,
            date: '20/05/2001',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores quibusdam odio esse autem dolorum.',
        },
        {
            id: 2,
            name: 'username',
            img: profile3.src,
            date: '20/05/2001',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores quibusdam odio esse autem dolorum.',
        },
        {
            id: 3,
            name: 'username',
            img: profile4.src,
            date: '20/05/2001',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores quibusdam odio esse autem dolorum.',
        },
    ];

    return (
        <section className='min-h-[600px] flex flex-col justify-center gap-10 items-center overflow-hidden'>
            <h2><TextAnimation text='What People Tell Us About?' /></h2>
            <p><TextAnimation text='We have 12K feedback from our customer' /></p>

            <div className={`w-full flex flex-col md:flex-row items-center justify-start gap-5`}>
                {testimonialdata?.map((data, index) => (
                    <div
                        key={data?.id}
                        className={`transition-all duration-500 ease-in-out h-[250px] md:h-[400px] xl:h-[450px] ${hoveredCard === index ? "bg-black" : "bg-[var(--gray)]"} hover:bg-black cursor-pointer rounded-[30px] p-5 relative group overflow-hidden ${hoveredCard === index ? 'w-full md:w-[450px] lg:w-[600px] z-10' : 'w-full md:w-[250px] lg:w-[330px]'
                            }`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(index)}
                        style={{
                            transform:
                                hoveredCard === index
                                    ? index === 0
                                        ? 'translateX(0px)'
                                        : index === testimonialdata.length - 1
                                            ? 'translateX(-0px)'
                                            : ''
                                    : '',
                        }}
                    >
                        {/* img container */}
                        <div
                            className={`absolute top-3 left-3 transition-all duration-500 ease-in-out rounded-[20px] overflow-hidden flex flex-col justify-between gap-3 ${hoveredCard === index ? 'w-[100px] md:w-[50%] h-[100px] md:h-[380px] xl:h-[430px]' : 'w-[100px] h-[100px]'
                                }`}
                        >
                            <img
                                src={data?.img}
                                alt=''
                                className={`w-full object-cover rounded-[20px] ${hoveredCard === index ? 'h-[85%]' : 'h-full'
                                    }`}
                            />
                            {hoveredCard === index && (
                                <div className='hidden sm:flex h-[50px] text-md font-semibold rounded-full px-5 bg-white w-full flex-row items-center justify-between'>
                                    {data?.name}
                                    <div>*</div>
                                </div>
                            )}
                        </div>

                        {/* top right date */}
                        <div className={`${hoveredCard === index ? "flex md:hidden lg:flex" : "flex md:hidden xl:flex"} absolute top-3 right-3 px-5 h-[40px] items-center justify-center rounded-full bg-white max-w-max font-semibold text-sm`}>
                            {data?.date}
                        </div>

                        {/* card content */}
                        <div
                            className={`absolute bottom-3 transition-all duration-500 ease-in-out h-[50%] rounded-[20px] ${hoveredCard === index ? 'w-[280px] md:right-3 md:w-[45%] pl-5' : 'left-3 w-[275px]'
                                }`}
                        >
                            <img src={star.src} alt='' className='w-[70px] h-[70px] object-contain' />
                            <h4 className='line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5 text-neutral-500'>{`"${data?.feedback}"`}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-row items-center'>
                <RoundeBtn icon={<IoIosArrowRoundBack size={25} />} />
                <RoundeBtn icon={<IoIosArrowRoundForward size={25} />} className='bg-[var(--green)]' />
            </div>
        </section>
    );
};

export default Testimonial;
