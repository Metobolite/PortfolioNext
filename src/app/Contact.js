import Image from "next/image";
import whatsapp from './photos/whatsapp1.png'
import mail from './photos/mail2.png'
const Contact = () => {
    return (
        <div id="contact" className="contactAll">
            <div className="contact">
                <h3 className="text-[white]">Contact 👌</h3>
                <br />
                <h2 className="text-[white]">You Can Contact Me From Here</h2>
            </div>
            <div className="contactInfo">
                <div className="mailAll">
                    <span>
                        <a href="https://outlook.live.com/" alt="mail icon" id="mail" rel="noreferrer">
                        <Image className = " flex h-[3.7rem] w-14 bg-cover [text-indent:-999px] rounded-[100%] items-center"
                        src={mail}
                        width={500}
                        height={500}
                        alt=""
                        />

                        </a>
                    </span>
                    <div className="mail">
                       <h3 className="text-[white]">Mail</h3>
                       <p className="text-[white]">nebiyev02@hotmail.com</p>
                    </div>
                </div>
                <div className="numberAll">
                    <span>
                        <a href="https://web.whatsapp.com/" alt="whatsapp icon" id="whatsapp" rel="noreferrer">
                        <Image className ="flex items-center h-[2.8rem] w-[3.1rem] bg-cover [text-indent:-999px] rounded-[100%]"
                        src={whatsapp}
                        width={500}
                        height={500}
                        alt=""

                        />
                        </a>
                    </span>
                    <div className="number">
                        <h3 className="text-[white]">Business Whatsapp</h3>
                        <p className="text-[white]">+905528448322</p>
                    </div>
                </div>
            </div>
        </div>    
     );
}
 
export default Contact;