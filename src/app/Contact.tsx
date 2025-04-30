"use client"
import {motion as m} from "framer-motion";
import { useRef } from 'react';
import Link from "next/link";
import meteContact from "./photos/metecontact7.png"
import Image from "next/image";

const Contact = () => {

    return (
        <div style={{ overflow: "hidden"}}>
            <div className="flex flex-col mt-[150px] md:h-[60vh] md:pt-24 pb-32 md:pl-32 text-[1.1rem] md:flex-row items-center gap-32 justify-center bg-[#34485a]">
                <m.div
                initial={{y:20, opacity: 0 }}
                whileInView={{y:0 ,opacity: 1 }}
                viewport={{ once: true }}
                transition={{ease: "easeInOut", duration: 1.2}}
                >
                    <div className="flex md:flex-row flex-col items-center md:gap-32">
                        <div className="imageMete flex justify-center w-96 h-auto mb-20 md:mb-0">
                            <Image
                            src={meteContact}
                            width={500}
                            height={500}
                            quality={100}
                            alt="mete"
                            priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="contact">
                                <h3 className="text-[white] font-bold">Contact</h3>
                                <br />
                                <h2 className="text-[white] font-bold text-3xl">You Can Contact Me From Here</h2>
                            </div>
                            <div className="moreInfo">
                                <Link href="contact" className="text-black bg-white text-center p-4 rounded-xl font-bold hover:-translate-y-1 hover:scale-110 duration-300 delay-150">Contact Page</Link>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>    
        </div> 
     );
}
 
export default Contact;