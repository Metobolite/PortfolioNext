import Link from 'next/link';
import Copied from './copied';

export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 my-12 lg:my-0 lg:px-0 text-[#cbd6e1]">
            <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Get in Touch
                        </h1>
                        <p className="mb-10 text-gray-400">
                            Do you have any idea or a project in mind? <br />
                            Feel free to reach out via email, phone, or connect
                            with me through social media.
                        </p>
                    </div>
                    <div className="button-home mb-10 lg:mb-0">
                        <Link href="/" rel="noreferrer">
                            <button className="contact-button w-full text-[14px] whitespace-nowrap rounded-sm p-2 text-[#cbd6e1] bg-gray-800 hover:bg-gray-700 hover:text-white transition ease-in-out duration-300">
                                <i className="fa-solid fa-house"></i> &nbsp;Home
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold">Email</h2>
                            <div className="flex items-center space-x-3">
                                <p className="text-gray-300">
                                    nebiyev02@hotmail.com
                                </p>
                                <Copied />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Phone</h2>
                            <p className="text-gray-300">
                                <a
                                    href="https://wa.me/4915510957784"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    +49 155 109 577 84
                                </a>
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Location</h2>
                            <p className="text-gray-300">Dresden, Germany</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold mb-2">
                                Connect
                            </h2>
                            <div className="flex space-x-5 text-2xl">
                                <a
                                    href="https://github.com/Metobolite"
                                    className="text-gray-400 hover:text-white transition ease-in-out duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/metinnabiyev/"
                                    className="text-gray-400 hover:text-white transition ease-in-out duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="mailto:nebiyev02@hotmail.com"
                                    className="text-gray-400 hover:text-white transition ease-in-out duration-300"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-10">
                            Or DM me on any platform above.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
