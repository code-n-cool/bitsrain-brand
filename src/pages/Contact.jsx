import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'danny@bitsrain.com',
      link: 'mailto:danny@bitsrain.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 312 680 2246',
      link: 'tel:+13126802246',
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Elk Grove, CA',
      link: '#',
    },
    {
      icon: '💼',
      title: 'Careers',
      content: 'danny@bitsrain.com',
      link: 'mailto:danny@bitsrain.com',
    },
  ];

  const officeLocations = [
    {
      city: 'Elk Grove',
      country: 'United States',
      address: '9964 Spring View Way',
      zip: 'CA 95757',
    },
  ];

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Web Development',
    'Healthcare Solutions',
    'Fintech Development',
    'E-commerce Platform',
    'SaaS Product',
    'AI & Machine Learning',
    'Cloud Solutions',
    'UI/UX Design',
    'DevOps & CI/CD',
    'Staff Augmentation',
    'Technical Consulting',
    'Other',
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+',
    'Not Sure Yet',
  ];

  return (
    <div className="pt-20">
      <section className="gradient-bg text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something Great
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Ready to transform your ideas into reality? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-700 font-semibold mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help!
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <div className="text-4xl mr-4">{info.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{info.title}</div>
                      <div className="text-primary-600">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="font-bold text-gray-900 mb-1">
                        {location.city}, {location.country}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {location.address}
                        <br />
                        {location.zip}
                      </div>
                      <div className="mt-3 text-xs text-gray-500 italic">
                        Remote-first company
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Join Our Team
                </h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals to join our growing team.
                </p>
                <a href="mailto:danny@bitsrain.com" className="btn-primary block text-center">
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. A typical web or mobile app takes 3-6 months, while larger enterprise solutions may take 6-12 months. We provide detailed timeline estimates during the discovery phase.',
              },
              {
                question: 'Do you sign NDAs?',
                answer: 'Absolutely. We understand the confidential nature of many projects and are happy to sign NDAs before discussing your project details.',
              },
              {
                question: 'What is your development process?',
                answer: 'We follow an Agile methodology with 2-week sprints, regular client updates, and iterative delivery. This ensures transparency and allows for flexibility as requirements evolve.',
              },
              {
                question: 'Do you provide post-launch support?',
                answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your application continues to run smoothly after launch. This includes bug fixes, updates, and feature enhancements.',
              },
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

