import Link from 'next/link'

const MenuMobile: React.FC<{ toggle: () => void, isOpen: boolean }> = ({ toggle, isOpen }) => {
    return (
        <>
            <header className="">
                <nav className={isOpen ? "flex flex-col w-full items-center justify-between p-8 text-white " : "hidden"} onClick={toggle}>
                    <div className="">
                        <ul className=" flex flex-col space-y-2 text-lg font-semibold">
                            <li className="">
                            <Link href="/"><a>Home</a></Link>
                            </li>

                            <li className="">
                            <Link href="/About"><a>About</a></Link>
                            </li>

                            <li className="">
                            <Link href="/PortFolio"><a>Portfolio</a></Link>
                            </li>

                            <li className="">
                            <Link href="/Contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </header>
        </>
    )
}

export default MenuMobile;