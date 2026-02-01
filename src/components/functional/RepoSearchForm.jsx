import React, { useState, useContext, useParams } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
import { FaSearch } from "react-icons/fa";

function RepoSearchForm({ login }) {
  const { searchRepos, repoQuery, setRepoQuery, requestUserRepos } =
    useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const processQuery = (e) => {
    e.preventDefault();

    if (repoQuery.trim() === "" || repoQuery.trim() === null) {
      requestUserRepos(login);
      setAlert("Input a search parameter", "error");
      return;
    }

    searchRepos(login, repoQuery);
    setRepoQuery("");
  };

  return (
    <form onSubmit={processQuery}>
      <Alert />
      <div
        className={`flex flex-row justify-end items-center gap-3 relative px-4 py-1.5 outline-1 outline-gray-500 rounded-sm`}
      >
        <input
          type="text"
          className=" text-gray-100  flex-1 w-72 placeholder:pl-0 focus:outline-none"
          placeholder={"Search Repos"}
          value={repoQuery}
          onChange={(e) => {
            setRepoQuery(e.target.value);
          }}
        />
        <button
          type="button"
          className="rounded-sm bg-gray-300 text-black p-2 -mr-2.5"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default RepoSearchForm;
