"use client"
import {motion as m} from "framer-motion";
import Image from "next/image";
import coding from './photos/coding.jpg'
import Link from "next/link";
import { useRef } from "react";

const About = () => {

    const scrollRef = useRef(null)


    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <div id="about" className="aboutAll">
                <Image className = "relative bg-cover w-80 h-72 md:w-3/6 md:h-96 rounded-3xl ml-6"
                src={coding}
                quality={100}
                width={500}
                height={500}
                alt="about"
                priority
                />
                <m.div
                initial={{y:20 ,opacity: 0 }}
                whileInView={{y:0, opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ease: "easeInOut", duration: 1.2}}
                >
                    <div className="aboutText">
                        <h2>About Me</h2>
                        <h3>Metin Nabiyev based in Baku, Azerbaijan</h3>
                        <p>Hello there, its Metin Nabiyev and i&apos;m interested in web programming. I&apos;m 21 years old university student at Atatürk University.
                            <br />
                            <br /> 
                            My Major is Computer Science and right now i&apos;m at 4th grade.
                            I&apos;m good at React.js and i&apos;m using react to create this portfolio website. 
                        </p>
                        <div className="moreInfo">
                                <Link href="about" className="text-white bg-[#2A3132] text-center p-4 rounded-xl font-bold hover:-translate-y-1 hover:scale-110 duration-300 delay-150">Contact Page</Link>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>
     );
}
 
export default About;