import React from 'react';

const Terms = () => {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop" 
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using BitsRain's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Services Description</h2>
            <p className="text-gray-700 mb-6">
              BitsRain provides software development services including but not limited to custom software development, mobile app development, web development, healthcare solutions, fintech development, e-commerce platforms, SaaS products, and technical consulting services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Use of Services</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility</h3>
            <p className="text-gray-700 mb-6">
              You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this requirement.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Account Responsibilities</h3>
            <p className="text-gray-700 mb-6">
              If you create an account with us, you are responsible for maintaining the security of your account and for all activities that occur under your account.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Content</h3>
            <p className="text-gray-700 mb-6">
              The website and its original content, features, and functionality are owned by BitsRain and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Client Projects</h3>
            <p className="text-gray-700 mb-6">
              Intellectual property rights for custom development projects will be specified in individual project agreements. Unless otherwise stated in writing, all custom work product becomes the property of the client upon full payment.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms for services will be outlined in individual project proposals and contracts. Generally:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Payment schedules are specified per project</li>
              <li>Invoices are typically due within 30 days of issuance</li>
              <li>Late payments may incur additional fees</li>
              <li>Work may be suspended for non-payment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Project Delivery and Acceptance</h2>
            <p className="text-gray-700 mb-6">
              Project deliverables, timelines, and acceptance criteria will be specified in individual project agreements. We strive to meet all agreed-upon deadlines but are not liable for delays caused by client feedback, third-party services, or circumstances beyond our control.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Warranties and Disclaimers</h2>
            <p className="text-gray-700 mb-6">
              We warrant that services will be performed in a professional and workmanlike manner. However, our services are provided "as is" without warranty of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, BitsRain shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We respect the confidentiality of our clients' information. Both parties agree to maintain confidentiality of proprietary information shared during the course of the engagement, as detailed in project-specific Non-Disclosure Agreements when applicable.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate services with written notice as specified in the project agreement. Upon termination, you remain responsible for payment for all work completed and expenses incurred up to the termination date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold BitsRain harmless from any claims, damages, liabilities, and expenses arising from your use of our services or violation of these terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations. If unresolved, disputes may be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page with an updated "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
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

export default Terms;

