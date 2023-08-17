
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Blog Posts</h1>
      <ul className="list-group mt-3">
        {posts.map(post => (
          <li key={post._id} className="list-group-item">
            <a href={`/post/${post._id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostList;
