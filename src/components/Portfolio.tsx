const ProjectCard = ({
  title,
  date,
  description,
  link,
}: {
  title: string;
  date: string;
  description: string;
  link: string;
}) => (
  <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden text-center md:text-left flex flex-col hover:shadow-lg transition-shadow">
    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full self-center md:self-start whitespace-nowrap">{date}</span>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm mb-6 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition mt-auto self-center md:self-start text-sm"
      >
        View on GitHub
      </a>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section className="min-h-screen pt-16 flex flex-col items-center pb-8 p-4 dot-pattern">
      <h2 className="text-3xl font-bold mb-8 text-center mt-12 sm:mt-24">Projects</h2>

      <div className="flex flex-col gap-6 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          <ProjectCard
            title="Code Critiq"
            date="June 2026"
            description="AI-assisted developer tool to automate the PR review process. Connects to your GitHub account and delivers code reviews directly on your pull requests."
            link="https://github.com/igautamsihag/Code-Critiq.git"
          />
          <ProjectCard
            title="Professional AI Chatbot"
            date="April 2026"
            description="Gone are the days of resumes. Professional AI chatbots are the future for bridging the communication gap between the recruiters and the client."
            link="https://github.com/igautamsihag/Professional-AI-Chatbot.git"
          />
          <ProjectCard
            title="Job Portal Application"
            date="June 2025"
            description="A full-stack job portal allowing users to search and apply for jobs, while employers can post and manage job listings."
            link="https://github.com/igautamsihag/job-portal-application.git"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <ProjectCard
              title="Music Subscription App"
              date="April 2025"
              description="A music subscription application allowing users to register, search and subscribe songs. Developed using React, Node.js and AWS services."
              link="https://github.com/igautamsihag/cloud-music-app.git"
            />
          </div>
          <div className="md:w-1/3">
            <ProjectCard
              title="Bookstore Application"
              date="November 2024"
              description="A JavaFX desktop application providing user authentication, inventory and sales management, customer orders, and data storage."
              link="https://github.com/igautamsihag/ReadingRoom.git"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
