import React from "react";
import Image from "next/image";
import profilePhoto from "../../public/profilePhoto.png";

const Homepage = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-screen bg-gray-50 space-y-4 sm:space-y-0 sm:space-x-8">
      
      <div className="text-center space-y-2 sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold animate-drop-bounce">
          Hi, I&apos;m Gautam
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold">
          A Software Engineer
        </h1>
      </div>

      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-black rotate-3 mb-4 sm:mb-0 -mt-16 sm:mt-0">
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
