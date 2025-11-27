import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCloud, FaBrain, FaCog, FaUsers, FaLightbulb, FaWrench, FaChartBar, FaBolt, FaMagic, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      id: 'content-optimization',
      title: 'Content Intelligence & Optimization',
      icon: FaMagic,
      description: 'Ship content that ranks and converts with LLM-assisted workflows and feedback loops.',
      features: [
        'Automated tagging, summarization, and metadata enrichment',
        'SEO scoring, intent clustering, and topic coverage insights',
        'Multilingual generation with brand-safe guardrails',
        'A/B testing hooks for copy, layout, and CTAs',
        'Editorial workflow automation and CMS integrations',
        'Real-time performance feedback loops',
      ],
      technologies: ['OpenAI/Anthropic', 'LangChain', 'Next.js', 'Vector DBs', 'Python', 'Airflow'],
    },
    {
      id: 'recommendations',
      title: 'Recommendation Systems',
      icon: FaBrain,
      description: 'Personalization engines tuned for engagement, retention, and revenue KPIs.',
      features: [
        'User and item embeddings with real-time feature stores',
        'Ranking pipelines combining content and behavioral signals',
        'Contextual and session-based recommendations',
        'A/B experimentation frameworks and guardrails',
        'Cold-start strategies and catalog enrichment',
        'Edge delivery for low-latency experiences',
      ],
      technologies: ['PyTorch/TensorFlow', 'Kafka', 'Redis', 'TypeScript', 'GraphQL', 'AWS/GCP'],
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics & Insights',
      icon: FaChartLine,
      description: 'Forward-looking analytics with explainability and decision support built in.',
      features: [
        'Churn, LTV, and propensity modeling for lifecycle marketing',
        'Demand and revenue forecasting with anomaly detection',
        'Attribution and marketing mix modeling',
        'Customer journey analytics and cohorting',
        'Executive dashboards with governed metrics layers',
        'Data quality monitoring and alerting',
      ],
      technologies: ['dbt', 'Snowflake/BigQuery', 'Python', 'Time-series models', 'Metabase/Looker', 'Airflow'],
    },
    {
      id: 'automation',
      title: 'AI Agents & Workflow Automation',
      icon: FaBolt,
      description: 'Retrieval-augmented agents that resolve support, ops, and growth work with traceability.',
      features: [
        'RAG chat experiences with domain-aware retrieval',
        'Orchestration across CRMs, helpdesks, and data warehouses',
        'Human-in-the-loop review queues and approvals',
        'Hallucination and safety guardrails with evaluations',
        'Observability for latency, cost, and quality',
        'Playbooks for onboarding, support deflection, and sales enablement',
      ],
      technologies: ['LLMs', 'LangChain', 'FastAPI', 'Pinecone', 'Docker/Kubernetes', 'OpenTelemetry'],
    },
  ];

  const additionalServices = [
    {
      title: 'MLOps & Model Operations',
      description: 'CI/CD for models, evaluation suites, feature stores, and production monitoring.',
      icon: FaCog,
    },
    {
      title: 'Data Engineering & Warehousing',
      description: 'Ingestion, dbt pipelines, data contracts, and unified metrics layers.',
      icon: FaCloud,
    },
    {
      title: 'Experimentation & CRO',
      description: 'A/B testing design, feature flag rollouts, and uplift modeling.',
      icon: FaChartBar,
    },
    {
      title: 'Analytics Engineering',
      description: 'Self-serve dashboards, governed KPIs, and semantic layers for teams.',
      icon: FaChartLine,
    },
    {
      title: 'AI Readiness & Strategy',
      description: 'Use-case discovery, ROI modeling, and responsible AI guidelines.',
      icon: FaLightbulb,
    },
    {
      title: 'Security & Compliance',
      description: 'PII handling, SOC2-ready controls, and red-team testing for AI systems.',
      icon: FaShieldAlt,
    },
    {
      title: 'Product Enablement',
      description: 'Playbooks, training, and change management to operationalize AI.',
      icon: FaUsers,
    },
    {
      title: 'Lifecycle Automation',
      description: 'Trigger-based journeys across marketing, sales, and support stacks.',
      icon: FaWrench,
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
                <FaBolt /> Production AI
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaMagic /> Experiment Driven
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
                <FaShieldAlt /> Secure & Compliant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI/ML Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Applied AI services for content optimization, personalization, analytics, and automation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              AI/ML Solution Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment, we design, build, and operate AI systems that move your metrics
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
              Supporting capabilities to keep your AI products reliable, measurable, and secure
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
              Let's design, launch, and scale AI products that drive measurable outcomes
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

