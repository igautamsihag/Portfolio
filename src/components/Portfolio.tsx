import React from "react";

const Portfolio = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center pb-8 p-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center mt-12 sm:mt-24">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {/* Project Card 1 */}
        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Job Portal Application
          </h3>

          <p className="text-gray-700 mb-2">June 2025</p>

          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            A full-stack job portal allowing users to search and apply for jobs,
            while employers can post and manage job listings.
          </p>

          <a
            href="https://github.com/igautamsihag/job-portal-application.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-auto self-center md:self-start"
          >
            View on GitHub
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Music Subscription App
          </h3>

          <p className="text-gray-700 mb-2">April 2025</p>

          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            A music subscription application allowing users to register, search and subscribe songs. Developed using React, Node.js and AWS services.
          </p>

          <a
            href="https://github.com/igautamsihag/cloud-music-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-auto self-center md:self-start"
          >
            View on GitHub
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="flex-1 bg-white p-6 rounded shadow text-center md:text-left flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Bookstore Application
          </h3>

          <p className="text-gray-700 mb-2">November 2024</p>

          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            A JavaFX desktop application providing user authentication, inventory and sales management, customer orders, and data storage.
          </p>

          <a
            href="https://github.com/igautamsihag/ReadingRoom.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-auto self-center md:self-start"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
