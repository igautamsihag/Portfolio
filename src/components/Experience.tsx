import React from "react";

const Experience = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center pb-8 p-4 dot-pattern">
      <h2 className="text-3xl font-bold mb-8 text-center mt-24 sm:mt-24">Experience</h2>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
            <h3 className="text-lg sm:text-xl font-semibold">RMIT Industry Experience</h3>
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">Aug – Dec 2025</span>
          </div>
          <p className="text-gray-800 font-medium text-sm mb-0.5">Urbix Hub</p>
          <p className="text-gray-500 text-xs mb-5">Melbourne, Australia</p>
          <div className="border-t pt-4 text-gray-700">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Responsibilities</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                Developed an AI agent to autonomously convert user stories into frontend components.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                Implemented automated workflows for file generation, directory scaffolding and git operations.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                Setup Github Actions CI to ensure all generated PRs met project standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
