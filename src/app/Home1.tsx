"use client"
import Image from 'next/image'
import metePhoto from './photos/metephoto.jpeg'
import {motion as m} from "framer-motion";

const Home = () => {

    return (
        <div style={{ overflow: "hidden" }}>
            <m.div
            initial={{y:20, opacity: 0 }}
            whileInView={{y:0 ,opacity: 1 }}
            viewport={{ once: true }}
            transition={{ease: "easeInOut", duration: 1.2}}

            >
                <div id="home" className="home">
                    <div className="hero-main">
                        <Image className="bg-[50%] bg-cover w-16 rounded-[9999px]"
                        src={metePhoto}
                        width={500}
                        height={500}
                        quality={100}
                        alt="metin"
                        priority={false}

                        />
                        <div className="hero-text">
                            <div>
                                <h1 className="font-bold text-[15px] text-[#dce8f4] mb-1">Metin Nabiyev</h1>
                                <p>Front-End developer from Baku, Azerbaijan.</p>
                            </div>
                            <span>
                                <a href="https://www.linkedin.com/in/metin-nabiyev-8409a0298/" id="linkedin" rel="noreferrer" target="_blank">
                                    <svg className="w-5 h-5 text-gray-400 hover:text-white" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="https://github.com/Metobolite" id="github" rel="noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-gray-400 hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </m.div> 
        </div>
     );
}
 
export default Home;