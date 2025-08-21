import './NewPost.css';
import { useState } from 'react';
import blogFetcher from '../../axios/config'
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

  // navigate function to redirect after post creation
  const navigate = useNavigate();

  // state to manage form data
  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: 1 // assuming a default user ID
  });

  // function to handle form submission
  const createPost = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    try {
      await blogFetcher.post('/posts', post);
      // Optionally, redirect or show a success message here
    } catch (error) {
      // Optionally, handle error here
      console.error(error);
    }

    // Redirect to the home page after creating a post
    navigate('/');
  }


  return (
    <div className="new-post">
      <h2>Create New Post</h2>
      <form onSubmit={(e) => {createPost(e);}}>
        <div className="form-control">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type the new post title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Post Content</label>
          <textarea
            name="body"
            id="body"
            placeholder="Waiting for your post"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <input type="submit" value="Create Post" className="btn"/>
      </form>
    </div>
  )
}

export default NewPost;
