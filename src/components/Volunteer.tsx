import React from "react";

const Volunteer = () => {
  return (
    <section
      className="min-h-screen pt-24 flex flex-col items-center pb-8 md:justify-center p-4 bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-8 text-center mt-12 sm:mt-0">Volunteer</h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl">
        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left">
          <h3 className="text-l sm:text-xl font-semibold mb-2">Peer Mentor</h3>
          <p className="text-gray-700 mb-1">RMIT University, 2025</p>
          <p className="text-gray-600 text-sm mb-2">Victoria, Australia</p>
          <div className="mt-4 text-gray-700">
          <p className="font-medium mb-3">Key Responsibilities:</p>
          <ul className="list-none space-y-1 text-xs sm:text-sm">
            <li>Provided academic guidance to students by simplying complex conecpts.</li>
            <li>Shared experiences while fostering collaborated problem solving.</li>
          </ul>
        </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left">
          <h3 className="text-l sm:text-xl font-semibold mb-2">Event Coordinator</h3>
          <p className="text-gray-700 mb-1">RMIT University, 2025</p>
          <p className="text-gray-600 text-sm mb-2">Victoria, Australia</p>
          <div className="mt-4 text-gray-700">
          <p className="font-medium mb-3">Key Learnings:</p>
          <ul className="list-none space-y-1 text-xs sm:text-sm">
            <li>Organised social events by coordinating with a team of volunteers.</li>
            <li>Developed cross-cultural awareness by interacting students of different backgrounds.</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
