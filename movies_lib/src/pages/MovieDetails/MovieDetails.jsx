import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { MdDescription } from 'react-icons/md';
import MovieCard from '../../components/MovieCard/MovieCard';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    // Fetch movie details
    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }

    // Fetch movie details on component mount
    useEffect(() => {
        const movieURL = `${moviesURL}/${id}?${apiKey}`;
        getMovie(movieURL);
    }, []);

    // Format currency for budget and revenue
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }

    return (
        <div className={styles.movie_page}>
            {movie && <MovieCard movie={movie} showLink={false} />}
            <p className={styles.tagline}>{movie?.tagline}</p>
            <div className={styles.info}>
                <h3><BsWallet2 /> <strong>Budget:</strong></h3>
                <p>{formatCurrency(movie?.budget)}</p>
            </div>
            <div className={styles.info}>
                <h3><BsGraphUp /> <strong>Revenue:</strong></h3>
                <p>{formatCurrency(movie?.revenue)}</p>
            </div>
            <div className={styles.info}>
                <h3><BsHourglassSplit /> <strong>Runtime:</strong></h3>
                <p>{movie?.runtime} minutes</p>
            </div>
            <div className={styles.info}>
                <h3><BsFillFileEarmarkTextFill /> <strong>Genres:</strong></h3>
                <p>{movie?.genres.map(genre => genre.name).join(', ')}</p>
            </div>
            <div className={styles.overview}>
                <h3><MdDescription /> <strong>Overview:</strong></h3>
                <p className={styles.overview}>{movie?.overview}</p>
            </div>
        </div>
    );
}
export default MovieDetails;