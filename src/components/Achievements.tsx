import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Learning & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Award size={32} className="mb-4 text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <p>Placeholder for future cybersecurity and web development certifications.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <BookOpen size={32} className="mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Academic Education</h3>
           <p>Studied Govt. Science College tejgaon,Dhaka <br/> Result : GPA-5.0</p>
          <p>Now Pursuing a degree in Computer Science.</p>
          <p>Bangladesh Army University of Engineering & Technology (BAUET)</p>
          <p>Expected Graduation: 30 December 2027</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Briefcase size={32} className="mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Research Platforms</h3>
          <p>cybersecurity research contributions and platforms</p>
          <p> Hackerone <br/> VulnHub <br/> Exploit Database <br/> Windows 7/8/10/11 <br/> Linux <br/> Pentestlab</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
