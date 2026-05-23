import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jami_Siva_Krishna_Rajesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="bg-[#1E1E1E] justify-items-center text-center text-[#cccccc] p-4 mt-24 m-10 rounded-md"
    >
      <div className="flex justify-between px-10">
        <div>
          <div>
            HELLO, MY NAME IS

            <div className="text-3xl px-10 pt-4 pb-4 font-[Pacifico]">
              Jami.Siva Krishna Rajesh
            </div>

            <div className="max-w-[550px] text-neutral-400 p-4 text-md leading-8">
              B.Tech ECE student with hands-on experience in Full Stack
              Development and Machine Learning using React.js, Node.js,
              Express.js, Python, Flask, and MongoDB. Skilled in developing
              scalable web applications, REST APIs, and AI-powered solutions.
              Seeking Software Development opportunities to apply
              problem-solving skills and contribute to impactful products.
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-4 pb-4 px-10">
            <button
              onClick={handleDownload}
              className="bg-[#FF014F] hover:bg-[#79002c] text-white px-4 py-2 rounded-md transition"
            >
              Download Resume
            </button>

            <a href="#contact">
              <button className="border-2 border-[#FF014F] hover:bg-[#79002c] text-white px-4 py-2 rounded-md transition">
                Contact Me
              </button>
            </a>
          </div>

          <div className="flex gap-6 justify-center items-center p-4 px-14">
            <a
              href="https://github.com/j-s-k-rajesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={28}
                className="text-white hover:text-[#FF014F] transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jami-siva-krishna-rajesh-425a852bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="text-[#0077b5] hover:scale-110 transition"
              />
            </a>

            <a
              href="https://www.instagram.com/j.s.k.rajesh__001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={28}
                className="text-[#c13584] hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;