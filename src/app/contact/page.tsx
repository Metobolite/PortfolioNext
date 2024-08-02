"use client"
import {motion as m} from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";
import whatsapp from '../photos/whatsapp1.png'
import mail from '../photos/mail2.png'


export default function Contact() {

    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <div id="contact" className="contactAll">
                <m.div
                initial={{x:-300,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{ root: scrollRef }}
                transition={{ease: "easeInOut", duration: 1.2}}

                >
                <div className="contact">
                    <h3 className="text-[white]">Contact 👌</h3>
                    <br />
                    <h2 className="text-[white]">You Can Contact Me From Here</h2>
                </div>
                <div className="moreInfo">
                    <div className="mailAll">
                        <span>
                            <a href="https://outlook.live.com/" id="mail" rel="noreferrer">
                            <Image className = " flex h-[3.7rem] w-14 bg-cover [text-indent:-999px] rounded-[100%] items-center"
                            src={mail}
                            width={500}
                            height={500}
                            alt="mail icon"
                            />

                            </a>
                        </span>
                        <div className="mail">
                        <h3 className="text-[white]">Mail</h3>
                        <p className="text-[white]">nebiyev02@hotmail.com</p>
                        </div>
                    </div>
                    <div className="numberAll">
                        <span>
                            <a href="https://web.whatsapp.com/" id="whatsapp" rel="noreferrer">
                            <Image className ="flex items-center h-[2.8rem] w-[3.1rem] bg-cover [text-indent:-999px] rounded-[100%]"
                            src={whatsapp}
                            width={500}
                            height={500}
                            alt="whatsapp icon"
                            priority
                            />
                            </a>
                        </span>
                        <div className="number">
                            <h3 className="text-[white]">Business Whatsapp</h3>
                            <p className="text-[white]">+905528448322</p>
                        </div>
                    </div>
                </div>
                </m.div>
            </div>    
        </div> 
     );
}