// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={post.imageUrl} alt={post.title} />
        <span className="post-category">{post.category}</span>
      </div>
      <div className="blog-card-content">
        <h3>{post.title}</h3>
        <p className="post-meta">{post.date} | {post.author}</p>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
