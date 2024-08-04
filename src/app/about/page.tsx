"use client";
import { motion as m } from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";
import coding from '../photos/metephoto.jpeg';
import html from '../photos/htmllogo.png'
import css from '../photos/csslogo.png'
import javascript from '../photos/javascriptlogo.png'
import typescript from '../photos/tslogo.png'
import reactlogo from '../photos/reactlogo.png'
import nextlogo from '../photos/nextlogo.png'
import tailwind from '../photos/tailwindlogo.png'
import bootstrap from '../photos/bootstraplogo.png'
import csharp from '../photos/csharplogo.png'
import pythonlogo from '../photos/pythonlogo.png'
import next from "next";

export default function About() {
    const scrollRef = useRef(null);
    return (
        <div className="relative">
            <div className="aboutBack">
                <h1 className="pt-32 flex justify-center font-semibold text-3xl">My Tech Knowledge</h1>
                <m.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ root: scrollRef }}
                        transition={{ ease: "easeInOut", duration: 1.4 }}
                >
                <div className="ml-5 mr-5 pt-10 gap-6 md:gap-32 grid grid-cols-3 md:flex justify-center">
                    <span className="flex gap-2 h-12 w-12 md:h-16 md:w-16 transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <Image
                        src={html}
                        width={500}
                        height={500}
                        alt="html"
                        priority
                        />
                        <Image 
                        src={css}
                        width={500}
                        height={500}
                        alt="css"
                        priority
                        />
                    </span>
                    <span className="flex gap-2 h-12 w-12 md:h-16 md:w-16 transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <Image
                        className="rounded-[20%]"
                        src={javascript}
                        width={500}
                        height={500}
                        alt="js"
                        priority
                        />
                        <Image 
                        src={typescript}
                        width={500}
                        height={500}
                        alt="ts"
                        priority
                        />
                    </span>
                    <span className="flex gap-2 h-12 w-12 md:h-16 md:w-16 transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <Image
                        src={reactlogo}
                        width={500}
                        height={500}
                        alt="react"
                        priority
                        />
                        <Image 
                        src={nextlogo}
                        width={500}
                        height={500}
                        alt="next"
                        priority
                        />
                    </span>
                    <span className="flex gap-2 h-12 w-12 md:h-16 md:w-16 transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <Image
                        className="rounded-[20%]"
                        src={tailwind}
                        width={500}
                        height={500}
                        alt="tw"
                        priority
                        />
                        <Image 
                        src={bootstrap}
                        width={500}
                        height={500}
                        alt="bs"
                        priority
                        />
                    </span>
                    <span className="flex gap-2 h-12 w-12 md:h-16 md:w-16 transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <Image
                        src={csharp}
                        width={500}
                        height={500}
                        alt="cs"
                        priority
                        />
                        <Image 
                        src={pythonlogo}
                        width={500}
                        height={500}
                        alt="py"
                        priority
                        />
                    </span>
                </div>
                </m.div>
                <div id="about" className="pt-20 pb-12 md:ml-8 items-center justify-center flex flex-col md:flex-row text-center ">
                    <m.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ root: scrollRef }}
                        transition={{ ease: "easeInOut", duration: 1.2 }}
                    >
                        <Image
                            className="relative bg-cover w-96 h-full md:w-full md:h-full rounded-3xl md:pl-30"
                            src={coding}
                            width={500}
                            height={500}
                            alt="about"
                            priority
                        />
                    </m.div>
                    <div className="aboutText m-2">
                        <m.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ root: scrollRef }}
                            transition={{ ease: "easeInOut", duration: 1.8 }}
                        >
                            <h2>About Me</h2>
                            <h3>Metin Nabiyev based in Baku, Azerbaijan</h3>
                            <p>Hello there, its Metin Nabiyev and I&apos;m interested in web programming. I&apos;m 21 years old university student at Atatürk University.
                                <br />
                                <br />
                                My Major is Computer Science and right now I&apos;m at 4th grade.
                                I&apos;m good at React.js, Next.js, TailwindCSS and I&apos;m using all 3 of them to create this portfolio website.
                                <br />
                                I want to be able to create a website on my own from scratch. It&apos;s my first website.
                            </p>
                        </m.div>
                    </div>
                </div>
            </div>
        </div>
    );
}