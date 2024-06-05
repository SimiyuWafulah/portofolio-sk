import React from 'react';

function About() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-teal-400 pt-10">Software Engineer | Backend Developer</h3>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 italic font-light">
            I'm a passionate software engineer specializing in backend development. 
            With 2 years of experience, I build scalable and robust web applications, 
            staying dedicated to continuous learning and staying up-to-date with the latest technology trends.
            Beyond coding, I am fascinated by network engineering and the intricacies of how data is transmitted 
            and secured over networks. This dual interest in backend development and network engineering drives 
            my desire to create seamless, efficient, and secure web applications. I love the challenge of transforming
            complex problems into elegant solutions and am dedicated to continuous learning and professional growth. 
            I write code in JavaScript (.js), TypeScript (.ts), and Go (.go).
            When I'm not coding, I enjoy travelling, playing bass,piano and playing handball.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
