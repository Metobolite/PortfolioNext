"use client"; 

import { useState } from 'react';
import Link from 'next/link';



const Navbar = () => {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 100){
            setFix(true)
        } else {
            setFix(false)
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    window.addEventListener("scroll",setFixed)
    const goTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
    });
};

    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="navbar1">
                <div className="links">
                    <button className={isOpen ? 'hidden' : 'flex'}><h1 onClick={goTop}>Metin Nabiyev</h1></button>
                    <ul>
                        <Link href="/">Home</Link>
                        <Link href="/project">Projects</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href ="/feedback" className="rounded-[20%] text-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">Feedbacks</Link>
                    </ul>
                    <button onClick={handleClick}
                        className={`flex flex-col justify-center items-center md:hidden ${isOpen ? 
                                        'hidden' : 'flex'
                                        }`}>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 
                                        'opacity-0' : '-translate-y-0.5'
                                        }`} >
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                        'opacity-0' : 'opacity-100'
                                        }`} >
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 
                                        'opacity-0' : 'translate-y-0.5'
                                        }`} >
                        </span>
                    </button>
                    <div className={isOpen ? 'mobile-nav-open' : 'mobile-nav-close'}>
                        <div className="buttonMobile">
                            <button onClick={handleClick}
                            className={`flex flex-col justify-center items-center md:hidden ${isOpen ? 
                                'flex' : 'hidden'
                                }`}
                                >
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                                    'rotate-45 translate-y-1' : 'opacity-0'
                                                    }`} >
                                    </span>
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                                    'opacity-0' : 'opacity-0'
                                                    }`} >
                                    </span>
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                                    '-rotate-45 -translate-y-1' : 'opacity-0'
                                                    }`} >
                                    </span>
                                </button>
                        </div>
                            <li className="flex">
                                <Link href="/">Home</Link>
                                <Link href="/project">Projects</Link>
                                <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link>
                                <Link href ="/feedback" className="rounded-[10%] text-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">Feedbacks</Link>
                            </li>
                    </div>
                </div>
            </div>
        </nav>

    );
}
 
export default Navbar;