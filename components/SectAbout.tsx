import Image from 'next/image'
import Ghammadi from '../assets/Anass-ghammadi.jpg'
import { useState } from 'react';
import Menu from './menu/Menu'
import MenuMobile from './menu/Menu_mobile'
import Waves from'./Waves';


function SectAbout ()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="">
            <div className="z-0"><Waves /></div>
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:items-start lg:justify-center lg:space-x-36 lg:pt-16 lg:space-y-0">
                    <div className="w-60 lg:w-[400px]  ">
                        <Image className="rounded-full outline outline-4 outline-blue-300 outline-offset-4 " src={Ghammadi} alt="anass ghammadi" />
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-5 lg:items-start">
                        <div>
                            <h1 className="text-white font-bold text-xl md:text-3xl ">WEBMETHODS analyst developer</h1>
                        </div>
                        <div>
                            <p className=" font-normal text-sm text-center w-80 md:text-base text-white lg:text-left lg:w-[560px]">Hello! I’m <span className=" text-blue-600 font-bold">Anass Ghammadi.</span>
                                <br /> A passionate computer engineer with 1 year of experience in webmethods application development. 
                                Skilled in using webmethods tools, 
                                <span className=" text-blue-600 font-bold"> web services, flow services, messaging services, integration services 
                                </span> I aim to make a difference through my creative solution.
                             </p>
                        </div>
                        <div className="text-white space-y-2 font-semibold">
                            <p><span className=" font-bold text-gray-500">Age &nbsp;:</span> 26</p>
                            <p><span className=" font-bold text-gray-500">Email &nbsp;:</span> anassghammadi@gmail.com</p>
                            <p><span className=" font-bold text-gray-500">Phone &nbsp;:</span> +212 6&nbsp;63&nbsp;39&nbsp;76&nbsp;43</p>
                            <p><span className=" font-bold text-gray-500">Freelance &nbsp;:</span> Available</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl font-bold z-50">
                            <a href="#"><button type="submit"/>DOWNLOAD CV</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center  space-y-4  lg:items-start lg:pt-16  p-10 lg:p-2 max-w-5xl mx-auto w-full ">
                    <div className="flex flex-col space-y-8 ">
                        <div className=''>
                            <h1 className=" font-bold text-3xl md:text-3xl text-blue-600  ">Professional experience</h1>
                            
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-1'>
                                <h2 className=" font-bold md:text-xl text-blue-300  ">WEBMETHODS analyst developer at Atos</h2>
                                <h3 className=" font-semibold text-white"><span className=' bg-blue-50 p-[4px] m-2 rounded-full text-[1px] align-middle'></span>Internship | June 2022 - november 2022</h3>
                                <h3 className=" font-semibold text-white"><span className=' bg-blue-50 p-[4px] m-2 rounded-full text-[1px] align-middle'></span>full time | December 2022</h3>
                                <p className=" text-white">
                                &nbsp;&nbsp;<span className=' bg-blue-300 p-[4px] m-2  text-[1px] align-middle'></span>Conception et développement de services (ESB / SOA) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; - Développement de flow Services <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; - Développement de Services Java <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; - Développement de service Adapter pour les accès base de données <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; - Développement de Web Service (REST et SOAP) <br />
                                
                                </p>
                            </div>  
                            <div>
                                <p className=" text-white font-semibold"><span className="font-bold text-lg text-blue-600 ">Skills :</span> WEBMETHODS-JAVA-WEBSERVICE</p>
                            </div>  
                        </div>    
                    </div>
                </div>
                
                <div className="flex items-center justify-center space-y-4  lg:justify-center lg:pt-16  p-10 lg:p-2 max-w-5xl mx-auto w-full">
                    <div className="flex flex-col space-y-8 ">
                        <div className=''>
                            <h1 className=" font-bold text-3xl md:text-3xl text-blue-600  ">About me</h1>
                        </div>
                        <div className=''>
                            <p className="text-white ">
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span> I am an experienced webmethods developer analyst, with a solid background in designing, implementing and maintaining web systems. <br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I am proficient in using webmethods technologies such as web services, data flows, messaging services, integration services and process management services. <br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I have a good understanding of web protocols such as SOAP and REST, as well as web security standards such as OAuth and SAML. <br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I am experienced in setting up efficient development processes using webmethods tools such as webmethods Developer, webmethods Integration Server and webmethods IS.<br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I am able to establish efficient development processes using project management and bug tracking tools.<br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I work closely with development, testing, and deployment teams to ensure that the applications meet user requirements and function reliably and efficiently.<br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I am passionate about technology and always looking for new opportunities to learn and improve my skills.<br />
                                <span className=' bg-blue-300 p-[4px] m-2 rounded-full text-[1px] align-middle'>.</span>I am able to communicate effectively with team members, clients, and end-users.
                            </p>
                        </div>    
                    </div>
                </div>
               
                <div className="z-0"><Waves /></div>
            </div>     
        </>
    )
}

export default  SectAbout

