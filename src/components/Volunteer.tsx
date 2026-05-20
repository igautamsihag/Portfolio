import React from "react";

const Volunteer = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center pb-8 md:justify-center p-4 dot-pattern">
      <h2 className="text-3xl font-bold mb-8 text-center mt-12 sm:mt-0">Volunteer</h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl">
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
              <h3 className="text-lg sm:text-xl font-semibold">Event Co-Organizer</h3>
              <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">2026</span>
            </div>
            <p className="text-gray-800 font-medium text-sm mb-0.5">KSUG.AI</p>
            <p className="text-gray-500 text-xs mb-5">Victoria, Australia</p>
            <div className="border-t pt-4 text-gray-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Responsibilities</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  Provided technical support during sessions and managed social media platforms.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  Helped speakers to deliver a collaborative community experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
              <h3 className="text-lg sm:text-xl font-semibold">Peer Mentor</h3>
              <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">2025</span>
            </div>
            <p className="text-gray-800 font-medium text-sm mb-0.5">RMIT University</p>
            <p className="text-gray-500 text-xs mb-5">Victoria, Australia</p>
            <div className="border-t pt-4 text-gray-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Responsibilities</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  Provided academic guidance to students by simplifying complex concepts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  Shared experiences and used a collaborative problem solving approach.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
