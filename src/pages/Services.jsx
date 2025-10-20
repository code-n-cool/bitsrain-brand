import React from 'react';
import { Link } from 'react-router-dom';
import { FaHospital, FaChartLine, FaShoppingCart, FaCloud, FaLaptopCode, FaMobileAlt, FaGlobe, FaBrain, FaPalette, FaCog, FaCheckCircle, FaUsers, FaLightbulb, FaWrench, FaChartBar, FaBolt, FaMagic, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      icon: FaHospital,
      description: 'HIPAA-compliant healthcare software that improves patient care and streamlines operations',
      features: [
        'Electronic Health Records (EHR) systems',
        'Telemedicine platforms',
        'Patient portal development',
        'Healthcare analytics and reporting',
        'Medical device integration',
        'HIPAA compliance consulting',
      ],
      technologies: ['React', 'Node.js', 'FHIR', 'HL7', 'AWS', 'PostgreSQL'],
    },
    {
      id: 'fintech',
      title: 'Fintech Development',
      icon: FaChartLine,
      description: 'Secure, scalable financial technology solutions that meet regulatory requirements',
      features: [
        'Payment gateway integration',
        'Banking applications',
        'Investment platforms',
        'Cryptocurrency solutions',
        'Fraud detection systems',
        'PCI DSS compliance',
      ],
      technologies: ['React Native', 'Python', 'Blockchain', 'MongoDB', 'Azure', 'Redis'],
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platforms',
      icon: FaShoppingCart,
      description: 'High-performance e-commerce solutions that drive sales and enhance customer experience',
      features: [
        'Custom e-commerce platforms',
        'Multi-vendor marketplaces',
        'Shopping cart development',
        'Payment processing integration',
        'Inventory management systems',
        'Mobile commerce apps',
      ],
      technologies: ['Vue.js', 'Next.js', 'Shopify', 'WooCommerce', 'Stripe', 'MySQL'],
    },
    {
      id: 'saas',
      title: 'SaaS Products',
      icon: FaCloud,
      description: 'Cloud-based SaaS applications designed for scalability and performance',
      features: [
        'Multi-tenant architecture',
        'Subscription management',
        'API development',
        'Real-time collaboration tools',
        'Analytics dashboards',
        'Third-party integrations',
      ],
      technologies: ['React', 'GraphQL', 'Kubernetes', 'Microservices', 'AWS', 'Docker'],
    },
  ];

  const additionalServices = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions built from scratch to meet your unique business requirements',
      icon: FaLaptopCode,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: FaMobileAlt,
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications using the latest frameworks',
      icon: FaGlobe,
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration, architecture design, and managed cloud services',
      icon: FaCloud,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics powered by AI',
      icon: FaBrain,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences',
      icon: FaPalette,
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      icon: FaCog,
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing services to ensure bug-free software',
      icon: FaCheckCircle,
    },
    {
      title: 'Staff Augmentation',
      description: 'Skilled developers to extend your in-house team capabilities',
      icon: FaUsers,
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology strategy and architecture',
      icon: FaLightbulb,
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and enhancement of existing applications',
      icon: FaWrench,
    },
    {
      title: 'Product Strategy',
      description: 'Strategic planning and roadmap development for your product',
      icon: FaChartBar,
    },
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive interfaces and interactive prototypes for validation.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development sprints with regular updates and continuous integration.',
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across multiple devices and scenarios to ensure quality.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment to production with monitoring and optimization.',
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your software running smoothly.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=600&fit=crop" 
            alt="Software Services"
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
                <FaShieldAlt /> Secure & Compliant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Comprehensive software development services tailored to your industry
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in key industries with specialized knowledge and compliance requirements
            </p>
          </div>
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl mb-4 text-primary-600"><service.icon /></div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? '1576091160550-2173dba999ef'
                          : index === 1
                          ? '1563013544-824ae1b704d3'
                          : index === 2
                          ? '1557821552-17105176677c'
                          : '1551434678-e076c223a692'
                      }?w=600&h=400&fit=crop`}
                      alt={service.title}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology services to support every aspect of your digital journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card p-6 hover:border-primary-500 border-2 border-transparent">
                  <div className="text-4xl mb-3 text-primary-600"><IconComponent /></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="card p-8">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </Link>
              <Link to="/projects" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

