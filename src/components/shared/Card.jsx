import React from "react";

function Card({ children, classes }) {
  return (
    <div className={`rounded-sm shadow-lg bg-transparent px-8 py-6 ${classes}`}>
      {children}
    </div>
  );
}

export default Card;
