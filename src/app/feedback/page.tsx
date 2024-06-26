import Image from "next/image";
import coding from '../photos/coding2.jpg'

export default function about() {
    return (
        <div>
            <h1 className="pt-40 items-center justify-center text-center font-bold text-xl">
                Its pleasure to host you in my web page 😄</h1>
            <div id="about" className="pt-20 pb-12 md:ml-8 items-center justify-center flex flex-col md:flex-row text-center md:gap-12">
                <Image className = "relative bg-cover w-96 h-72 md:w-3/6 md:h-96 rounded-3xl md:pl-30"
                src={coding}
                width={500}
                height={500}
                alt=""
                />
                <div className="aboutText m-2">
                    <h2>About Me</h2>
                    <h3>Metin Nabiyev based in Baku, Azerbaijan</h3>
                    <p>Hello there, its Metin Nabiyev and i&apos;m interested in web programming. I&apos;m 21 years old university student at Atatürk University.
                        <br />
                        <br /> 
                        My Major is Computer Science and right now i&apos;m at 4th grade.
                        I&apos;m good at React.js, Next.js, TailwindCSS and i&apos;m using all 3 of them to create this portfolio website. 
                        <br />
                        I want to be able to create a website on my own from scratch. Its my first website.
                    </p>
                </div>
            </div>
        </div>
    );
  }