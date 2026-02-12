import Link from "next/link"
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { FaBook } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { IoMdPaper } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";

export const Nav = () => {

    const [open, setOpen] = useState(true)

    return (
        <nav className="bg-black rounded-b-md border-b border-neutral-500 flex justify-between items-center p-3  text-white max-md:flex-col max-md:block">

            <ul className="max-md:w-full flex justify-around">
                <li className="ml-20 font-thin font-sans text-2xl max-md:ml-0"><a href="#">DiogoMarcondes.</a></li>
                <li className="hidden max-md:block"><IoMdMenu size={40} onClick={() => setOpen(!open)} /></li>
            </ul>


            <ul className={`flex mr-20 max-md:flex-col items-center max-md:mr-0 max-md:p-8 ${open ? "max-md:hidden" : ""}`}>
                <li className="p-2 max-md:hover:bg-foreground max-md:w-full max-md:rounded-md">
                    <Link href="/main" className="flex items-center p-[0.5px] max-md:text-lg"><FiHome size={20} className="mr-2" />Home</Link>
                </li>
                <li className="p-2 max-md:hover:bg-foreground max-md:w-full max-md:rounded-md">
                    <Link href="/main" className="flex items-center p-[0.5px] max-md:text-lg"><FaBook size={20} className="mr-2" />Sobre</Link>
                </li>
                <li className="p-2 max-md:hover:bg-foreground max-md:w-full max-md:rounded-md">
                    <Link href="/main" className="flex items-center p-[0.5px] max-md:text-lg"><GoProjectSymlink size={20} className="mr-2" />Projetos</Link>
                </li>
                <li className="p-2 max-md:hover:bg-foreground max-md:w-full max-md:rounded-md">
                    <Link href="/main" className="flex items-center p-[0.5px] max-md:text-lg"><RiContactsLine size={20} className="mr-2" />Contato</Link>
                </li>
                <li className="p-2 max-md:hover:bg-foreground max-md:w-full max-md:rounded-md">
                    <Link href="/main" className="flex items-center p-[0.5px] max-md:text-lg"><IoMdPaper size={20} className="mr-2" />Meu Currículo</Link>
                </li>
            </ul>
            <ul className={` hidden  flex max-md:block max-md:pl-8 max-md:border-t max-md:border-neutral-500 p-5 ${open ? "max-md:hidden" : ""}`} >
                <li className="hidden max-md:text-sm max-md:block">Social</li>
                <li className="flex items-center justify-between">
                    <a href="" target="_blank" className="max-md:flex max-md:items-center max-md:text-lg p-2"><FaGithub size={20} className="mr-2" />GitHub</a>
                    <p className=" max-md:block"><CgArrowTopRight size={20}/></p>
                </li>
                <li className="flex items-center justify-between">
                    <a href="" className="max-md:flex max-md:items-center max-md:text-lg p-2"><FaLinkedin size={20} className="mr-2"/>Linkedin</a>
                    <p className="max-md:block"><CgArrowTopRight size={20}/></p>
                </li>
            </ul>
        </nav>
    )
}