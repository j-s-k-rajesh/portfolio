import React from "react";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // place resume.pdf in public folder
    link.download = "Jami_Siva_Krishna_Rajesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="bg-[#1E1E1E] text-[#cccccc] p-6 md:p-10 mt-24 mx-4 md:mx-10 rounded-md"
    >
      <div className="flex flex-col items-center text-center">
        <p className="uppercase tracking-widest text-sm text-gray-400">
          Hello, My Name Is
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
          Jami Siva Krishna Rajesh
        </h1>

        <p className="max-w-3xl text-neutral-400 leading-7">
          B.Tech ECE student with hands-on experience in Full Stack Development
          and Machine Learning using React.js, Node.js, Express.js, Python,
          Flask, and MongoDB. Skilled in developing scalable web applications,
          REST APIs, and AI-powered solutions. Seeking Software Development
          opportunities to apply problem-solving skills and contribute to
          impactful products.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={handleDownload}
            className="bg-[#FF014F] hover:bg-[#79002c] text-white px-5 py-2 rounded-md transition"
          >
            Download Resume
          </button>

          <a href="#contact">
            <button className="border-2 border-[#FF014F] hover:bg-[#79002c] text-white px-5 py-2 rounded-md transition">
              Contact Me
            </button>
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/j-s-k-rajesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-7 h-7 fill-white hover:scale-110 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jami-siva-krishna-rajesh-425a852bb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-7 h-7 fill-[#0077B5] hover:scale-110 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9z..." />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/j.s.k.rajesh__001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-7 h-7 fill-[#C13584] hover:scale-110 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3..." />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;