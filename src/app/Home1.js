import Image from 'next/image'
import metePhoto from './photos/photome.jpg'
import linkedin from './photos/linkedin2.png'
import github from './photos/github.png'
const Home = () => {
    return (
        <div id="home" className="home">
            <div className="hero-main">
                <Image className="bg-[50%] bg-cover h-[23rem] w-80 border-[3px] border-[solid] border-[black] rounded-[100%]"
                src={metePhoto}
                width={500}
                height={500}
                alt=""

                />
                <div className="hero-text">
                    <h1>Web Developer</h1>
                    <p>Hi. Its Metin Nabiyev. Front-End developer from Baku, Azerbaijan.</p>
                    <span>
                        <a href="https://www.linkedin.com/in/metin-nabiyev-8409a0298/" alt="linkedin link" id="linkedin" rel="noreferrer" target="_blank">
                        <Image 
                        src={linkedin}
                        width={500}
                        height={500}
                        alt=""

                        />
                        </a>
                        <a href="https://github.com/Metobolite" alt="github link" id="github" rel="noreferrer" target="_blank"><Image 
                        src={github}
                        width={500}
                        height={500}
                        alt=""

                        />
                        </a>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Home;