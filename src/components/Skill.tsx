import React from "react";
import { AiOutlineJavaScript, AiOutlineGithub, AiOutlinePython, AiOutlineJava, AiOutlineHtml5 } from "react-icons/ai";
import { SiCplusplus, SiCss3, SiC, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiMysql, SiTypeorm, SiGraphql, SiAmazonwebservices, SiAmazons3, SiAmazonec2, SiAmazondynamodb, SiAmazonapigateway, SiAwslambda, SiDocker, SiPostgresql } from 'react-icons/si';

const Skill = () => {
  return (
    <section className="min-h-screen pt-24 pb-8 px-4 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center mt-12 sm:mt-18">Skills</h2>

      <div className="flex flex-col space-y-12 sm:space-y-18 w-full max-w-4xl">
        {/* Languages */}
        <div className="bg-white p-6 rounded shadow w-full flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineJava className="text-white w-5 h-5" />
              <span className="text-white">Java</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineJavaScript className="text-white w-5 h-5" />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiTypescript className="text-white w-5 h-5" />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlinePython className="text-white w-5 h-5" />
              <span className="text-white">Python</span>
            </div>
          
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiCplusplus className="text-white w-5 h-5" />
              <span className="text-white">C++</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiC className="text-white w-5 h-5" />
              <span className="text-white">C</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiMysql className="text-white w-5 h-5" />
              <span className="text-white">SQL</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineHtml5 className="text-white w-5 h-5" />
              <span className="text-white">HTML</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiCss3 className="text-white w-5 h-5" />
              <span className="text-white">CSS</span>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white p-6 rounded shadow w-full flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiReact className="text-white w-5 h-5" />
              <span className="text-white">React</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiNextdotjs className="text-white w-5 h-5" />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiNodedotjs className="text-white w-5 h-5" />
              <span className="text-white">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineJavaScript className="text-white w-5 h-5" />
              <span className="text-white">Express</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiTypeorm className="text-white w-5 h-5" />
              <span className="text-white">TypeORM</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiGraphql className="text-white w-5 h-5" />
              <span className="text-white">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white p-6 rounded shadow w-full flex flex-col items-center text-center mb-12">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonwebservices className="text-white w-5 h-5" />
              <span className="text-white">AWS</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonec2 className="text-white w-5 h-5" />
              <span className="text-white">EC2</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazons3 className="text-white w-5 h-5" />
              <span className="text-white">S3</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazondynamodb className="text-white w-5 h-5" />
              <span className="text-white">DynamoDB</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAwslambda className="text-white w-5 h-5" />
              <span className="text-white">AWS Lambda</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonapigateway className="text-white w-5 h-5" />
              <span className="text-white">API Gateway</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineGithub className="text-white w-5 h-5" />
              <span className="text-white">GitHub</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineGithub className="text-white w-5 h-5" />
              <span className="text-white">Git</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiDocker className="text-white w-5 h-5" />
              <span className="text-white">Docker</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiPostgresql className="text-white w-5 h-5" />
              <span className="text-white">Postgre SQL</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiMysql className="text-white w-5 h-5" />
              <span className="text-white">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
