import Image from "next/image"
import Linkedin from "../assets/LinkedIn.png"
import Github from "../assets/github.png"
import Facebook from "../assets/facebook.png"

function Footer () {
    return (
        <>
            <div className="flex items-center justify-center pt-5  space-x-2 lg:pt-14 lg:space-x-4">
                <span className="border-t-4 px-5"></span>
                <div className="flex w-36 space-x-2">
                    <a href="#"><Image src={Linkedin} alt="Linkedin" /></a>
                    <a href="#"><Image src={Github} alt="Github" /></a>
                    <a href="#"><Image src={Facebook} alt="Facebook" /></a>
                </div>
                <span className="border-t-4 px-5"></span>
            </div>
        </>
    )

}

export default Footer