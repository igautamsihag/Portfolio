import React from "react";

const Experience = () => {
    return(
        <section
      className="min-h-screen pt-24 flex flex-col items-center pb-8 p-4 bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-8 text-center mt-24 sm:mt-24">Experience</h2>

      <div className="w-full max-w-2xl bg-white p-6 rounded shadow text-center md:text-left">
        <h3 className="text-l sm:text-xl font-semibold mb-2">RMIT Industry Experience</h3>
        <p className="text-gray-700 mb-1">Urbix Hub, Aug 2025 - Dec 2025</p>
        <p className="text-gray-600 text-sm mb-2">Melbourne, Australia</p>

        <div className="mt-4 text-gray-700">
          <p className="font-medium mb-3">Key Responsibilities:</p>
          <ul className="list-none space-y-1 text-xs sm:text-sm">
            <li>Developed an AI agent to autonomously convert user stories into frontend components.</li>
            <li>Implemented automated workflows for file generation, directory scaffolding and git operations.</li>
            <li>Setup Github Actions CI to ensure all generated PRs met project standards.</li>
          </ul>
        </div>
      </div>
    </section>
    )
}


export default Experience;