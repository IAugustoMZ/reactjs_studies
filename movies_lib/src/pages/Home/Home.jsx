import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [ topMovies, setTopMovies ] = useState([]);

    // Fetch top rated movies
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    }

    // Use effect to fetch top rated movies on component mount
    useEffect(() => {
        const topRatedUrl = `${moviesURL}/top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Top Rated Movies</h2>
            <div className={styles.movies_container}>
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}
export default Home;