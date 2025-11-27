import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/bitsrain' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/bitsrain' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/bitsrain' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/bitsrain' },
    { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/+CKgPsUGnuok1ZWEy' },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2 md:col-span-2">
            <a href="#hero" className="flex items-center space-x-2 mb-4">
              <img
                src="/images/bitsrain-logo.png"
                alt="BitsRain Logo"
                className="w-10 h-10 rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-semibold">BitsRain</span>
                <span className="text-xs uppercase text-gray-400 tracking-[0.08em]">Applied AI / ML Studio</span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              We build practical AI products-content intelligence, real-time recommendations, predictive analytics, and automation-for modern teams.
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

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-[0.08em] text-gray-300 mb-4">Navigate</h3>
            <ul className="space-y-2">
              {['Capabilities', 'Process', 'Work', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-150 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-[0.08em] text-gray-300 mb-4">Focus</h3>
            <ul className="space-y-2">
              {['Content intelligence', 'Personalization', 'Predictive analytics', 'AI agents'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>c {currentYear} BitsRain. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors duration-150 cursor-default">Privacy Policy</span>
            <span className="hover:text-white transition-colors duration-150 cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
