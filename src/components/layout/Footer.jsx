import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Healthcare Solutions', path: '/services#healthcare' },
        { name: 'Fintech Development', path: '/services#fintech' },
        { name: 'E-commerce Platforms', path: '/services#ecommerce' },
        { name: 'SaaS Products', path: '/services#saas' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/bitsrain' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/bitsrain' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/bitsrain' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/bitsrain' },
    { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/+CKgPsUGnuok1ZWEy' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/bitsrain-logo.png" 
                alt="BitsRain Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold">BitsRain</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We transform ideas into powerful digital solutions. Specializing in healthcare, fintech, e-commerce, and SaaS development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BitsRain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

