import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBrain, FaBolt, FaMagic, FaGem } from 'react-icons/fa';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building AI products that learn from every customer interaction';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const industries = [
    {
      title: 'Content Intelligence',
      description: 'Generative AI that tags, scores, and ships higher-performing content',
      icon: FaMagic,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Personalization',
      description: 'Recommendation engines that adapt to every visitor in real time',
      icon: FaBrain,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Predictive Analytics',
      description: 'Marketing and product analytics powered by forecasting and anomaly detection',
      icon: FaChartLine,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Automation & Agents',
      description: 'LLM copilots that automate workflows with guardrails and observability',
      icon: FaBolt,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Image Background */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop"
            alt="AI Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6 flex-wrap animate-fade-in">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaBolt /> Production AI
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaMagic /> Applied Research
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaGem /> Enterprise-Grade
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[120px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-fade-in">
              Applied AI/ML studio focused on content intelligence, personalization, and predictive analytics—built with production rigor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link 
                to="/about" 
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
              >
                How We Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-600 mb-2">AI/ML Foundation</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                Built for modern product teams
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-xl">
              We apply AI where it matters—content, personalization, and analytics—paired with data plumbing, MLOps, and experimentation discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={index} 
                  className="card p-8 text-center group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-4xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop" 
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's design and deploy the AI systems that will move your metrics this quarter
            </p>
            <Link 
              to="/contact" 
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-110 transition-all duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
