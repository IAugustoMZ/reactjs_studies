import { useState } from "react";
import styles from './Search.module.css'
import { BsSearch } from "react-icons/bs"


type SearchProps = {
    loadUser: (username: string) => Promise<void>;
};

const Search: React.FC<SearchProps> = ({ loadUser }) => {
    const [username, setUsername] = useState("");

    // Function to handle the Enter key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            loadUser(username);
        }
    };

  return (
    <div className={styles.search}>
        <h2>Search a user</h2>
        <p>Know its best projects</p>
        <div className={styles.search_container}>
            <input type="text" placeholder="Type the user name" onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyDown}/>
            <button type="button" onClick={() => loadUser(username)} title="Search">
                <BsSearch aria-label="Search" />
            </button>
        </div>
    </div>
  )
}

export default Search;
