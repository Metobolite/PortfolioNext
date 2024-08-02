"use client";
import { motion as m } from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";
import coding from '../photos/coding2.jpg';

export default function About() { // Fonksiyon ismi büyük harfle başlamalı
    const scrollRef = useRef(null);
    return (
        <div>
            <h1 className="pt-40 items-center justify-center text-center font-bold text-xl pl-5 pr-5">
                Its pleasure to host you in my web page 😄
            </h1>
            <div id="about" className="pt-20 pb-12 md:ml-8 items-center justify-center flex flex-col md:flex-row text-center ">
                <m.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{ ease: "easeInOut", duration: 1.2 }}
                >
                    <Image
                        className="relative bg-cover w-96 h-72 md:w-full md:h-full rounded-3xl md:pl-30"
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
    );
}