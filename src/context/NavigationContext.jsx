import { createContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  // ALL STATES AND APP LEVEL FUNCTIONS
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [query, setQuery] = useState("");

  const apiHeaders = {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "Big-Jho",
    },
  };

  const gitUrl = "https://api.github.com";

  // SEARCH USERS
  const searchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.github.com/search/users?q=${query}&per_page=10`,
        {
          apiHeaders,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const items = await data.items;

      setUsers(items);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // REQUEST USER PROFILE
  const requestUserProfile = async (login) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${login}`, {
        apiHeaders,
      });

      if (!response.ok) {
        throw new Err(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      setUserProfile(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // REQUEST USER REPOSITORIES
  const requestUserRepos = async (login) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${login}/repos?direction=desc&per_page=10`,
        {
          apiHeaders,
        }
      );

      if (!response.ok) {
        throw new Err(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      setUserRepos(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // CLEAR USERS RESUTS
  const clearUsers = () => {
    setUsers([]);
    setQuery("");
  };

  return (
    <NavigationContext.Provider
      value={{
        loading,
        setLoading,
        users,
        clearUsers,
        query,
        setQuery,
        searchUsers,
        userProfile,
        requestUserProfile,
        userRepos,
        requestUserRepos,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
