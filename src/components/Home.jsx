import React from 'react';

function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex justify-center items-start pt-20 pb-10"> 
      <div className="container mx-auto text-left px-4 md:px-8 py-4 md:py-8">
        <p className="text-lg mb-2 text-teal-500 italic font-light">Hi, my name is.....</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-teal-500">Kelvin Simiyu</h1>
        <p className="text-4xl md:text-6xl mb-9 text-teal-500 bold">I build things for the web</p>
        <p className="text-lg mb-14 max-w-prose font-light italic">
          I'm a software engineer with a passion for creating elegant solutions to complex problems. 
          With 2 years of experience, I've honed my skills in backend development, API development, 
          and network engineering. I enjoy collaborating with teams to deliver high-quality software 
          solutions that exceed client expectations.
        </p>
        <a href="path/to/your-cv.pdf" download className="bg-teal-500 text-white py-2 px-4 rounded">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
