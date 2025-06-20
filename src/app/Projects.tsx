import Image from 'next/image';
import landing from './photos/landing.png';
import landingrgy from './photos/landingrgy.png';
import Card from './card';

const Projects = () => {
    return (
        <div>
            <div id="project" className="project">
                <div className="contents flex-col font-bold px-4 py-3 lg:py-10 lg:px-0 lg:mb-32">
                    <h1 className="text-center p-4 md:p-8 text-white">
                        Work Experience
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <Card>
                            <h2 className="text-white font-mono text-xl">
                                <a
                                    href="https://rgydigital.com/"
                                    target="_blank"
                                >
                                    Rgydigital
                                </a>
                            </h2>
                            <h3 className="text-white">FrontEnd Developer</h3>
                            <p className="text-white">05/2025 - Present</p>
                            <hr className="my-2 border-white" />
                            <p className="text-gray-200 text-left text-sm font-mono pl-6 pr-6">
                                Currently working at RGY Digital, creating the
                                landing website.
                            </p>
                            <div className="mt-8 px-6">
                                <a
                                    href="https://rgydigital.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={landingrgy}
                                        alt="Buck4Bug Preview"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </Card>
                        <Card>
                            <h2 className="text-white font-mono text-xl">
                                <a href="https://buck4bug.com/" target="_blank">
                                    Buck4Bug
                                </a>
                            </h2>
                            <h3 className="text-white">FrontEnd Developer</h3>
                            <p className="text-white">01/2025 - Present</p>
                            <hr className="my-2 border-white" />
                            <p className="text-gray-200 text-left text-sm font-mono pl-6 pr-6">
                                Developed a full marketing website for Buck4Bug,
                                including a multi-page landing experience and
                                separate dashboards for hackers and companies.
                            </p>
                            <div className="mt-8 px-6">
                                <a
                                    href="https://buck4bug.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={landing}
                                        alt="Buck4Bug Preview"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </Card>
                        <Card className="md:h-[300px]">
                            <h2 className="text-white font-mono text-xl">
                                Buyur App
                            </h2>
                            <h3 className="text-white">FrontEnd Developer</h3>
                            <p className="text-white">06/2024 - 01/2025</p>
                            <hr className="my-2 border-white" />
                            <p className="text-gray-200 text-left text-sm font-mono pl-6 pr-6">
                                Developed an Admin Panel with customized pages
                                and features for each merchant, allowing them to
                                add, edit, and delete their products in the
                                database.
                            </p>
                        </Card>
                        <Card className="md:h-[300px]">
                            <h2 className="text-white font-mono text-xl">
                                AnkaSoft
                            </h2>
                            <h3 className="text-white">
                                Software Development Unit
                            </h3>
                            <p className="text-white">01/2024 - 06/2024</p>
                            <hr className="my-2 border-white" />
                            <p className="text-gray-200 text-left text-sm font-mono pl-6 pr-6">
                                For a web app handling high user traffic (e.g.,
                                Black Friday), Virtual Machines are created and
                                scaled based on CPU usage using Azure Functions
                                triggered by Azure Event Hub, all managed via
                                Kubernetes and API Management.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
