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
          <p>Pursuing a degree in Computer Science (or relevant field)</p>
          <p>University Name, Expected Graduation: 20XX</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Briefcase size={32} className="mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Research Platforms</h3>
          <p>Placeholder for future cybersecurity research contributions and platforms.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;