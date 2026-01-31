import React, { useEffect, useState, useContext } from "react";
import NavigationContext from "../../context/github/GithubContext";
import { Link } from "react-router-dom";

import Spinner from "./Spinner";

function SearchResult() {
  const { loading, users, requestUserProfile } = useContext(NavigationContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-10">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 shadow-xl flex flex-row gap-8 items-center hover:bg-gray-700 rounded-md"
        >
          <img
            src={user.avatar_url}
            alt="profile"
            className="ring ring-white w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-lg">{user.login}</h4>
            <Link
              // onClick={() => requestUserProfile(user.login)}
              to={`/users/${user.login}`}
              className="text-xs"
            >
              Visit Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
