import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styles from './MovieCard.module.css';


const imgBaseUrl = import.meta.env.VITE_IMAGE;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className={showLink ? styles.movie_card : styles.movie_card_detail}>
            <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && (
                <>
                    <p>Year: {movie.release_date.split('-')[0]}</p>
                    <Link to={`/movies/${movie.id}`}>
                        Details
                    </Link>
                </>
            )}
        </div>
    );
}

export default MovieCard;
