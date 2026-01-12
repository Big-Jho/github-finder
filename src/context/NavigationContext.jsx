import { createContext, useState } from "react";

const NavigationContext = createContext();

const gitUrl = import.meta.env.VITE_GITHUB_URL;
const gitToken = import.meta.env.VITE_TOKEN;

export const NavigationProvider = ({ children }) => {
  // ALL STATES AND APP LEVEL FUNCTIONS
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [query, setQuery] = useState("");

  const apiHeaders = {
    headers: {
      Authorization: `token ${gitToken}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "Big-Jho",
    },
  };

  // SEARCH USERS
  const searchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${gitUrl}/search/users?q=${query}&per_page=10`,
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
      const response = await fetch(`${gitUrl}/users/${login}`, {
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
        `${gitUrl}/users/${login}/repos?direction=desc&per_page=10`,
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
