"use client"
import { useRef } from "react";
import {motion as m} from "framer-motion";


const Projects = () => {
    const scrollRef = useRef(null)
    
    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <m.div
            initial={{y:20 ,opacity: 0 }}
            whileInView={{y:0, opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{ease: "easeInOut", duration: 1.2}}
            >
                <div id = "project" className="project">
                <div className="contents">
                    <h1>Projects</h1>
                    <div className="projectQrCode">
                        <h2>Still in Development...</h2>
                    </div>
                </div>
            </div>
            </m.div>
        </div>
    );
}
 
export default Projects;