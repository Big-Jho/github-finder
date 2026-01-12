import React from "react";

function Tag({ children, classes }) {
  return (
    <button
      className={`px-3 py-0.5 text-sm rounded-md  font-semibold text-black ${classes}`}
    >
      {children}
    </button>
  );
}

export default Tag;
