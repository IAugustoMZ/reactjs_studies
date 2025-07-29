import { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState([]);
    const query = searchParams.get("q");

    // Fetch search movies
    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        const sortedResults = data.results.sort((a, b) => b.vote_average - a.vote_average);
        setSearchMovies(sortedResults);
    }

    // Use effect to fetch search movies on component mount
    useEffect(() => {
        if (query) {
            const searchUrl = `${searchURL}?${apiKey}&query=${query}`;
            getSearchMovies(searchUrl);
        }
    }, [query]);


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Results for: <span className={styles.query_text}>{query}</span></h2>
            <div className={styles.movies_container}>
                {searchMovies.length === 0 && <p>Loading...</p>}
                {searchMovies.length > 0 && searchMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}
export default Search;