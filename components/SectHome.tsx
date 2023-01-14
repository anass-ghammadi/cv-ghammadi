import { useState } from 'react';
import Image from 'next/image';
import Ghammadi from '../assets/ghammadi.jpg';
import Menu from './menu/Menu'
import MenuMobile from './menu/Menu_mobile';
import Waves from'./Waves';





function SectHome () {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="">
            <div className="z-0"><Waves /></div>
                <Menu  toggle={toggle} />
                <MenuMobile isOpen={isOpen} toggle={toggle} />
                <div className=" flex flex-col items-center justify-center space-y-12 lg:flex-row lg:items-center lg:justify-center lg:space-x-36 lg:pt-16 lg:space-y-0">
                    <div className="w-60 lg:w-70 rounded-2xl outline  outline-blue-300 outline-offset-4">
                        <Image className=" rounded-2xl" src={Ghammadi} alt="anass ghammadi" />
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-5">
                        <div>
                            <h1 className="text-white font-bold text-2xl md:text-5xl ">Anass GHAMMADI</h1>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <h1 className=" font-bold text-3xl md:text-5xl text-center  text-blue-300"> WEBMETHODS analyst developer at Atos</h1>
                            <h1 className=" font-bold text-xl md:text-3xl  text-white">--------------</h1>
                            <h1 className=" font-bold text-3xl md:text-5xl  text-blue-300">WEB DEVELOPPER</h1>
                        </div>
                    </div>
                </div>
                <div className="z-0"><Waves /></div>
            </div>      
        </>
    )
    
}

export default  SectHome
