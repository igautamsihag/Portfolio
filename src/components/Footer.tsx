import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">A software engineer</h2>
        <p className="text-center text-xs sm:text-sm text-gray-400 max-w-md">
          Graduate Software Engineer with full-stack development skills, seeking opportunities to contribute to innovative projects.
        </p>
        <div className="flex justify-center gap-6 pt-2">
          <a href="https://github.com/igautamsihag" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <AiOutlineGithub size={26} className="cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/gautamsihag30" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <AiOutlineLinkedin size={26} className="cursor-pointer" />
          </a>
          <a href="mailto:gautamsihag30@gmail.com" className="hover:text-gray-400 transition">
            <AiOutlineMail size={26} className="cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 flex justify-center items-center py-3">
        <p className="text-gray-500 text-xs">Copyright © 2025 | Gautam Sihag</p>
      </div>
    </footer>
  )
}

export default Footer;
