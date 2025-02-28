// src/pages/Blog.js
import React from 'react';
import '../styles/blog.css';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Protein in Your Diet",
      excerpt: "Learn why protein is crucial for muscle building, weight management, and overall health.",
      imageUrl: "/api/placeholder/400/250",
      date: "February 25, 2025",
      author: "Dr. Sarah Miller",
      category: "Nutrition Basics"
    },
    {
      id: 2,
      title: "Understanding Carbohydrates: Friend or Foe?",
      excerpt: "Debunking myths about carbs and learning how to incorporate them properly in your diet.",
      imageUrl: "/api/placeholder/400/250",
      date: "February 20, 2025",
      author: "Michael Johnson, RD",
      category: "Nutrition Myths"
    },
    {
      id: 3,
      title: "Healthy Eating on a Budget",
      excerpt: "Practical tips for maintaining a nutritious diet without breaking the bank.",
      imageUrl: "/api/placeholder/400/250",
      date: "February 15, 2025",
      author: "Jessica Wong, RD",
      category: "Practical Nutrition"
    },
    {
      id: 4,
      title: "Meal Prep 101: Save Time and Eat Better",
      excerpt: "A beginner's guide to effective meal planning and preparation for a healthier lifestyle.",
      imageUrl: "/api/placeholder/400/250",
      date: "February 10, 2025",
      author: "David Chen, RD",
      category: "Healthy Habits"
    },
    {
      id: 5,
      title: "The Truth About Fad Diets",
      excerpt: "An evidence-based analysis of popular diet trends and their impact on health.",
      imageUrl: "/api/placeholder/400/250",
      date: "February 5, 2025",
      author: "Dr. Emily Roberts",
      category: "Diet Trends"
    },
    {
      id: 6,
      title: "Nutrition for Active Lifestyles",
      excerpt: "How to fuel your body properly for optimal performance during exercise.",
      imageUrl: "/api/placeholder/400/250",
      date: "January 30, 2025",
      author: "Ryan Peters, Sports Nutritionist",
      category: "Sports Nutrition"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Nutrition Insights Blog</h1>
        <p>Latest tips, research, and advice from our expert dieticians</p>
      </div>

      <div className="blog-container">
        <div className="blog-content">
          <div className="featured-post">
            <div className="featured-image">
              <img src="/api/placeholder/800/400" alt="Featured Post" />
            </div>
            <div className="featured-content">
              <span className="post-category">Featured</span>
              <h2>Gut Health: The Foundation of Overall Wellness</h2>
              <p className="post-meta">February 28, 2025 | Dr. James Wilson</p>
              <p className="post-excerpt">
                Discover the powerful connection between your gut health and overall wellbeing. 
                This comprehensive guide explores the latest research on the gut microbiome and 
                provides practical steps to improve your digestive health.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="blog-posts">
            {blogPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image">
                  <img src={post.imageUrl} alt={post.title} />
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p className="post-meta">{post.date} | {post.author}</p>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#" className="next">Next</a>
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-section search">
            <h3>Search</h3>
            <div className="search-box">
              <input type="text" placeholder="Search articles..." />
              <button>Search</button>
            </div>
          </div>

          <div className="sidebar-section categories">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Nutrition Basics (12)</a></li>
              <li><a href="#">Healthy Recipes (24)</a></li>
              <li><a href="#">Weight Management (18)</a></li>
              <li><a href="#">Dietary Supplements (9)</a></li>
              <li><a href="#">Sports Nutrition (15)</a></li>
              <li><a href="#">Special Diets (11)</a></li>
            </ul>
          </div>

          <div className="sidebar-section recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post">
              <img src="/api/placeholder/80/80" alt="Recent Post" />
              <div>
                <h4>Seasonal Eating: Spring Edition</h4>
                <p>February 22, 2025</p>
              </div>
            </div>
            <div className="recent-post">
              <img src="/api/placeholder/80/80" alt="Recent Post" />
              <div>
                <h4>The Role of Vitamins in Immunity</h4>
                <p>February 18, 2025</p>
              </div>
            </div>
            <div className="recent-post">
              <img src="/api/placeholder/80/80" alt="Recent Post" />
              <div>
                <h4>Understanding Food Labels</h4>
                <p>February 12, 2025</p>
              </div>
            </div>
          </div>

          <div className="sidebar-section subscribe">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest nutrition tips and recipes.</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;