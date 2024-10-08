import instagram from './photos/instagram.png'
import linkedin from './photos/linkedin3.png'
import Image from 'next/image';

const footer = () => {
    return (
        <div className="footerAll">
            <div className="footer1">
                <h3>Copyright 2024 All rights are reserved</h3>
                <div className="footerSocial">
                    <a href="https://www.instagram.com/metinnabiyev0/" id="instagram" rel="noreferrer" target="_blank">
                    <Image 
                        src={instagram}
                        width={500}
                        height={500}
                        alt="insta"
                        priority
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/metin-nabiyev-8409a0298/" id="linkedin2" rel="noreferrer" target="_blank">
                    <Image 
                        src={linkedin}
                        width={500}
                        height={500}
                        alt="linked"
                        priority
                        />
                    </a>
                </div>
            </div>
        </div>

    );
}
 
export default footer;