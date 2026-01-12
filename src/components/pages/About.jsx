import React from "react";
import Container from "../shared/Container";

function About() {
  return (
    <div className="w-full">
      <Container classes={`flex flex-col justify-center gap-6`}>
        <h1 className="text-5xl md:text-7xl">Github Finder</h1>
        <p className="text-xl md:text-2xl font-extralight">
          A React app to search GitHub profiles and see profile details. This
          project is part of the React Front To Back Udemy course by Brad
          Traversy.
        </p>
        <div>
          <p className="text-lg">
            <span className="opacity-60 pr-2">Version:</span>1.0.0
          </p>
          <p className="text-lg">
            <span className="opacity-60 pr-2">Layout by:</span>Hassib Moddasser
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
