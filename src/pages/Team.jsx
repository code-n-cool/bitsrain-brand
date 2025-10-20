import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaPalette, FaChartBar, FaCheckCircle, FaCog, FaGlobeAmericas, FaDollarSign, FaHeart, FaBookOpen, FaRocket, FaGift, FaBolt, FaMagic, FaBullseye } from 'react-icons/fa';

const Team = () => {
  const leadership = [
    {
      name: 'Danny Liu',
      role: 'CEO & Co-Founder',
      bio: 'Visionary entrepreneur with a passion for innovative technology solutions. Leading BitsRain to deliver exceptional software that transforms businesses across industries.',
      image: '/images/team/danny-liu.jpg',
      linkedin: 'https://linkedin.com/in/bitsrain',
      twitter: 'https://x.com/bitsrain',
    },
    {
      name: 'Kevin Kuhn',
      role: 'CTO',
      bio: 'Technical leader with expertise in scalable architecture and cutting-edge development practices. Drives our engineering excellence and technological innovation.',
      image: '/images/team/kevin-kuhn.png',
      linkedin: 'https://linkedin.com/in/bitsrain',
      twitter: 'https://x.com/bitsrain',
    },
  ];

  const departments = [
    { name: 'Engineering', count: 8, icon: FaLaptopCode },
    { name: 'Design', count: 5, icon: FaPalette },
    { name: 'Product', count: 2, icon: FaChartBar },
    { name: 'QA', count: 3, icon: FaCheckCircle },
    { name: 'DevOps', count: 3, icon: FaCog },
  ];

  const benefits = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours',
      icon: FaGlobeAmericas,
    },
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and equity packages',
      icon: FaDollarSign,
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: FaHeart,
    },
    {
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance',
      icon: FaBookOpen,
    },
    {
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies',
      icon: FaRocket,
    },
    {
      title: 'Team Activities',
      description: 'Regular team building and social events',
      icon: FaGift,
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=600&fit=crop" 
            alt="Professional Team"
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
                <FaRocket /> Innovation-Driven
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Expert leaders driving excellence in software development
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-xl"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 mb-6">{leader.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a
                    href={leader.twitter}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <span className="text-sm font-bold">𝕏</span>
                  </a>
                </div>
              </div>
            ))}
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
              What makes us a leading software agency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="text-6xl mb-4 text-primary-600"><FaBolt /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Rapid development cycles with agile methodologies. We deliver quality software faster than traditional agencies.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-6xl mb-4 text-primary-600"><FaMagic /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High Quality</h3>
              <p className="text-gray-600">
                Enterprise-grade code standards, comprehensive testing, and meticulous attention to detail in every project.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-6xl mb-4 text-primary-600"><FaBullseye /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our priority. We work closely with you to ensure every solution exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals across different specializations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-5xl mb-3 text-primary-600"><dept.icon /></div>
                <h3 className="font-bold text-gray-900 mb-1">{dept.name}</h3>
                <p className="text-3xl font-bold text-primary-600">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join BitsRain?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people and create an environment where they can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8">
                <div className="text-5xl mb-4 text-primary-600"><benefit.icon /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop" 
            alt="Join Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              We're always looking for talented individuals to join our growing team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                View Open Positions
              </Link>
              <a
                href="mailto:danny@bitsrain.com"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

