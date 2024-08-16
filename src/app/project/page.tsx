"use client"
import { useRef } from "react";
import {motion as m} from "framer-motion";


const Projects = () => {
    const scrollRef = useRef(null)
    
    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <div id = "project" className="pt-20 h-[80vh]">
                <div className="contents flex-col items-center font-bold">
                    <m.div
                    initial={{y:20 ,opacity: 0 }}
                    whileInView={{y:0, opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{ease: "easeInOut", duration: 1.2}}
                    >
                        <h1 className="text-center pt-28 text-black">Projects</h1>
                        <div className="text-center pb-28">
                            <h2 className="text-black pt-10">In Progress...</h2>
                            <h2 className="pt-6 text-black">I did many projects. I will update by adding new ones.</h2>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;