import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center pb-8 md:justify-center p-4 dot-pattern">
      <h2 className="text-3xl font-bold mb-8 text-center mt-24 sm:mt-0">Education</h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl">
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
              <h3 className="text-lg sm:text-xl font-semibold">Master of Information Technology</h3>
              <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">2024–25</span>
            </div>
            <p className="text-gray-800 font-medium text-sm mb-0.5">RMIT University</p>
            <p className="text-gray-500 text-xs mb-5">Victoria, Australia</p>
            <div className="border-t pt-4 hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Relevant Coursework</p>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Full Stack Development</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Cloud Computing</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Software Engineering</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Algorithms & Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
              <h3 className="text-lg sm:text-xl font-semibold">Bachelor of Computer Applications</h3>
              <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">2020–23</span>
            </div>
            <p className="text-gray-800 font-medium text-sm mb-0.5">Guru Jambeshwar University</p>
            <p className="text-gray-500 text-xs mb-5">Hisar, India</p>
            <div className="border-t pt-4 hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Relevant Coursework</p>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Programming Fundamentals</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Operating Systems</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Web Development</li>
                <li className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Cybersecurity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
