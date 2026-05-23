import React from "react";

const Resumetimeline = () => {
  return (
    <section
      id="resume"
      className="bg-[#131313] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-neutral-400 mb-2">My Journey</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Education & <span className="text-[#FF014F]">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div className="relative border-l border-[#FF014F] pl-10 space-y-14">
            <h3 className="text-2xl font-semibold mb-10">Education</h3>

            {/* B.Tech */}
            <div className="relative">
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full border-2 border-[#FF014F] bg-black"></div>

              <h4 className="text-xl font-semibold">
                B.Tech – Electronics & Communication Engineering
              </h4>

              <p className="text-neutral-400 text-sm mb-2">
                Maharaj Vijayaram Gajapathi Raj College of Engineering
              </p>

              <p className="text-[#FF014F] text-sm mb-3">
                CGPA: 8.83 | 2023 – Present
              </p>

              <p className="text-neutral-400">
                Pursuing B.Tech with a strong interest in Full Stack Development,
                Artificial Intelligence, Machine Learning, and Software
                Engineering. Actively building real-world applications and
                enhancing problem-solving skills through projects.
              </p>
            </div>

            {/* Intermediate */}
            <div className="relative">
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full border-2 border-[#FF014F] bg-black"></div>

              <h4 className="text-xl font-semibold">Intermediate (MPC)</h4>

              <p className="text-neutral-400 text-sm mb-2">
                Narayana Junior College, Visakhapatnam
              </p>

              <p className="text-[#FF014F] text-sm mb-3">
                92.6% | 2021 – 2023
              </p>
            </div>

            {/* SSC */}
            <div className="relative">
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full border-2 border-[#FF014F] bg-black"></div>

              <h4 className="text-xl font-semibold">SSC</h4>

              <p className="text-neutral-400 text-sm mb-2">
                Chalapathi Public School
              </p>

              <p className="text-[#FF014F] text-sm mb-3">
                94.6% | 2021
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="relative border-l border-[#FF014F] pl-10 space-y-14">
            <h3 className="text-2xl font-semibold mb-10">Projects</h3>

            {/* AI Roadmap Builder */}
            <div className="relative">
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full border-2 border-[#FF014F] bg-black"></div>

              <h4 className="text-xl font-semibold">
                LearnAI
              </h4>

              <p className="text-[#FF014F] text-sm mb-3">
                Full Stack AI Project | 2025 – Present
              </p>

              <p className="text-neutral-400 mb-3">
                Developed an AI-powered platform that generates personalized
                learning roadmaps based on user goals, experience level, and
                career interests. Integrated AI-generated recommendations and
                designed a responsive user interface for an engaging learning
                experience.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://ai-roadmap-builder-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/j-s-k-rajesh/ai-roadmap-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] hover:underline"
                >
                  GitHub Repository
                </a>
              </div>
            </div>


            {/* Credit Card Fraud Detection */}
            <div className="relative">
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full border-2 border-[#FF014F] bg-black"></div>

              <h4 className="text-xl font-semibold">
                Credit Card Fraud Detection System
              </h4>

              <p className="text-[#FF014F] text-sm mb-3">
                Machine Learning Project
              </p>

              <p className="text-neutral-400">
                Developed a fraud detection system using Machine Learning
                algorithms including Logistic Regression, Random Forest, and
                XGBoost. Built REST APIs for prediction services and deployed
                the application for real-time fraud analysis and prediction.
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://creditcard-fraud-ml.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/j-s-k-rajesh/creditcard-fraud-ml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] hover:underline"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumetimeline;