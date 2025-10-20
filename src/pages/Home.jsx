import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHospital, FaChartLine, FaShoppingCart, FaCloud, FaLaptopCode, FaMobileAlt, FaGlobe, FaBrain, FaPalette, FaRocket, FaClock, FaSmile, FaStar, FaBolt, FaMagic, FaGem } from 'react-icons/fa';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building Digital Solutions That Transform Businesses';
  
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
      title: 'Healthcare',
      description: 'HIPAA-compliant solutions for modern healthcare delivery',
      icon: FaHospital,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Fintech',
      description: 'Secure and scalable financial technology platforms',
      icon: FaChartLine,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'E-commerce',
      description: 'High-performance online retail experiences',
      icon: FaShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SaaS',
      description: 'Cloud-based software solutions that scale',
      icon: FaCloud,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered', icon: FaRocket },
    { number: '12+', label: 'Years Experience', icon: FaClock },
    { number: '50+', label: 'Happy Clients', icon: FaSmile },
    { number: '98%', label: 'Client Satisfaction', icon: FaStar },
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions built from the ground up to meet your unique business needs.',
      icon: FaLaptopCode,
      color: 'blue',
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: FaMobileAlt,
      color: 'purple',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge technologies.',
      icon: FaGlobe,
      color: 'cyan',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps implementation.',
      icon: FaCloud,
      color: 'indigo',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and ML algorithms.',
      icon: FaBrain,
      color: 'pink',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      icon: FaPalette,
      color: 'orange',
    },
  ];

  const featuredProjects = [
    {
      name: 'Pet Moment',
      description: 'AI-powered platform transforming pet photos into personalized products',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop',
      tags: ['AI/ML', 'E-commerce', 'React'],
    },
    {
      name: 'Therify',
      description: 'Mental health platform connecting employees with in-network therapists',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'React Native'],
    },
    {
      name: 'Shoplazza',
      description: 'All-in-one commerce solution for building and managing retail businesses',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'SaaS', 'Vue.js'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Image Background */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop" 
            alt="Software Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6 flex-wrap animate-fade-in">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaBolt /> Fast Delivery
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaMagic /> High Quality
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
              Professional software agency delivering exceptional solutions for healthcare, fintech, e-commerce, and SaaS industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link 
                to="/projects" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                View Our Work
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                >
                  <div className="text-5xl mb-2 group-hover:animate-bounce"><IconComponent /></div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:text-secondary-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple sectors, delivering tailored solutions that drive innovation
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services to bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="card p-8 group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary-500 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4 text-primary-600 group-hover:scale-125 transition-transform duration-300"><IconComponent /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="w-16 h-1 bg-primary-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary transform hover:scale-105 transition-all duration-300">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from our recent work across different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="card overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary transform hover:scale-105 transition-all duration-300">
              View All Projects
            </Link>
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
              Let's discuss how we can help transform your ideas into reality
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
