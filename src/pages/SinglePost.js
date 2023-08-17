import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SinglePost(props) {
  const postId = props.match.params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/api/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [postId]);

  return (
    <div className="container">
      <h1 className="mt-4">{post.title}</h1>
      <p className="mt-2">Author: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default SinglePost;
