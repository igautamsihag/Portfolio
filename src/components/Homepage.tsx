import React from "react";
import Image from "next/image";
import profilePhoto from "../../public/profilePhoto.png";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

const Homepage = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center min-h-[calc(100vh-6rem)] bg-gray-50 sm:space-x-12 md:space-x-16 lg:space-x-24 xl:space-x-32 space-y-4 sm:space-y-0 px-4 mb-24">
      
      <div className="text-center sm:text-left space-y-2 sm:space-y-4 mt-8 sm:mt-24">
        <h1 className={`${dancing.className} font-bold animate-drop-bounce text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] tracking-wider drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700`}>
          Hi, I&apos;m Gautam
        </h1>
        <h1 className={`${dancing.className} font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]`}>
          A Software Engineer
        </h1>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10 justify-center sm:justify-start">
          <Link href="/contact">
          <button className=" w-full sm:w-auto px-8 py-3 bg-black text-white rounded-lg shadow-lg 
                     hover:bg-gray-800 hover:scale-105 transition transform duration-300 ease-in-out">
            Contact Me
          </button>
          </Link>
          <Link href="/projects">
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black border-2 border-black rounded-lg shadow-lg 
                     hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-in-out">
            Portfolio
          </button>
          </Link>
        </div>
      </div>

      <div className="rounded-full overflow-hidden border-4 border-black rotate-3 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mt-40 sm:mt-24">
        <Image
          src={profilePhoto}
          alt="Gautam Sihag"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
