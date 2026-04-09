"use client";

import {useScroll, useTransform, motion} from "motion/react";
import React, {useEffect, useRef, useState} from "react";

export const Timeline = ({
                             data
                         }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const updateHeight = () => {
            if (!ref.current) return;
            setHeight(ref.current.getBoundingClientRect().height);
        };

        updateHeight();

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(ref.current);
        window.addEventListener("resize", updateHeight);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateHeight);
        };
    }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="c-space section-spacing"
            ref={containerRef}>

            <h2 className="max-w-[10ch] text-heading leading-none sm:max-w-none sm:leading-tight">My Work Experience</h2>
            <div ref={ref} className="relative pt-6 pb-20 sm:pt-8">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col justify-start gap-6 pt-8 first:pt-4 md:flex-row md:gap-10 md:pt-40 md:first:pt-24">
                        <div
                            className="relative z-40 flex w-full max-w-full flex-col items-start self-start md:sticky md:top-40 md:max-w-xs md:flex-row md:items-center lg:max-w-sm">
                            <div
                                className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-midnight md:-left-[15px] md:h-10 md:w-10">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2"/>
                            </div>
                            <div
                                className="hidden flex-col gap-2 pl-20 text-xl font-bold text-neutral-300 md:flex md:text-4xl">
                                <h3>{item.date}</h3>
                                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                            </div>
                        </div>

                        <div className="relative w-full pl-12 pr-0 sm:pl-14 md:pl-4">
                            <div className="mb-4 block text-left font-bold text-neutral-300 md:hidden">
                                <h3 className="text-lg leading-tight sm:text-xl">{item.date}</h3>
                                <h3 className="mt-2 text-xl leading-tight text-neutral-200 sm:text-2xl">{item.title}</h3>
                                <h3 className="mt-1 text-base leading-tight text-neutral-400 sm:text-lg">{item.job}</h3>
                            </div>
                            {item.contents.map((content, index) => (
                                <p className="mb-3 text-sm font-normal leading-6 text-neutral-400 sm:text-base" key={index}>{content}</p>
                            ))}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     sm:left-[18px] md:left-1
                     from-transparent from-[0%]  via-lavender/50 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"/>
                </div>
            </div>
        </div>
    );
};
