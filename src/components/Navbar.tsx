import React from "react"
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import Image from "next/image"
import logo from "../../public/gs-logo.svg"
import Link from "next/link"

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
            <nav className="fixed w-full h-24 shadow-xl bg-white z-50">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image src={logo} alt="monogram" className="w-10 h-10 sm:w-13 sm:h-13 md:w-16 md:h-16" />
                    </Link>
                    <div className="hidden sm:flex">
                        <ul className="hidden sm:flex gap-10">
                            <li className="uppercase hover:border-b text-xl cursor-pointer"><Link href="/">Home</Link></li>
                            <li className="uppercase hover:border-b text-xl cursor-pointer"><Link href="/about">About</Link></li>
                            <li className="uppercase hover:border-b text-xl cursor-pointer"><Link href="/projects">Projects</Link></li>
                            <li className="uppercase hover:border-b text-xl cursor-pointer"><Link href="/skills">Skills</Link></li>
                            <li className="uppercase hover:border-b text-xl cursor-pointer"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div onClick={handleMenu} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 sm:hidden"
                        onClick={() => setMenuOpen(false)}
                        />
                    )}
                <div className={
                    menuOpen
                    ? "fixed left-0 top-0 w-[70%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-40"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-40"
                }>

                <div className="flex w-full items-center justify-between">
                    <Link href="/">
                        <Image src={logo} alt="monogram" className="w-10 h-10" />
                    </Link>
                    <div onClick={handleMenu} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex-col py-4">
                    <ul>
                        <li className="py-4 cursor-pointer uppercase hover:border-b">
                            <Link onClick={()=> setMenuOpen(false)} href="/">Home</Link>
                        </li>
                        <li className="py-4 cursor-pointer uppercase hover:border-b">
                            <Link onClick={()=> setMenuOpen(false)} href="/about">About</Link>
                        </li>
                        <li className="py-4 cursor-pointer uppercase hover:border-b">
                            <Link onClick={()=> setMenuOpen(false)} href="/projects">Projects</Link>
                        </li>
                        <li className="py-4 cursor-pointer uppercase hover:border-b">
                            <Link onClick={()=> setMenuOpen(false)} href="/skills">Skills</Link>
                        </li>
                        <li className="py-4 cursor-pointer uppercase hover:border-b">
                            <Link onClick={()=> setMenuOpen(false)} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <a href="https://github.com/igautamsihag" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub size={30} className="cursor-pointer" />
                    </a>
                    <a href="https://linkedin.com/in/gautamsihag30" target="_blank" rel="noopener noreferrer">
                    <AiOutlineLinkedin size={30} className="cursor-pointer" />
                    </a>
                    <a href="mailto:gautamsihag30@gmail.com">
                    <AiOutlineMail size={30} className="cursor-pointer" />
                    </a>
                </div>
                </div>

            </nav>
    )
}

export default Navbar