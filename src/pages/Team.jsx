import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadership = [
    {
      name: 'Danny Liu',
      role: 'CEO & Co-Founder',
      bio: 'Visionary entrepreneur with a passion for innovative technology solutions. Leading BitsRain to deliver exceptional software that transforms businesses across industries.',
      image: 'https://danny-liu-dev.github.io/img/profile.jpg',
      linkedin: 'https://linkedin.com/in/bitsrain',
      twitter: 'https://x.com/bitsrain',
    },
    {
      name: 'Kevin Kuhn',
      role: 'CTO',
      bio: 'Technical leader with expertise in scalable architecture and cutting-edge development practices. Drives our engineering excellence and technological innovation.',
      image: '/images/team/kevin-park-anime.jpg',
      linkedin: 'https://linkedin.com/in/bitsrain',
      twitter: 'https://x.com/bitsrain',
    },
  ];

  const teamMembers = [
    {
      name: 'David Chen',
      role: 'Senior Full-Stack Developer',
      expertise: 'React, Node.js, AWS',
      image: '/images/team/david-chen-anime.jpg',
    },
    {
      name: 'Kevin Park',
      role: 'Lead Mobile Developer',
      expertise: 'React Native, iOS, Android',
      image: '/images/team/kevin-park-unique.jpg',
    },
    {
      name: 'Jason Wang',
      role: 'Senior Backend Developer',
      expertise: 'Python, Microservices, Kubernetes',
      image: '/images/team/jason-wang-anime.jpg',
    },
    {
      name: 'Jessica Kim',
      role: 'Lead UI/UX Designer',
      expertise: 'Figma, User Research, Design Systems',
      image: '/images/team/sarah-choi.jpg',
    },
    {
      name: 'Michelle Zhang',
      role: 'Senior Product Designer',
      expertise: 'UI Design, Prototyping, Branding',
      image: '/images/team/michelle-zhang-anime.jpg',
    },
    {
      name: 'Amanda Liu',
      role: 'Senior Product Manager',
      expertise: 'Agile, Strategy, Roadmapping',
      image: '/images/team/amanda-liu-anime.jpg',
    },
    {
      name: 'Alex Wong',
      role: 'Lead QA Engineer',
      expertise: 'Automation Testing, CI/CD',
      image: '/images/team/alex-wong-anime.jpg',
    },
    {
      name: 'Tony Lin',
      role: 'Lead DevOps Engineer',
      expertise: 'AWS, Kubernetes, Infrastructure',
      image: '/images/team/tony-lin-anime.jpg',
    },
  ];

  const departments = [
    { name: 'Engineering', count: 8, icon: '💻' },
    { name: 'Design', count: 5, icon: '🎨' },
    { name: 'Product', count: 2, icon: '📊' },
    { name: 'QA', count: 3, icon: '✅' },
    { name: 'DevOps', count: 3, icon: '⚙️' },
  ];

  const benefits = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours',
      icon: '🌍',
    },
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and equity packages',
      icon: '💰',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: '❤️',
    },
    {
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance',
      icon: '📚',
    },
    {
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies',
      icon: '🚀',
    },
    {
      title: 'Team Activities',
      description: 'Regular team building and social events',
      icon: '🎉',
    },
  ];

  return (
    <div className="pt-20">
      <section className="gradient-bg text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Meet the talented people behind our success
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
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              21 talented professionals across different specializations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-5xl mb-3">{dept.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{dept.name}</h3>
                <p className="text-3xl font-bold text-primary-600">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals passionate about creating exceptional software
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
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
              Why Join BitsRain?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people and create an environment where they can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="section-container">
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

