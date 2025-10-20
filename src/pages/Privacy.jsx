import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=600&fit=crop" 
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Last updated: October 19, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 mb-6">
              BitsRain ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Fill out contact forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This information may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement or government agencies when required by law</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mb-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> danny@bitsrain.com</li>
              <li><strong>Phone:</strong> +1 312 680 2246</li>
              <li><strong>Address:</strong> 9964 Spring View Way, Elk Grove, CA 95757</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

