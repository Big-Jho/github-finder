import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // INITIAL REDUCER STATES
  const initialState = {
    loading: false,
    users: [],
    query: "",
    repoQuery: "",
    userProfile: {},
    userRepos: [],
  };

  const gitToken = import.meta.env.VITE_GITHUB_TOKEN;
  const gitUrl = "https://api.github.com";

  //  BRINGING-IN OUR REDUCER
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const apiHeaders = {
    headers: {
      Authorization: `token ${gitToken}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "Big-Jho",
    },
  };

  // SET LOADING FUNCTION
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  // SET SEARCH QUERY PARAM
  const setQuery = (query) => {
    dispatch({
      type: "SET_QUERY",
      payload: query,
    });
  };

  // SET REPO_SEARCH QUERY PARAM
  const setRepoQuery = (query) => {
    dispatch({
      type: "SET_REPO_QUERY",
      payload: query,
    });
  };

  // SEARCH USERS
  const searchUsers = async () => {
    try {
      setLoading();

      const response = await fetch(
        `https://api.github.com/search/users?q=${state.query}&per_page=10`,
        {
          apiHeaders,
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const items = await data.items;

      dispatch({
        type: "SEARCH_USERS",
        payload: items,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // REQUEST USER PROFILE
  const requestUserProfile = async (login) => {
    try {
      setLoading();
      const response = await fetch(`https://api.github.com/users/${login}`, {
        apiHeaders,
      });

      if (!response.ok) {
        throw new Err(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch({
        type: "GET_PROFILE",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // REQUEST USER REPOSITORIES
  const requestUserRepos = async (login) => {
    try {
      // setLoading();
      const response = await fetch(
        `https://api.github.com/users/${login}/repos?direction=desc&per_page=10`,
        {
          apiHeaders,
        },
      );

      if (!response.ok) {
        throw new Err(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch({ type: "GET_USER_REPO", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };

  // SEARCH USER REPOSITORIES
  const searchRepos = async (login) => {
    try {
      // setLoading();
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${state.repoQuery}+user:${login}`,
        {
          apiHeaders,
        },
      );

      if (!response.ok) {
        throw new Err(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch({ type: "GET_USER_REPO", payload: data.items });
    } catch (err) {
      console.log(err.message);
    }
  };

  // CLEAR USERS RESULTS
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  // RETURNING ALL CONTEXT FUNCTIONS OR STATES
  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        query: state.query,
        repoQuery: state.repoQuery,
        userProfile: state.userProfile,
        userRepos: state.userRepos,
        setQuery,
        setRepoQuery,
        clearUsers,
        searchUsers,
        requestUserProfile,
        requestUserRepos,
        searchRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
