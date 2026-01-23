import React from "react";

const Education = () => {
  return (
    <section
      className="min-h-screen pt-24 flex flex-col items-center pb-8 md:justify-center p-4 bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-8 text-center mt-24 sm:mt-0">Education</h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl">
        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left">
          <h3 className="text-l sm:text-xl font-semibold mb-2">Master of Information Technology</h3>
          <p className="text-gray-700 mb-1">RMIT University, 2024-25</p>
          <p className="text-gray-600 text-sm mb-2">Victoria, Australia</p>
          <div className="mt-4 text-gray-700 hidden md:block">
            <p className="font-medium mb-3">Relevant Coursework:</p>
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <li className="bg-gray-200 px-2 py-1 rounded">Full Stack Development</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Cloud Computing</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Software Engineering</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Algorithms & Analysis</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left">
          <h3 className="text-l sm:text-xl font-semibold mb-2">Bachelor of Computer Applications</h3>
          <p className="text-gray-700 mb-1">Guru Jambeshwar University, 2020-23</p>
          <p className="text-gray-600 text-sm mb-2">Hisar, India</p>
          <div className="mt-4 text-gray-700 hidden md:block">
            <p className="font-medium mb-3">Relevant Coursework:</p>
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <li className="bg-gray-200 px-2 py-1 rounded">Programming Fundamentals</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Operating Systems</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Web Development</li>
              <li className="bg-gray-200 px-2 py-1 rounded">Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
