import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#131313] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[320px] h-[400px]">
            <img
              src="/edit2.png"
              className="rounded-full"
              alt="Rajesh"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-neutral-400 mb-3">About Me</p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building <span className="text-[#FF014F]">AI-Powered</span> <br />
            Full Stack Applications
          </h2>

          <p className="text-neutral-400 leading-relaxed mb-8">
            I am Jami Siva Krishna Rajesh, a third-year B.Tech student in
            Electronics and Communication Engineering. Currently, I am focused
            on mastering Full Stack Development, Machine Learning, and AI
            integration. My primary project is LearnAI, an AI-powered learning
            platform designed to provide personalized learning experiences,
            interactive assessments, progress tracking, and intelligent study
            assistance. I enjoy transforming ideas into scalable web
            applications while continuously exploring modern technologies and
            problem-solving techniques.
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            {[
              "Developing LearnAI using MERN Stack and modern web technologies",
              "Integrating AI features for personalized learning and smart assistance",
              "Building secure backend APIs, authentication, and database systems",
              "Combining Artificial Intelligence with web development to create impactful solutions",
              "Exploring Machine Learning and AI Agent development workflows",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full border border-[#FF014F] flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#FF014F] rounded-full"></div>
                </div>
                <p className="text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;