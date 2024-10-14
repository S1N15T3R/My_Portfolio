import React from 'react';
import { Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Abdul Motalib Samir"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I am Abdul Motalib Samir, passionate about building visually appealing websites and enhancing web security. Currently pursuing my education, I am on a journey to specialize in cybersecurity and sharpen my skills in web development.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Code size={24} className="mr-2 text-blue-500" />
              <span>Frontend Developer</span>
            </div>
            <div className="flex items-center">
              <Shield size={24} className="mr-2 text-green-500" />
              <span>Cybersecurity Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;