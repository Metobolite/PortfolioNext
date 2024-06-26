"use client"
import {motion as m} from "framer-motion";
import { useRef } from 'react';
import Image from "next/image";
import whatsapp from '../photos/whatsapp1.png'
import mail from '../photos/mail2.png'
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Contact() {
    const scrollRef = useRef(null);
    const isDesktop = useMediaQuery('(min-width:600px)');
    const variants = isDesktop ? 
    {
        initial:{
            x:-1200,
            opacity: 0 
        },
        whileInView:{
            x:0 ,
            opacity: 1 
        },
    }
    :
    {
        initial:{
            y:30,
            opacity: 0 
        },
        whileInView:{
            y:0 ,
            opacity: 1 
        },
    }

    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <m.div
            variants={variants}
            initial={variants.initial}
            whileInView={variants.whileInView}
            viewport={{ root: scrollRef }}
            transition={{ease: "easeInOut", duration: 1.2}}

            >
            <div id="contact" className="contactAll">
                <div className="contact">
                    <h3 className="text-[white]">Contact 👌</h3>
                    <br />
                    <h2 className="text-[white]">You Can Contact Me From Here</h2>
                </div>
                <div className="contactInfo">
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
                            />
                            </a>
                        </span>
                        <div className="number">
                            <h3 className="text-[white]">Business Whatsapp</h3>
                            <p className="text-[white]">+905528448322</p>
                        </div>
                    </div>
                </div>
            </div>    
            </m.div>
        </div> 
     );
}
 
