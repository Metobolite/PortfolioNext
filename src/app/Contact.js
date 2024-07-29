"use client"
import {motion as m} from "framer-motion";
import { useRef } from 'react';
import Link from "next/link";
import meteContact from "./photos/metecontact.png"
import Image from "next/image";

const Contact = () => {
    const scrollRef = useRef(null)

    return (
        <div ref={scrollRef} style={{ overflow: "hidden"}}>
            <m.div
            initial={{y:20, opacity: 0 }}
            whileInView={{y:0 ,opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{ease: "easeInOut", duration: 1.2}}

            >
            <div id="contact" className="contactAll flex md:flex-row items-center gap-32 justify-center">
                <div className="imageMete flex justify-center w-96 h-auto">
                    <Image
                    src={meteContact}
                    width={500}
                    height={500}
                    quality={100}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="contact">
                        <h3 className="text-[white]">Contact</h3>
                        <br />
                        <h2 className="text-[white] font-bold text-3xl">You Can Contact Me From Here</h2>
                    </div>
                    <div className="contactInfo">
                        <Link href="contact" className="text-black bg-white text-center p-4 rounded-xl font-bold hover:-translate-y-1 hover:scale-110 duration-300 delay-150">Contact Page</Link>
                    </div>
                </div>
            </div>    
            </m.div>
        </div> 
     );
}
 
export default Contact;