'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isHovered && hoveredElement) {
                const rect = hoveredElement.getBoundingClientRect();
                gsap.to(cursorRef.current, {
                    duration: 1,
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    ease: 'power3.out'
                });
            } else {
                gsap.to(cursorRef.current, {
                    duration: 1,
                    x: event.clientX,
                    y: event.clientY,
                    ease: 'power3.out'
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered, hoveredElement]);

    useEffect(() => {
        const handleMouseEnter = (event) => {
            if (event.target.classList.contains('custom-cursor-target')) {
                setIsHovered(true);
                setHoveredElement(event.target);
                event.target.style.backgroundColor = '#dbff52';
                event.target.style.color = 'black';
                event.target.style.border = 'none';
            }
        };

        const handleMouseLeave = (event) => {
            if (event.target.classList.contains('custom-cursor-target')) {
                setIsHovered(false);
                setHoveredElement(null);
                event.target.style.backgroundColor = '';
                event.target.style.color = '';
                event.target.style.border = ''
            }
        };

        document.querySelectorAll('.custom-cursor-target').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.querySelectorAll('.custom-cursor-target').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovered ? 'custom-cursor-hovered' : ''}`}
            ref={cursorRef}
        ></div>
    );
};

export default CustomCursor;
