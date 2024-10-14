import React from 'react';
import { BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <BookOpen size={32} className="mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p>Stay tuned for my upcoming cybersecurity writeups and articles.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;