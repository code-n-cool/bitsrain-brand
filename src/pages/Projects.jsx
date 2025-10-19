import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Pet Moment',
      category: 'ecommerce',
      industry: 'E-commerce / AI',
      tagline: 'Transform Your Pet Photos into Timeless Art',
      shortDescription: 'AI-powered platform transforming pet photographs into personalized, high-quality products with advanced machine learning.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS Lambda'],
      year: '2024',
    },
    {
      id: 2,
      name: 'Therify',
      category: 'healthcare',
      industry: 'Healthcare / Mental Health',
      tagline: 'Connecting Employees with In-Network Mental Health Care',
      shortDescription: 'HIPAA-compliant mental health platform matching employees with culturally-aligned in-network therapists.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC'],
      year: '2023',
    },
    {
      id: 3,
      name: 'Shoplazza',
      category: 'ecommerce',
      industry: 'E-commerce / SaaS',
      tagline: 'All-in-One Commerce Solution for Modern Retailers',
      shortDescription: 'Comprehensive SaaS e-commerce platform enabling businesses to build, manage, and scale online retail operations.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'Kubernetes', 'PostgreSQL'],
      year: '2023',
    },
    {
      id: 4,
      name: 'SecurePay Finance',
      category: 'fintech',
      industry: 'Fintech / Payments',
      tagline: 'Next-Generation Payment Processing Platform',
      shortDescription: 'High-volume payment processing platform with advanced fraud detection and multi-currency support.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['Python', 'Go', 'MongoDB', 'Kafka'],
      year: '2024',
    },
    {
      id: 5,
      name: 'HealthTrack Pro',
      category: 'healthcare',
      industry: 'Healthcare / EHR',
      tagline: 'Modern Electronic Health Records System',
      shortDescription: 'Cloud-based HIPAA-compliant EHR system for medical practices with patient management and clinical documentation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['React', 'Python', 'PostgreSQL', 'FHIR'],
      year: '2023',
    },
    {
      id: 6,
      name: 'CloudDocs Collaboration',
      category: 'saas',
      industry: 'SaaS / Productivity',
      tagline: 'Real-Time Document Collaboration Platform',
      shortDescription: 'Modern document collaboration platform with real-time editing, version control, and team commenting features.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      year: '2024',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="pt-20">
      <section className="gradient-bg text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Real-world success stories from our portfolio of innovative solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-primary-600 font-semibold text-sm mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something amazing together
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
