"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TextAnimation({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
}) {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className="flex flex-wrap justify-center" ref={ref}>
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.h1
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className={"drop-shadow-sm " + (className || "")}
                        style={{ display: 'inline-block' }}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    );
}
