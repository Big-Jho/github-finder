import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";

function Form() {
  const { searchUsers, query, setQuery, clearUsers, users } =
    useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const processQuery = (e) => {
    e.preventDefault();

    if (query === "" || query === null) {
      setAlert("Input a search parameter", "error");
      return;
    }

    searchUsers();
  };

  return (
    <form className="w-full" onSubmit={processQuery}>
      <Alert />
      <div className={`flex flex-row justify-start items-center gap-3`}>
        <input
          type="text"
          className="p-4 bg-gray-100 bg-opacity-80 text-black rounded-sm flex-1 max-w-md focus:outline focus:outline-white outline-offset-2"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4"
        >
          Go
        </button>
      </div>

      <button
        type="reset"
        className={`mt-4 px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4 ${
          !users || users.length < 1 ? "hidden" : "block"
        }`}
        onClick={clearUsers}
      >
        Clear
      </button>
    </form>
  );
}

export default Form;
