import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export const Footer = () => {
    return (
        <div className="border-t border-t-foreground bg-black flex h-20 items-center justify-around mt-40 max-md:flex-col-reverse max-md:p-8">
            <div>
                <p>© 2026 All Rights Reserved. <a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank">DiogoMarcondes</a></p>
            </div>
            <div>
                <ul className="flex max-md:m-8">
                    <li className="p-2 m-1 bg-foreground rounded-full hover:scale-105 transition"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank"><FaLinkedin size={30} color="black"/></a></li>
                    <li className="p-2 m-1 bg-foreground rounded-full hover:scale-105 transition"><a href="https://github.com/Diogomc" target="_blank"><FaGithub size={30} color="black"/></a></li>
                    <li className="p-2 m-1 bg-foreground rounded-full hover:scale-105 transition"><a href="https://vercel.com/diogomcs-projects" target="_blank"><IoLogoVercel size={30} color="black"/></a></li>
                </ul>
            </div>
        </div>
    )
}