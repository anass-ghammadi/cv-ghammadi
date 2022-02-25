import Image from "next/image"
import Linkedin from "../assets/LinkedIn.png"
import Github from "../assets/GitHub.png"
import Facebook from "../assets/Facebook.png"

function Footer () {
    return (
        <>
            <div className="flex items-center justify-center pt-5  space-x-2 lg:pt-14 lg:space-x-4">
                <span className="border-t-4 px-5"></span>
                <div className="flex w-36 space-x-2">
                    <a href="https://www.linkedin.com/in/anass-ghammadi-a41711a4/"><Image src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/anass-ghammadi"><Image src={Github} alt="Github" /></a>
                    <a href="https://www.facebook.com/anas.ghammadi/"><Image src={Facebook} alt="Facebook" /></a>
                </div>
                <span className="border-t-4 px-5"></span>
            </div>
        </>
    )

}

export default Footer