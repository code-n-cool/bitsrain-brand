import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaHandshake, FaRocket, FaBolt, FaMagic, FaTrophy, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      title: 'Applied Research',
      description: 'We turn emerging AI/ML breakthroughs into production-grade capabilities that solve real business problems.',
      icon: FaLightbulb,
    },
    {
      title: 'Responsible AI',
      description: 'Safety guardrails, human oversight, and transparent evaluations are built into every engagement.',
      icon: FaShieldAlt,
    },
    {
      title: 'Outcome Obsession',
      description: 'Experiments, KPIs, and dashboards keep us focused on measurable lifts - not vanity demos.',
      icon: FaRocket,
    },
    {
      title: 'Long-Term Partnership',
      description: 'We build alongside your teams, leaving playbooks and enablement so AI keeps delivering after launch.',
      icon: FaHandshake,
    },
  ];

  const milestones = [
    { year: '2019', event: 'Founded as AI Studio', description: 'Started as a boutique focused on recommendation and analytics prototypes' },
    { year: '2021', event: 'First Production Recommender', description: 'Launched real-time personalization for a digital commerce brand' },
    { year: '2022', event: 'Content Intelligence Platform', description: 'Shipped multilingual content optimization with human-in-the-loop guardrails' },
    { year: '2023', event: 'MLOps Practice', description: 'Standardized evaluation, monitoring, and compliance playbooks for AI workloads' },
    { year: '2024', event: 'LLM Agents at Scale', description: 'Deployed RAG-powered support assistants across five markets' },
    { year: '2025', event: '40+ Models in Production', description: 'Operating AI systems across content, recommendations, analytics, and automation' },
  ];

  const expertise = [
    { name: 'LLM Engineering & RAG Systems', level: 93 },
    { name: 'Recommendation Systems', level: 91 },
    { name: 'Predictive Modeling & Forecasting', level: 90 },
    { name: 'MLOps (MLflow, Kubernetes, CI/CD)', level: 90 },
    { name: 'Data Engineering (dbt, Airflow)', level: 88 },
    { name: 'Full-Stack for AI Products (Next.js/React)', level: 85 },
  ];

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop"
            alt="About BitsRain AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BitsRain AI
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Applied AI/ML studio building personalization, analytics, and automation for content-rich brands
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
                  BitsRain was born as an AI-first studio focused on turning machine learning research into products that matter. We cut our teeth on recommendation systems and predictive analytics, where measurable lifts are the only thing that counts.
                </p>
                <p>
                  Today we partner with product, marketing, and data teams to ship content intelligence, personalization, and automation platforms. Every engagement blends experimentation, robust engineering, and responsible AI practices.
                </p>
                <p>
                  Our cross-functional team of ML engineers, data scientists, designers, and product strategists rally around one goal: deploy AI that improves the metrics you care about - and make it sustainable for your teams to run.
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
              Our Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we build and operate production AI responsibly
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
              Depth across the AI stack, from data to front-end experiences
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
              Let's build AI that your teams can launch, measure, and trust
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
