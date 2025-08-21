import { useState } from "react";
import User from "../../components/User/User";
import Error from "../../components/Error/Error";
import type { UserProps } from "../../types/user";
import Search from "../../components/Search/Search";



const Home = () => {
  const [_user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  // Function to handle user search
  const loadUser = async (username: string) => {
    setError(false); // Reset error state on new search
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setError(true);
        setUser(null);
        return;
      }
      const data: UserProps = await response.json();
      
      // Destructure only the needed properties
      const { avatar_url, login, location, followers, following } = data;

      // Create a new object with only the required properties
      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };

      setUser(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  return (
    <div>
      <Search loadUser={loadUser}/>
      {_user && <User {..._user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;