import React from "react";
import Container from "../shared/Container";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-black">
      <Container classes={`flex justify-between flex-row items-center`}>
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center">
          <Link to="/">
            <FaGithub size={36} />
          </Link>
          <span className="text-white font-semibold text-lg">
            GitHub Finder
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex flex-row  items-center -space-x-3">
          <Link to={"/"}>
            <button className="btn btn-ghost font-semibold md:btn-md">
              Home
            </button>
          </Link>
          <Link to={"/about"}>
            <button className="btn btn-ghost font-semibold  md:btn-md">
              About
            </button>
          </Link>
          <Link to={"/contact"}>
            <button className="hidden md:block btn btn-ghost font-semibold  md:btn-md">
              Contact
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
