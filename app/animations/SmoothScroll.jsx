'use client'

import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        let scroll;

        import('locomotive-scroll').then((LocomotiveScroll) => {
            scroll = new LocomotiveScroll.default({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
            });
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <main className="absolute lg:fixed left-0 top-0 w-full max-h-max" data-scroll-container>
            <div>
                {children}
            </div>
        </main>

    );
};

export default SmoothScroll;