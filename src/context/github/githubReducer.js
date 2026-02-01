import { act } from "react";

const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_USER_PAGINATION":
      return { ...state, userPagination: action.payload };

    case "INCREASE_REPO_LIMIT":
      return { ...state, repoLimit: action.payload };

    case "SEARCH_USERS":
      return { ...state, users: action.payload, loading: false };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        query: "",
      };

    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "SET_REPO_QUERY":
      return {
        ...state,
        repoQuery: action.payload,
      };

    case "GET_USER_REPO":
      return {
        ...state,
        loading: false,
        userRepos: action.payload,
      };

    case "GET_PROFILE":
      return { ...state, userProfile: action.payload, loading: false };

    default:
      return state;
  }
};

export default githubReducer;
