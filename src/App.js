import React, { useState } from 'react';
import {
  FaBolt,
  FaMagic,
  FaChartLine,
  FaBrain,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const capabilities = [
  {
    title: 'Content Intelligence',
    description: 'LLM-powered tagging, scoring, multilingual generation, and CMS-native workflows.',
    icon: FaMagic,
    gradient: 'from-blue-500 via-sky-500 to-cyan-400',
    bullets: ['SEO-grade briefs', 'Guardrailed generation', 'Performance feedback loops'],
  },
  {
    title: 'Personalization',
    description: 'Real-time recommendations that adapt to every visitor and session context.',
    icon: FaBrain,
    gradient: 'from-amber-500 via-orange-500 to-rose-400',
    bullets: ['Hybrid ranking', 'Session-aware delivery', 'A/B experimentation hooks'],
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecasting, anomaly detection, and KPI observability with explainability.',
    icon: FaChartLine,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bullets: ['Churn & LTV', 'Demand forecasting', 'Metrics layer dashboards'],
  },
  {
    title: 'AI Agents & Automation',
    description: 'Retrieval-augmented copilots with human-in-the-loop guardrails and tracing.',
    icon: FaBolt,
    gradient: 'from-violet-500 via-indigo-500 to-sky-500',
    bullets: ['RAG chat', 'Workflow orchestration', 'Cost/quality observability'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discover & Frame',
    description: 'Align on KPIs, data readiness, and the fastest path to measurable lift.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'Experience, data, and model design with tight feedback from stakeholders.',
  },
  {
    step: '03',
    title: 'Build & Validate',
    description: 'Ship guarded, observable AI with evaluations, feature stores, and CI/CD.',
  },
  {
    step: '04',
    title: 'Launch & Operate',
    description: 'Production rollout with dashboards, runbooks, and continuous improvement.',
  },
];

const work = [
  {
    title: 'Content performance up 38%',
    description: 'Multilingual content intelligence platform with LLM scoring and A/B hooks.',
    tag: 'Media & Publishing',
  },
  {
    title: 'Retention lift of 12%',
    description: 'Real-time recommendations powered by embeddings and session signals.',
    tag: 'Commerce',
  },
  {
    title: 'Ops automation at scale',
    description: 'RAG agents orchestrating support, CRM, and warehouse systems with guardrails.',
    tag: 'Platform',
  },
];

const team = [
  {
    name: 'Danny Liu',
    role: 'Founder',
    bio: 'Applied AI leader focused on measurable lifts for content-rich products.',
    image: '/images/team/danny-liu.png',
  },
  {
    name: 'Kevin Kuhn',
    role: 'Founder',
    bio: 'Engineering and MLOps specialist delivering durable AI systems.',
    image: '/images/team/kevin-kuhn.png',
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out. We will reply within one business day.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="flex-grow">
        <section id="hero" className="relative overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
          <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="section-container relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <FaShieldAlt /> Applied AI/ML studio for modern product teams
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                Building production AI that learns from every interaction.
              </h1>
              <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl">
                Content intelligence, personalization, predictive analytics, and AI agents—designed with
                experimentation discipline, guardrails, and MLOps rigor.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
                >
                  Talk to us
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-300/20 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-300/30 hover:border-cyan-200 transition-colors"
                >
                  View capabilities <FaArrowRight className="text-cyan-200" />
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                {[
                  { label: 'Production launches', value: '40+' },
                  { label: 'Avg. impact window', value: '12 weeks' },
                  { label: 'Models deployed', value: '80+' },
                  { label: 'Uptime target', value: '99.9%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="text-sm text-slate-200/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20 bg-slate-900/60">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">What we ship</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Capabilities built for impact</h2>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <FaClock className="text-cyan-300" /> <span>Launch-ready in weeks, not quarters</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${cap.gradient} flex items-center justify-center text-xl text-white`}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{cap.title}</h3>
                        <p className="text-sm text-slate-200/80">{cap.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cap.bullets.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100"
                        >
                          <FaCheckCircle className="text-cyan-300" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="section-container">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">How we deliver</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">From framing to reliable operations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3 text-cyan-300 font-semibold text-sm">
                    <span className="text-base">{step.step}</span>
                    <span className="h-px flex-1 bg-white/20" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-slate-200/80 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-20 bg-slate-900/60">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Proof</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Recent outcomes</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">
                <FaUsers className="text-cyan-300" /> Embedded with product, data, and marketing teams
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {work.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg shadow-slate-900/50"
                >
                  <div className="text-sm text-cyan-300 mb-3">{item.tag}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-200/80 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center text-sm text-white/80">
                    <span>See how</span>
                    <FaArrowRight className="ml-2 text-cyan-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="section-container">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Who you work with</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Senior team, hands-on delivery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-4 items-start"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-16 w-16 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-cyan-300 text-sm">{person.role}</p>
                    <p className="text-slate-200/80 text-sm mt-2">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
          <div className="absolute right-10 -top-12 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Start a project</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Tell us about the product, metric, or workflow you need to move.
                </h2>
                <p className="text-slate-200/80">
                  We respond within one business day. If there’s a fit, we propose a lightweight discovery sprint to
                  frame KPIs, data readiness, and the fastest path to value.
                </p>
                <div className="space-y-3 text-slate-200/90">
                  {[
                    'AI/ML product design and delivery',
                    'LLM agents, RAG, and automation',
                    'Personalization and recommendations',
                    'Predictive analytics and metrics layers',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-300" /> <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/50">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="Company or team"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="message">
                      What do you want to build?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Goals, KPIs, timelines"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full bg-white text-slate-900 hover:bg-slate-100"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

