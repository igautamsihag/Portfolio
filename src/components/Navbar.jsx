import React from "react"
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
            <nav className="fixed w-full h-24 shadow-xl bg-white">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                    <h1>placeholder</h1>
                    <div className="hidden sm:flex">
                        <ul className="hidden sm:flex gap-10">
                            <li className="uppercase hover:border-b text-xl">Home</li>
                            <li className="uppercase hover:border-b text-xl">Home</li>
                            <li className="uppercase hover:border-b text-xl">Home</li>
                            <li className="uppercase hover:border-b text-xl">Home</li>
                        </ul>
                    </div>
                    <div onClick={handleMenu} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={
                    menuOpen
                    ? "fixed left-0 top-0 w-[70%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>

                <div className="flex w-full items-center justify-end">
                    <div onClick={handleMenu} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex-col py-4">
                    <ul>
                        <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">
                            About
                        </li>
                        <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">
                            Career
                        </li>
                        <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">
                            Projects
                        </li>
                        <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineGithub size={30} className="cursor-pinter" />
                    <AiOutlineLinkedin size={30} className="cursor-pinter" />
                    <AiOutlineMail size={30} className="cursor-pinter" />
                </div>
                </div>

            </nav>
    )
}

export default Navbar