import React from 'react';
import { Code, Database, GitBranch } from 'lucide-react';

const Experience: React.FC = () => {
  const programmingLanguages = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
  const technologies = ['React', 'Node.js', 'Git', 'VS Code', 'GitHub'];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Code size={24} className="mr-2 text-blue-500" />
            Programming Languages
          </h3>
          <ul className="list-disc list-inside">
            {programmingLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Database size={24} className="mr-2 text-green-500" />
            Technologies and Tools
          </h3>
          <ul className="list-disc list-inside">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;