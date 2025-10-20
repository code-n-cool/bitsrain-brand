import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Building HIPAA-Compliant Healthcare Applications: Best Practices',
      excerpt: 'Learn the essential security measures and compliance requirements for developing healthcare software that protects patient data.',
      category: 'healthcare',
      author: 'Danny Liu',
      authorRole: 'CEO & Co-Founder',
      authorImage: 'https://danny-liu-dev.github.io/img/profile.jpg',
      date: 'October 15, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      tags: ['Healthcare', 'Security', 'Compliance'],
    },
    {
      id: 2,
      title: 'The Future of Fintech: AI and Machine Learning in Financial Services',
      excerpt: 'Exploring how artificial intelligence is revolutionizing fraud detection, risk assessment, and personalized financial services.',
      category: 'fintech',
      author: 'Danny Liu',
      authorRole: 'CEO & Co-Founder',
      authorImage: 'https://danny-liu-dev.github.io/img/profile.jpg',
      date: 'October 12, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      tags: ['Fintech', 'AI', 'Machine Learning'],
    },
    {
      id: 3,
      title: 'Microservices Architecture: When and How to Implement',
      excerpt: 'A comprehensive guide to transitioning from monolithic applications to microservices architecture.',
      category: 'engineering',
      author: 'David Chen',
      authorRole: 'Senior Full-Stack Developer',
      authorImage: '/images/team/david-chen-anime.jpg',
      date: 'October 8, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      tags: ['Architecture', 'Microservices', 'Backend'],
    },
    {
      id: 4,
      title: 'E-commerce Conversion Optimization: UX Strategies That Work',
      excerpt: 'Proven user experience techniques that increase conversion rates and reduce cart abandonment.',
      category: 'ecommerce',
      author: 'Jessica Kim',
      authorRole: 'Lead UI/UX Designer',
      authorImage: '/images/team/sarah-choi.jpg',
      date: 'October 5, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['E-commerce', 'UX', 'Conversion'],
    },
    {
      id: 5,
      title: 'Building Scalable SaaS Applications with Multi-Tenancy',
      excerpt: 'Design patterns and best practices for creating secure, scalable multi-tenant SaaS architectures.',
      category: 'saas',
      author: 'Jason Wang',
      authorRole: 'Senior Backend Developer',
      authorImage: '/images/team/jason-wang-anime.jpg',
      date: 'October 1, 2025',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      tags: ['SaaS', 'Architecture', 'Scalability'],
    },
    {
      id: 6,
      title: 'React Performance Optimization: Advanced Techniques',
      excerpt: 'Deep dive into React optimization techniques including memoization, code splitting, and virtual DOM optimization.',
      category: 'engineering',
      author: 'David Chen',
      authorRole: 'Senior Full-Stack Developer',
      authorImage: '/images/team/david-chen-anime.jpg',
      date: 'September 28, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      tags: ['React', 'Performance', 'Frontend'],
    },
    {
      id: 7,
      title: 'DevOps Best Practices: CI/CD Pipeline Implementation',
      excerpt: 'Learn how to build robust continuous integration and deployment pipelines for faster, more reliable releases.',
      category: 'devops',
      author: 'Tony Lin',
      authorRole: 'Lead DevOps Engineer',
      authorImage: '/images/team/tony-lin-anime.jpg',
      date: 'September 25, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      tags: ['DevOps', 'CI/CD', 'Automation'],
    },
    {
      id: 8,
      title: 'Mobile App Development: React Native vs Native Development',
      excerpt: 'Comparing React Native with native iOS and Android development to help you choose the right approach.',
      category: 'mobile',
      author: 'Kevin Park',
      authorRole: 'Lead Mobile Developer',
      authorImage: '/images/team/kevin-park-unique.jpg',
      date: 'September 22, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      tags: ['Mobile', 'React Native', 'iOS', 'Android'],
    },
    {
      id: 9,
      title: 'Data Security in Cloud Applications: Essential Strategies',
      excerpt: 'Comprehensive guide to securing sensitive data in cloud-based applications with encryption and access controls.',
      category: 'security',
      author: 'Danny Liu',
      authorRole: 'CEO & Co-Founder',
      authorImage: 'https://danny-liu-dev.github.io/img/profile.jpg',
      date: 'September 18, 2025',
      readTime: '13 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      tags: ['Security', 'Cloud', 'Encryption'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'devops', name: 'DevOps' },
    { id: 'security', name: 'Security' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=600&fit=crop" 
            alt="Blog & Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Expert perspectives on software development, technology trends, and industry insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                    <div className="text-gray-600 text-sm">
                      {featuredPost.date} · {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="btn-primary inline-block w-fit">
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 sticky top-20 z-40">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="card overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                      <div className="text-gray-600 text-xs">{post.date} · {post.readTime}</div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest articles and insights delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-600 focus:outline-none"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

