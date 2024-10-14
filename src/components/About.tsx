import React from 'react';
import { Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://pbs.twimg.com/profile_images/1755893553555812352/gbFSzhAv.jpg"
            alt="Abdul Motalib Samir"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I'm Abdul Motalib Samir, a dedicated cybersecurity enthusiast currently studying and working toward a career in the world of digital security. With a foundation in web development, I have a strong understanding of how applications are built, which helps me better identify and address vulnerabilities.

            <br/><br/>My passion lies in exploring the latest cybersecurity techniques and tools, constantly learning new skills to stay ahead of evolving threats. Whether it's ethical hacking, secure coding, or web application security, I’m committed to growing as a cybersecurity professional and contributing to a safer, more secure internet.


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
