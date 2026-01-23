import React from "react"
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center py-6">
                A stupid engineer</h2>
            <p className="text-center text-xs sm:text-base mb-1">
        Graduate Software Engineer with full-stack development skills.
      </p>
      <p className="text-center text-xs sm:text-base mb-6">
        Seeking opportunities to contribute to innovative projects.
      </p>
      <div className="flex justify-center gap-6 mb-8">
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
      <div className="w-full bg-white flex justify-center items-center py-2">
  <p className="text-black text-xs sm:text-sm">
    Copyright © 2025 | Gautam Sihag
  </p>
</div>



        </footer>
    )
}

export default Footer;