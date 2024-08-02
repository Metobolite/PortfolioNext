"use client"; 

import { useState, useEffect } from 'react';
import { Link } from 'next-view-transitions';
import { TransitionLink } from "../components/utils/TransitionLink";

const Navbar = () => {
    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY > 100) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.body.classList.remove('mobile-nav-open-active');
        } else{
            document.body.classList.add('mobile-nav-open-active');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", setFixed);
        return () => window.removeEventListener("scroll", setFixed);
    }, []);

    const goTop = () => {
        if (window.location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/';
        }
    };

    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="navbar1">
                <div className="links">
                    <button onClick={goTop} className={isOpen ? 'hidden' : 'flex'}><h1>Metin Nabiyev</h1></button>
                    <ul>
                        <Link href="/">Home</Link>
                        <Link href="/project">Projects</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <TransitionLink href="/feedback" className="rounded-xl text-xl transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 ...">Feedbacks</TransitionLink>
                    </ul>
                    <button onClick={handleClick}
                        className={`flex flex-col justify-center items-center md:hidden ${isOpen ? 'hidden' : 'flex'}`}>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : '-translate-y-0.5'}`} >
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'translate-y-0.5'}`} >
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
                                <Link href="/" onClick={handleClick}>Home</Link>
                                <Link href="/project" onClick={handleClick}>Projects</Link>
                                <Link href="/about" onClick={handleClick}>About</Link>
                                <Link href="/contact" onClick={handleClick}>Contact</Link>
                                <Link href ="/feedback" className="rounded-xl text-xl transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 ..." onClick={handleClick}>Feedbacks</Link>
                            </li>
                        </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;