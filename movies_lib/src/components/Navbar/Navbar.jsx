import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (searchTerm.trim() === '') {
            return;
        }
        // Navigate to the search results page with the search term
        navigate(`/search?q=${searchTerm.trim()}`);
        setSearchTerm(''); // Clear the search input after submission
    }

    return (
        <nav id={styles.navbar}>
            <h2>
                <Link to="/"><BiCameraMovie /> Movies Library</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a movie..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                <button type="submit"><BiSearchAlt2 /> </button>
            </form>
        </nav>
    );
}

export default Navbar;
