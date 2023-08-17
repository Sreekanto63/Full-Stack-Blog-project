import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddEditBlogPostForm(props) {
  const isEditing = props.match.params.id ? true : false;
  const postId = isEditing ? props.match.params.id : '';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (isEditing) {
      axios.get(`/api/posts/${postId}`)
        .then(response => {
          const post = response.data;
          setTitle(post.title);
          setContent(post.content);
          setAuthor(post.author);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [isEditing, postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, content, author };

    try {
      if (isEditing) {
        await axios.put(`/api/posts/${postId}`, postData);
      } else {
        await axios.post('/api/posts', postData);
      }
      // Redirect to the blog post list
      props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>{isEditing ? 'Edit' : 'Add'} Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Create'} Post</button>
      </form>
    </div>
  );
}

export default AddEditBlogPostForm;
