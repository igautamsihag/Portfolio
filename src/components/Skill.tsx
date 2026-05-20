import React from "react";
import { AiOutlineJavaScript, AiOutlinePython, AiOutlineJava, AiOutlineHtml5, AiOutlineCode, AiOutlineLock, AiOutlineCloud } from "react-icons/ai";
import { SiCss3, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiMysql, SiAmazonwebservices, SiAmazons3, SiAmazonec2, SiAmazondynamodb, SiAmazonapigateway, SiAwslambda, SiDocker, SiTerraform, SiGithubactions } from 'react-icons/si';

const Skill = () => {
  return (
    <section className="min-h-screen pt-16 pb-8 px-4 dot-pattern flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center mt-12 sm:mt-18">Skills</h2>

      <div className="flex flex-col space-y-8 w-full max-w-4xl">
        {/* Languages */}
        <div className="bg-white p-6 rounded shadow w-full flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3 justify-center">
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
              <AiOutlineJava className="text-white w-5 h-5" />
              <span className="text-white">Java</span>
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
              <SiNodedotjs className="text-white w-5 h-5" />
              <span className="text-white">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiNextdotjs className="text-white w-5 h-5" />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiReact className="text-white w-5 h-5" />
              <span className="text-white">React</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineCode className="text-white w-5 h-5" />
              <span className="text-white">LangGraph</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white p-6 rounded shadow w-full flex flex-col items-center text-center mb-12">
          <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonwebservices className="text-white w-5 h-5" />
              <span className="text-white">AWS</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiTerraform className="text-white w-5 h-5" />
              <span className="text-white">Terraform</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiGithubactions className="text-white w-5 h-5" />
              <span className="text-white">GitHub Actions</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiDocker className="text-white w-5 h-5" />
              <span className="text-white">Docker</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAwslambda className="text-white w-5 h-5" />
              <span className="text-white">AWS Lambda</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazons3 className="text-white w-5 h-5" />
              <span className="text-white">S3</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineLock className="text-white w-5 h-5" />
              <span className="text-white">IAM</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonec2 className="text-white w-5 h-5" />
              <span className="text-white">EC2</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <AiOutlineCloud className="text-white w-5 h-5" />
              <span className="text-white">VPC</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazondynamodb className="text-white w-5 h-5" />
              <span className="text-white">DynamoDB</span>
            </div>
            <div className="flex items-center gap-2 bg-black px-3 py-1 rounded">
              <SiAmazonapigateway className="text-white w-5 h-5" />
              <span className="text-white">API Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
