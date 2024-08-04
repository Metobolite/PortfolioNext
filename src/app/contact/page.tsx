"use client"
import {motion as m} from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";
import whatsapp from '../photos/whatsapp1.png'
import mail from '../photos/mail2.png'
import linkedin from '../photos/linkedin2.png'

export default function Contact() {

    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <div id="contact" className="contactAll bg-white">
                <m.div
                initial={{x:-300,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{ root: scrollRef }}
                transition={{ease: "easeInOut", duration: 1.2}}
                >
                <div className="text-center">
                    <h3 className="text-[#34485a] font-bold">Get in Touch</h3>
                    <br />
                    <h2 className="text-[#34485a] font-bold">You Can Contact Me From Here</h2>
                </div>
                <div className="mt-24 flex gap-12 md:gap-20 items-start ml-24 md:ml-0 md:items-center flex-col md:flex-row justify-center">
                    <div className="mailAll transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <span>
                            <a href="mailto:nebiyev02@hotmail.com" id="mail" rel="noreferrer" target="_blank">
                            <Image className = " flex h-[3.7rem] w-14 bg-cover [text-indent:-999px] rounded-[100%] items-center"
                            src={mail}
                            width={500}
                            height={500}
                            alt="mail icon"
                            />
                            </a>
                        </span>
                        <div className="mail">
                            <h3 className="text-[#34485a]">Personal e-Mail</h3>
                        </div>
                    </div>
                    <div className="numberAll transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <span>
                            <a href="https://wa.me/905528448322" id="whatsapp" rel="noreferrer" target="_blank">
                            <Image className ="flex items-center h-[2.8rem] w-[3.1rem] bg-cover [text-indent:-999px] "
                            src={whatsapp}
                            width={500}
                            height={500}
                            alt="whatsapp icon"
                            priority
                            />
                            </a>
                        </span>
                        <div className="number">
                            <h3 className="text-[#34485a]">WhatsApp</h3>
                        </div>
                    </div>
                    <div className="numberAll transition ease-in-out delay-150 hover:-translate-y-3 duration-300">
                        <span>
                            <a href="https://www.linkedin.com/in/metinnabiyev/" id="whatsapp" rel="noreferrer" target="_blank">
                            <Image className ="flex items-center h-[2.8rem] w-[3.1rem] bg-cover [text-indent:-999px] "
                            src={linkedin}
                            width={500}
                            height={500}
                            alt="linkedin icon"
                            priority
                            />
                            </a>
                        </span>
                        <div className="number">
                            <h3 className="text-[#34485a]">LinkedIn</h3>
                        </div>
                    </div>
                </div>
                <p className="pt-32 text-center font-bold text-xl">I currently live in Baku, Azerbaijan. You can contact me anytime. 
                    <br />
                    <br />
                    Just click on the icon you want to reach. Have a great day 😄 </p>
                </m.div>
            </div>    
        </div> 
     );
}