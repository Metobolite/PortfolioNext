"use client"
import { useRef } from "react";
import {motion as m} from "framer-motion";


const Projects = () => {
    
    return (
        <div style={{ overflow: "hidden" }}>
            <div id="project" className="project">
                <div className="contents flex-col bg-[#34485a] pb-[50px] font-bold">
                    <m.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 1.2 }}
                    >
                        <h1 className="text-center p-8 text-white">Work Experience</h1>
                        <div className="flex md:overflow-auto w-full flex-col md:flex-row">
                            <div className="first text-center md:w-1/2 md:p-10 text-white md:border-r-2 border-white">
                                <h2 className="text-white font-mono text-xl">Buyur App</h2>
                                <h3 className="text-white">FrontEnd Developer</h3>
                                <p className="text-white">06/2024 - Present</p>
                                <hr className="my-2 border-white"/>
                                <p className="text-gray-200 text-sm font-mono pl-12 pr-12"> • Developing Admin Panel for merchants and creating
                                    different pages and features for each merchant.
                                    <br /> • Merchants push their products to database through Admin Panel. <br /> • Merchants can edit and delete their products.
                                </p>
                            </div>
                            <div className="first text-center md:w-1/2 md:p-10 pt-10 text-white border-white">
                                <h2 className="text-white font-mono text-xl">AnkaSoft</h2>
                                <h3 className="text-white">Software Development Unit</h3>
                                <p className="text-white">01/2024 - 06/2024</p>
                                <hr className="my-2 border-white"/>
                                <p className="text-gray-200 text-sm font-mono pl-12 pr-12">
                                    • Create web app and get data for web app and store it.
                                    <br />
                                    • Create Virtual Machine for web app and scale the number of Virtual
                                    Machines according to cpu usage.
                                    <br />
                                    • Using Azure Functions to scale VM.
                                    Create and manage VM from K8s.
                                    <br />
                                    • Create Azure Event Hub to trigger
                                    Functions and manage it with API Management
                                    Virtual Machine automatization.
                                    <br />
                                    • Helps web app that accepts a lot of users at once. (e.g. Black Friday)
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;