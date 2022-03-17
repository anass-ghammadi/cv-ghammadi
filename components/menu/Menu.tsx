import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/AG.png'

const Menu: React.FC<{ toggle: () => void }> = ({ toggle }) => { 
    return (
        <>
            <header className=" flex items-center justify-center max-w-5xl mx-auto w-full">
                <nav className= "flex  w-full items-center justify-between  p-8 text-white ">
                    <div className="w-16 cursor-pointer">
                        <Link href="/" passHref>
                            <Image className="rounded-full" src={Logo} alt="Logo-ghammadi"/>
                        </Link>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex items-center justify-center font-semibold space-x-6 text-lg">
                            <li className="">
                            <Link href="/" passHref><a>Home</a></Link>
                            </li>

                            <li className="">
                            <Link href="/About" passHref><a>About</a></Link>
                            </li>

                            <li className="">
                            <Link href="/Portfolio" passHref><a>Portfolio</a></Link>
                            </li>

                            <li className="">
                            <Link href="/Contact" passHref><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden cursor-pointer  rounded-full p-4 hover:scale-125  duration-700 " onClick={toggle}>
                        <svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </nav>  
            </header>

        </>
    )
}

export default Menu