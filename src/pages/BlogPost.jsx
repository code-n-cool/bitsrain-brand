import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const blogContent = {
    1: {
      title: 'Building HIPAA-Compliant Healthcare Applications: Best Practices',
      author: 'Danny Liu',
      authorRole: 'CEO & Co-Founder',
      authorImage: 'https://danny-liu-dev.github.io/img/profile.jpg',
      date: 'October 15, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
      tags: ['Healthcare', 'Security', 'Compliance'],
      content: `
Healthcare applications handle some of the most sensitive data imaginable. Building HIPAA-compliant systems requires not just technical expertise, but a deep understanding of regulatory requirements and patient privacy concerns.

## Understanding HIPAA Requirements

The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient data. Any company that deals with protected health information (PHI) must ensure that all physical, network, and process security measures are in place and followed.

### Key HIPAA Rules

1. **Privacy Rule**: Establishes national standards for the protection of health information
2. **Security Rule**: Sets standards for securing electronic protected health information (ePHI)
3. **Breach Notification Rule**: Requires covered entities to notify affected individuals of a data breach

## Technical Implementation

### Data Encryption

All PHI must be encrypted both at rest and in transit. We recommend:

- AES-256 encryption for data at rest
- TLS 1.3 for data in transit
- End-to-end encryption for messaging features

### Access Controls

Implement robust authentication and authorization:

- Multi-factor authentication (MFA) for all users
- Role-based access control (RBAC)
- Principle of least privilege
- Regular access audits and reviews

### Audit Logging

Comprehensive audit trails are critical:

- Log all access to PHI
- Track data modifications
- Monitor authentication attempts
- Implement real-time alerting for suspicious activity

## Best Practices

### 1. Conduct Regular Risk Assessments

Perform thorough risk assessments to identify vulnerabilities in your systems. Document all findings and create remediation plans.

### 2. Employee Training

Ensure all team members understand HIPAA requirements and their role in maintaining compliance. Regular training sessions are essential.

### 3. Business Associate Agreements

All third-party vendors that handle PHI must sign Business Associate Agreements (BAAs) before integration.

### 4. Incident Response Plan

Have a detailed incident response plan in place. Know exactly what steps to take if a breach occurs.

## Architecture Considerations

When designing healthcare applications, consider:

- **Data Segregation**: Separate PHI from other application data
- **Secure APIs**: Implement OAuth 2.0 and JWT tokens
- **Database Security**: Use encryption, access controls, and regular backups
- **Network Security**: Implement firewalls, VPNs, and intrusion detection systems

## Conclusion

Building HIPAA-compliant applications requires a comprehensive approach to security. By following these best practices and staying informed about regulatory changes, you can create healthcare solutions that protect patient privacy while delivering exceptional user experiences.

At BitsRain, we've successfully built numerous HIPAA-compliant applications. If you're planning a healthcare project, we'd love to help you navigate the complexities of compliance while building exceptional software.
      `,
    },
  };

  const post = blogContent[id] || blogContent[1];

  const relatedPosts = [
    {
      id: 2,
      title: 'The Future of Fintech: AI and Machine Learning',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Microservices Architecture: When and How',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'E-commerce Conversion Optimization',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="pt-20">
      <article>
        <section className="relative h-96 bg-gray-900">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="section-container relative h-full flex items-end pb-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-gray-300 text-sm">
                    {post.authorRole} · {post.date} · {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-700 ml-6 mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  } else if (paragraph.trim() !== '') {
                    return (
                      <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{post.author}</div>
                      <div className="text-gray-600">{post.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                      <span className="text-sm font-bold">𝕏</span>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                      <span className="text-sm font-bold">in</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="card overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help bring your project to life
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogPost;

