import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Form() {
  const {
    searchUsers,
    query,
    setQuery,
    clearUsers,
    users,
    userPagination,
    setUserPagination,
  } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  // Initial Search
  const processQuery = (e) => {
    e.preventDefault();

    if (query === "" || query === null) {
      setAlert("Input a search parameter", "error");
      return;
    }

    searchUsers();
  };

  // Previous search page
  const prevSearch = () => {
    setUserPagination("decrease");
    console.log(userPagination);
  };

  // Next search page
  const nextSearch = () => {
    setUserPagination("increase");
    console.log(userPagination);
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

      <div className="flex flex-row items-center gap-4">
        {/* reset btn */}
        <button
          type="reset"
          className={`mt-4 px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4 ${
            !users || users.length < 1 ? "hidden" : "block"
          }`}
          onClick={clearUsers}
        >
          Clear
        </button>

        {/* previous btn */}
        <button
          type="submit"
          id="previous"
          className={`mt-4 px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4 flex justify-between gap-2 items-center ${
            !users || users.length < 1 ? "hidden" : "block"
          }`}
          onClick={prevSearch}
        >
          <FaChevronLeft className="text-secondary" /> <span>Previous</span>
        </button>

        {/* Page Number*/}
        <button
          type="btn"
          className={`mt-4 px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4 flex justify-between gap-2 items-center ${
            !users || users.length < 1 ? "hidden" : "block"
          }`}
        >
          Page {userPagination}
        </button>

        {/* next btn */}
        <button
          type="submit"
          id="next"
          onSubmit={processQuery}
          className={`mt-4 px-10 py-4 bg-neutral hover:bg-black transition duration-200 rounded-sm p-4 flex justify-between gap-2 items-center ${
            !users || users.length < 1 ? "hidden" : "block"
          }`}
          onClick={nextSearch}
        >
          <span>Next</span> <FaChevronRight className="text-secondary" />
        </button>
      </div>
    </form>
  );
}

export default Form;
