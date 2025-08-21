import './Home.css';
import { Link } from 'react-router-dom';
import blogFetcher from '../../axios/config';
import { useState, useEffect } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);

    // function to fetch posts from an API
    const fetchPosts = async () => {
        try {
            // calling a placeholder API with axios
            const response = await blogFetcher.get('/posts');
            setPosts(response.data);
            // console.log(response.data);

        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    // useEffect to call fetchPosts when component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="home">
            <h1>Last Posts</h1>
            {posts.length === 0 ? (
                <p>Loading posts...</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link to={`/post/${post.id}`} className='btn'>Read More</Link>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Home;
