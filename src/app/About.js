import Image from "next/image";
import coding from './photos/coding.jpg'
const About = () => {
    return (
        <div id="about" className="aboutAll">
            <Image className = "relative bg-cover w-80 h-72 md:w-3/6 md:h-96 rounded-3xl md:pl-30"
            src={coding}
            width={300}
            height={300}
            />
            {/* <div className="aboutFoto">
            </div> */}
            <div className="aboutText">
                <h2>About Me</h2>
                <h3>Metin Nabiyev based in Baku, Azerbaijan</h3>
                <p>Hello there, its Metin Nabiyev and i'm interested in web programming. I'm 21 years old university student at Atatürk University.
                    <br />
                    <br /> 
                    My Major is Computer Science and right now i'm at 4th grade.
                    I'm good at React.js and i'm using react to create this portfolio website. 
                </p>
            </div>
        </div>
     );
}
 
export default About;