'use client'

import React, { useState } from 'react';
import Magnete from '../animations/Magnet';

const Menu = ({ onMenu }) => {
    const [menuOpen, setMenuOpen] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        onMenu(!menuOpen)
    };

    return (
        <div
            className={`custom-cursor-target rounded-full p-2 overflow-hidden w-full relative cursor-pointer max-h-max z-[99] transition duration-500 ease-in-out hover:stroke-black ${menuOpen ? 'stroke-black' : 'stroke-white'}`}
            onClick={toggleMenu}
        >
            <Magnete>
                <svg width=" 48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g className={`transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
                        <line
                            x1="0"
                            y1="17"
                            x2="48"
                            y2="17"
                            strokeWidth="1"
                            className="transition-transform  duration-500 ease-in-out"
                            style={{ transform: menuOpen ? 'translateY(7px)' : 'translateY(0px)' }}
                        />
                        <line
                            x1="0"
                            y1="31"
                            x2="48"
                            y2="31"
                            strokeWidth="1"
                            className="transition-transform  duration-500 ease-in-out"
                            style={{ transform: menuOpen ? 'translateY(-7px)' : 'translateY(0px)' }}
                        />
                    </g>

                    <g className={`transition-opacity duration-0 delay-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <line
                            x1="0"
                            y1="24"
                            x2="48"
                            y2="24"
                            strokeWidth="1"
                            className="transition-transform duration-500 ease-in-out"
                            style={{ transform: menuOpen ? 'rotate(45deg)' : 'rotate(0deg)', transformOrigin: 'center' }}
                        />
                        <line
                            x1="0"
                            y1="24"
                            x2="48"
                            y2="24"
                            strokeWidth="1"
                            className="transition-transform duration-500 ease-in-out"
                            style={{ transform: menuOpen ? 'rotate(-45deg)' : 'rotate(0deg)', transformOrigin: 'center' }}
                        />
                    </g>
                </svg>
            </Magnete>
        </div>
    );
};

export default Menu;
