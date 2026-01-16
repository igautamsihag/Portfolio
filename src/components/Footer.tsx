import React from "react"
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center py-6">
                A stupid engineer</h2>
            <p className="text-center text-sm sm:text-base mb-1">
        Graduate Software Engineer with full-stack development skills.
      </p>
      <p className="text-center text-sm sm:text-base mb-6">
        Seeking opportunities to contribute to innovative projects.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <AiOutlineGithub size={30} className="cursor-pointer" />
        <AiOutlineLinkedin size={30} className="cursor-pointer" />
        <AiOutlineMail size={30} className="cursor-pointer" />
      </div>
      <div className="relative w-full bg-white h-6">
    <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-black text-sm">
      Copyright © 2025 | Gautam Sihag
    </p>
  </div>

        </footer>
    )
}

export default Footer;