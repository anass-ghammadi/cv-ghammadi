import Image from 'next/image'
import Ghammadi from '../assets/Anass-ghammadi.jpg'
import { useState } from 'react';
import Menu from './menu/Menu'
import MenuMobile from './menu/Menu_mobile'



function SectAbout ()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="">
                
                <Menu toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:items-start lg:justify-center lg:space-x-36 lg:pt-16 lg:space-y-0">
                    <div className="w-60 lg:w-96">
                        <Image className="rounded-full outline outline-4 outline-blue-300 outline-offset-4 " src={Ghammadi} alt="anass ghammadi" />
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-5 lg:items-start">
                        <div>
                            <h1 className="text-white font-bold text-xl md:text-3xl ">Web Designer & Developer</h1>
                        </div>
                        <div>
                            <p className=" font-normal text-sm text-center w-80 md:text-base text-white lg:text-left lg:w-[560px]">Hello! I’m <span className=" text-blue-600 font-bold">Anass Ghammadi.</span> Web Developer with over 4 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced<span className=" text-blue-600 font-bold"> HTML5, CSS3, JavaScript, NodeJs, React JS.</span> I aim to make a difference through my creative solution.</p>
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
               
            </div>     
        </>
    )
}

export default  SectAbout