import React from "react";
import { Link } from "react-router-dom";
import Container from "../shared/Container";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="w-full">
      <Container
        classes={`-mt-20 flex flex-col justify-center items-center gap-6`}
      >
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <Link to="/">
          <button className="btn btn-primary btn-large">
            <FaHome size={24} />
            <span className="inline-block font-semibold text-lg pl-3">
              Back To Home
            </span>
          </button>
        </Link>
      </Container>
    </div>
  );
}

export default NotFound;
