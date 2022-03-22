import Image from 'next/image'
import Link from 'next/link'
import SiteWeb from '../assets/Website.png'
import Agency from '../assets/agency.png'
import Voxtv from '../assets/voxtv.png'
import MobileH from '../assets/mobile_home.png'
import Island from '../assets/island.png'
import Broker from '../assets/brokerimmo.jpg'
import View from '../assets/Group.png'
import { useState } from 'react'
import Menu from '../components/menu/Menu'
import MenuMobile from '../components/menu/Menu_mobile'
import Waves from'./Waves';


const SectFolio = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
             <Menu toggle={toggle} />
            <MenuMobile isOpen={isOpen} toggle={toggle} />
            
            <div className=" z-50 flex flex-col items-center justify-center space-y-5 py-10 lg:flex-row lg:space-y-10 lg:space-x-4 lg:py-28 lg:flex-wrap  max-w-5xl mx-auto w-full">
                <div className="z-0"><Waves /></div>
                <div className="flex flex-col items-center justify-start w-72 md:w-80 shadow-xl bg-slate-50/40 rounded-b-2xl">
                    <div className="">
                    <Image src={Agency} alt="Agency" />
                    </div>
                    <div className=" rounded-3xl flex items-center justify-center shadow-xl  m-2" style={{background:" linear-gradient(91.12deg, rgba(152, 179, 208, 0.5) 0%, rgba(255, 255, 255, 0.5) 139.3%)"}}>
                       
                        <button  type="submit" className="z-50"> 
                            <Link href="https://societe-vitrine.vercel.app/" passHref>
                                <a target="_blank"> 
                                    <div className="flex items-center justify-center p-2 px-4">
                                        <p className="pr-6 font-semibold text-lg text-white">
                                            View Projet
                                        </p>
                                        <div className="w-7 pt-2">
                                            <Image  src={View} alt="View Projet" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </button>
                           
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start w-72 md:w-80 shadow-xl  bg-slate-50/40 rounded-b-2xl">
                    <div>
                        <Image src={Voxtv} alt="Site Web" />
                    </div>
                    <div className="  rounded-3xl flex items-center justify-center shadow-xl  m-2" style={{background:" linear-gradient(91.12deg, rgba(152, 179, 208, 0.5) 0%, rgba(255, 255, 255, 0.5) 139.3%)"}}>
                        
                            <button  type="submit" className="z-50">
                                <Link href="https://voxtv.fr/" passHref>
                                    <a target="_blank"> 
                                        <div className="flex items-center justify-center p-2 px-4">
                                            <p className="pr-6 font-semibold text-lg text-white">
                                                View Projet
                                            </p>
                                            <div className="w-7 pt-2">
                                                <Image  src={View} alt="View Projet" />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </button>
                        
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start w-72 md:w-80 shadow-xl  bg-slate-50/40 rounded-b-2xl">
                    <div>
                        <Image src={MobileH} alt="Site Web" />
                    </div>
                    <div className=" rounded-3xl flex items-center justify-center shadow-xl m-2" style={{background:" linear-gradient(91.12deg, rgba(152, 179, 208, 0.5) 0%, rgba(255, 255, 255, 0.5) 139.3%)"}}>
                        
                            <button  type="submit" className="z-50 ">
                                <Link href="https://location-mobilhome.com/">
                                    <a target="_blank"> 
                                        <div className="flex items-center justify-center p-2 px-4">
                                            <p className="pr-6 font-semibold text-lg text-white">
                                                View Projet
                                            </p>
                                            <div className="w-7 pt-2">
                                                <Image  src={View} alt="View Projet" />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </button>
                        
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start w-72 md:w-80 shadow-xl  bg-slate-50/40 rounded-b-2xl">
                    <div>
                        <Image src={Island} alt="Site Web" />
                    </div>
                    <div className=" rounded-3xl flex items-center justify-center shadow-xl m-2" style={{background:" linear-gradient(91.12deg, rgba(152, 179, 208, 0.5) 0%, rgba(255, 255, 255, 0.5) 139.3%)"}}>
                        
                            <button  type="submit" className="z-50 ">
                                <Link href="#">
                                    <a target="_blank"> 
                                        <div className="flex items-center justify-center p-2 px-4">
                                            <p className="pr-6 font-semibold text-lg text-white">
                                                View Projet
                                            </p>
                                            <div className="w-7 pt-2">
                                                <Image  src={View} alt="View Projet" />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </button>
                        
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start w-72 md:w-80 shadow-xl  bg-slate-50/40 rounded-b-2xl">
                    <div>
                        <Image src={Broker} alt="Site Web" />
                    </div>
                    <div className=" rounded-3xl flex items-center justify-center shadow-xl m-2" style={{background:" linear-gradient(91.12deg, rgba(152, 179, 208, 0.5) 0%, rgba(255, 255, 255, 0.5) 139.3%)"}}>
                        
                            <button  type="submit" className="z-50 ">
                                <Link href="#">
                                    <a target="_blank"> 
                                        <div className="flex items-center justify-center p-2 px-4">
                                            <p className="pr-6 font-semibold text-lg text-white">
                                                View Projet
                                            </p>
                                            <div className="w-7 pt-2">
                                                <Image  src={View} alt="View Projet" />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </button>
                        
                    </div>
                </div>

            </div>
            <div className="z-0"><Waves /></div>
        </>
    )
}
export default SectFolio