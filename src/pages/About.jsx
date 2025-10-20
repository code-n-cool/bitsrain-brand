import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaStar, FaHandshake, FaRocket, FaBolt, FaMagic, FaTrophy } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.',
      icon: FaLightbulb,
    },
    {
      title: 'Quality Excellence',
      description: 'Every line of code we write undergoes rigorous testing and review to ensure the highest quality standards.',
      icon: FaStar,
    },
    {
      title: 'Client Partnership',
      description: 'We believe in building long-term relationships based on trust, transparency, and mutual success.',
      icon: FaHandshake,
    },
    {
      title: 'Agile Approach',
      description: 'Our flexible methodology allows us to adapt quickly to changing requirements and deliver value iteratively.',
      icon: FaRocket,
    },
  ];

  const milestones = [
    { year: '2011', event: 'Company Founded', description: 'Started with a vision to transform software development' },
    { year: '2014', event: 'First Healthcare Project', description: 'Launched our first HIPAA-compliant healthcare platform' },
    { year: '2017', event: 'Fintech Expansion', description: 'Entered fintech market with secure payment solutions' },
    { year: '2020', event: '100+ Projects', description: 'Reached milestone of 100 successful project deliveries' },
    { year: '2023', event: 'AI Integration', description: 'Launched AI and machine learning practice division' },
    { year: '2025', event: 'Global Presence', description: 'Serving clients across 25+ countries worldwide' },
  ];

  const expertise = [
    { name: 'React & React Native', level: 95 },
    { name: 'Node.js & Python', level: 90 },
    { name: 'Cloud Architecture (AWS/Azure)', level: 88 },
    { name: 'AI & Machine Learning', level: 85 },
    { name: 'DevOps & CI/CD', level: 92 },
    { name: 'Mobile Development', level: 90 },
  ];

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop" 
            alt="About Our Company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaBolt /> Fast Delivery
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaMagic /> High Quality
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaTrophy /> Award-Winning
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BitsRain
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Transforming businesses through innovative software solutions since 2011
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2011, BitsRain began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service software development agency with expertise spanning multiple industries.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, growing businesses, and established enterprises across healthcare, fintech, e-commerce, and SaaS sectors. Our commitment to excellence and innovation has earned us the trust of clients worldwide.
                </p>
                <p>
                  Today, we're proud to be a team of over 50 talented professionals, including developers, designers, project managers, and QA specialists, all dedicated to delivering exceptional software solutions that drive real business results.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="text-6xl mb-4 text-primary-600"><IconComponent /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our growth and evolution
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mastery across modern technologies and frameworks
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {expertise.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="font-semibold text-primary-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                View Our Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

