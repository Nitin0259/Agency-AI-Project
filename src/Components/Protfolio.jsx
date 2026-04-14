import React from "react";
import protfolio_img1 from "../assets/protfolio_img1.jpg";
import protfolio_img2 from "../assets/protfolio_img2.jpg"
import protfolio_img3 from "../assets/protfolio_img3.jpg"
import protfolio_img4 from "../assets/protfolio_img4.jpg"
import { motion } from "motion/react"

const Protfolio = () => {
  return (
    <div>
      <section
        id="Portfolio"
        className="py-20 md:py-32 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 to-slate-950"></div>

        <div className="text-white mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
            initial={{opacity:0, y:30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.6}}
      viewport={{once: true}}
            className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Featured{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{opacity:0, y:30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: 0.7}}
      viewport={{once: true}}
              className="text-lg sm:text-2xl md:text-xl lg:text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
              style={{ opacity: "1", transform: "none" }}
            >
              Explore our portfolio of successful AI implementations that
              delivered real results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <motion.div
              initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.4}}
        viewport={{once: true}}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={protfolio_img1}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold">
                  +150% Efficiently
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">
                  Data Analytics
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  AI-Powered Analytics Platform
                </h3>

                <p className="text-gray-400 mb-4">
                  Advanced analytics dashboard with real-time insights and
                  predictive modeling
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.4}}
        viewport={{once: true}}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={protfolio_img2}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold">
                  85% Cost Reduction
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">
                  NLP Solution
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  Intelligent Chatbot System
                </h3>

                <p className="text-gray-400 mb-4">
                  Customer service automation with natural language understanding
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.5}}
        viewport={{once: true}}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={protfolio_img3}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold">
                  99.7% Accuracy
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">
                  Machine Learning
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  Computer Vision Solution
                </h3>

                <p className="text-gray-400 mb-4">
                  Automated quality control system for manufacturing
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.7}}
        viewport={{once: true}}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={protfolio_img4}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold">
                  40% Downtime Reduced
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">
                  IoT & AI
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  Predictive Maintenance AI
                </h3>

                <p className="text-gray-400 mb-4">
                  IoT-integrated system for equipment failure prediction
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Protfolio;
