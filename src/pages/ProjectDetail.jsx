import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectsData = {
    1: {
      name: 'Pet Moment',
      industry: 'E-commerce / AI',
      tagline: 'Transform Your Pet Photos into Timeless Art',
      year: '2024',
      teamSize: '6 developers, 2 designers, 1 QA',
      duration: '6 months',
      description: 'Pet Moment is an innovative AI-powered platform that transforms beloved pet photographs into personalized, high-quality products. The platform uses advanced machine learning algorithms to enhance and stylize pet photos, offering customers unique merchandise including canvas prints, custom portraits, and personalized gifts.',
      challenges: [
        {
          title: 'AI Image Processing',
          description: 'Processing high-resolution images through AI models in real-time while maintaining quality and color accuracy across different pet breeds and photo conditions.',
        },
        {
          title: 'Scalable E-commerce Platform',
          description: 'Building a system capable of handling thousands of simultaneous image uploads and processing requests during peak times.',
        },
        {
          title: 'Real-time Preview Generation',
          description: 'Providing instant visual feedback to customers showing how their pet photos will look on different products.',
        },
        {
          title: 'Payment Integration',
          description: 'Implementing secure, multi-currency payment processing with support for various payment methods.',
        },
      ],
      solution: 'We developed a robust full-stack solution using React for the frontend and Node.js microservices backend. Implemented AWS Lambda for serverless image processing, integrated Stripe for secure payments, and utilized TensorFlow for AI-powered image enhancement. The platform features real-time preview generation, automated quality checks, and a comprehensive order management system.',
      results: [
        '500K+ photos processed in first year',
        '95% customer satisfaction rate',
        'Average processing time under 30 seconds',
        '45% increase in conversion rate with AI preview feature',
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS Lambda', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=600&fit=crop',
      link: 'https://petmoment.ai',
    },
    2: {
      name: 'Therify',
      industry: 'Healthcare / Mental Health',
      tagline: 'Connecting Employees with In-Network Mental Health Care',
      year: '2023',
      teamSize: '8 developers, 2 designers, 2 QA, 1 compliance officer',
      duration: '8 months',
      description: 'Therify is a comprehensive mental health platform that matches employees with in-network therapists who align with their cultural background, identity, and therapeutic needs. The platform streamlines the process of finding quality mental health care while maximizing insurance benefits.',
      challenges: [
        {
          title: 'HIPAA Compliance & Security',
          description: 'Implementing end-to-end encryption and comprehensive audit logging to protect sensitive patient data while meeting all HIPAA requirements.',
        },
        {
          title: 'Intelligent Matching Algorithm',
          description: 'Developing sophisticated algorithms that consider cultural factors, therapeutic specialties, insurance networks, and real-time availability.',
        },
        {
          title: 'Insurance Verification',
          description: 'Integrating with major insurance providers for real-time benefit verification and network status checking.',
        },
        {
          title: 'Telehealth Video Platform',
          description: 'Building encrypted, HIPAA-compliant video conferencing with reliable connectivity and quality across different network conditions.',
        },
      ],
      solution: 'Built a HIPAA-compliant platform using React Native for cross-platform mobile apps and a secure Node.js backend. Implemented sophisticated matching algorithms considering cultural factors, specialties, insurance networks, and availability. Integrated with major insurance providers for real-time benefit verification, and developed a telehealth solution with encrypted video conferencing.',
      results: [
        'Connected 50,000+ employees with therapists',
        'Average match satisfaction score of 4.8/5',
        '78% of users found a therapist within 48 hours',
        '40% reduction in time to first appointment',
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'FHIR', 'HL7', 'Twilio'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
      link: 'https://therify.co',
    },
    3: {
      name: 'Shoplazza',
      industry: 'E-commerce / SaaS',
      tagline: 'All-in-One Commerce Solution for Modern Retailers',
      year: '2023',
      teamSize: '12 developers, 3 designers, 3 QA, 2 DevOps',
      duration: '10 months',
      description: 'Shoplazza is a comprehensive SaaS e-commerce platform that enables businesses to build, manage, and scale their online retail operations. The platform offers powerful tools for store management, inventory control, marketing automation, and multi-channel selling.',
      challenges: [
        {
          title: 'Multi-Tenant Architecture',
          description: 'Building a scalable system handling thousands of stores with varying traffic patterns while ensuring complete data isolation and security.',
        },
        {
          title: 'High-Performance Infrastructure',
          description: 'Maintaining 99.9% uptime and fast response times even during peak seasons with millions of daily transactions.',
        },
        {
          title: 'Extensive Third-Party Integrations',
          description: 'Supporting multiple payment gateways, shipping providers, and creating a plugin system for third-party developers.',
        },
        {
          title: 'Real-Time Analytics Dashboard',
          description: 'Providing store owners with comprehensive, real-time insights into sales, inventory, and customer behavior.',
        },
      ],
      solution: 'Developed a scalable microservices architecture using Vue.js frontend and Node.js backend services. Implemented Kubernetes for container orchestration, Redis for caching, and PostgreSQL with separate schemas for tenant isolation. Created a plugin system allowing third-party developers to extend functionality, and built a comprehensive admin dashboard with real-time analytics.',
      results: [
        '10,000+ active stores on the platform',
        '99.9% uptime achieved',
        'Processing $500M+ in GMV annually',
        'Handles 1M+ daily transactions during peak seasons',
      ],
      technologies: ['Vue.js', 'Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'Elasticsearch', 'GraphQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop',
      link: 'https://shoplazza.com',
    },
    4: {
      name: 'SecurePay Finance',
      industry: 'Fintech / Payments',
      tagline: 'Next-Generation Payment Processing Platform',
      year: '2024',
      teamSize: '10 developers, 1 designer, 2 QA, 3 DevOps, 1 security specialist',
      duration: '12 months',
      description: 'A comprehensive payment processing platform designed for high-volume transactions with advanced fraud detection and multi-currency support. The platform serves both B2B and B2C markets with a focus on security and compliance.',
      challenges: [
        {
          title: 'High-Volume Transaction Processing',
          description: 'Building infrastructure capable of processing thousands of transactions per second with sub-second latency while maintaining data consistency.',
        },
        {
          title: 'PCI DSS Compliance',
          description: 'Implementing comprehensive security measures to meet PCI DSS Level 1 requirements for handling sensitive payment card data.',
        },
        {
          title: 'AI-Powered Fraud Detection',
          description: 'Developing machine learning models that identify fraudulent transactions in real-time without impacting legitimate transactions.',
        },
        {
          title: 'Multi-Currency & Payment Methods',
          description: 'Supporting 150+ currencies and integrating with major card networks and alternative payment methods across different regions.',
        },
      ],
      solution: 'Built a distributed system using microservices architecture with Python and Go for high-performance transaction processing. Implemented machine learning models for fraud detection, integrated with major card networks and alternative payment methods, and created a comprehensive API for merchant integration.',
      results: [
        'Processing 50M+ transactions monthly',
        'Fraud detection accuracy of 99.2%',
        'Average transaction processing time of 800ms',
        'Supporting 150+ currencies',
      ],
      technologies: ['Python', 'Go', 'MongoDB', 'Kafka', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop',
    },
    5: {
      name: 'HealthTrack Pro',
      industry: 'Healthcare / EHR',
      tagline: 'Modern Electronic Health Records System',
      year: '2023',
      teamSize: '7 developers, 2 designers, 2 QA, 1 compliance officer',
      duration: '9 months',
      description: 'A cloud-based EHR system designed for small to medium-sized medical practices, offering patient management, appointment scheduling, billing, and clinical documentation in one integrated platform.',
      challenges: [
        {
          title: 'Legacy Data Migration',
          description: 'Migrating millions of patient records from legacy systems while ensuring data integrity and zero downtime during transition.',
        },
        {
          title: 'Offline-First Architecture',
          description: 'Building a system that works seamlessly offline for areas with unreliable internet, with automatic synchronization when connectivity returns.',
        },
        {
          title: 'HIPAA Compliance & Security',
          description: 'Implementing end-to-end encryption, comprehensive audit logging, and access controls to meet strict healthcare regulations.',
        },
        {
          title: 'Healthcare System Integration',
          description: 'Integrating with major lab systems, pharmacies, and insurance providers using HL7 and FHIR interoperability standards.',
        },
      ],
      solution: 'Created a progressive web app using React with offline-first architecture. Implemented end-to-end encryption for sensitive data, built a comprehensive audit logging system, and integrated with major lab systems and pharmacies using HL7 and FHIR standards.',
      results: [
        'Adopted by 500+ medical practices',
        'Managing 2M+ patient records',
        'Reduced documentation time by 35%',
        '100% HIPAA compliance record',
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'FHIR', 'HL7', 'AWS', 'PWA', 'Redis'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    },
    6: {
      name: 'CloudDocs Collaboration',
      industry: 'SaaS / Productivity',
      tagline: 'Real-Time Document Collaboration Platform',
      year: '2024',
      teamSize: '9 developers, 3 designers, 2 QA, 2 DevOps',
      duration: '8 months',
      description: 'A modern document collaboration platform enabling teams to create, edit, and share documents in real-time with advanced version control and commenting features.',
      challenges: [
        {
          title: 'Real-Time Collaborative Editing',
          description: 'Implementing operational transformation algorithms to handle hundreds of simultaneous editors per document without conflicts or data loss.',
        },
        {
          title: 'Cross-Device Synchronization',
          description: 'Ensuring seamless document synchronization across desktop, mobile, and web platforms with instant updates.',
        },
        {
          title: 'Advanced Permission System',
          description: 'Building sophisticated role-based access control with granular permissions for viewing, editing, commenting, and sharing.',
        },
        {
          title: 'Version Control & History',
          description: 'Implementing comprehensive version tracking allowing users to review, compare, and restore any previous document state.',
        },
      ],
      solution: 'Implemented operational transformation algorithms for conflict-free real-time editing, used WebSocket connections for instant updates, and created a sophisticated permission system with role-based access control.',
      results: [
        '1M+ active users',
        'Supporting teams in 100+ countries',
        'Processing 5M+ document edits daily',
        '99.95% uptime',
      ],
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Redis', 'Elasticsearch', 'Kubernetes', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
    },
  };

  const project = projectsData[id] || projectsData[1];

  return (
    <div className="pt-20">
      <section className="relative h-96 bg-gray-900">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="section-container relative h-full flex items-end pb-12">
          <div className="max-w-4xl">
            <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">
              {project.industry}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-primary-100 mb-4">{project.tagline}</p>
            <span className="text-gray-300">{project.year}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Project</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Team Size</div>
                  <div className="font-bold text-gray-900">{project.teamSize}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="font-bold text-gray-900">{project.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Year</div>
                  <div className="font-bold text-gray-900">{project.year}</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenges</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-600">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{project.solution}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-xl">
                    <svg
                      className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-900 font-semibold">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Live Project
                </a>
                <Link to="/projects" className="btn-secondary">
                  Back to Projects
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Want Similar Results for Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life
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

export default ProjectDetail;

