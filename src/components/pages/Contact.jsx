import React from "react";
import Container from "../shared/Container";

function Contact() {
  return (
    <div className="w-full">
      <Container
        classes={`-mt-20 flex flex-col justify-center items-center gap-6`}
      >
        <h1 className="text-7xl font-bold">Contact Page</h1>
      </Container>
    </div>
  );
}

export default Contact;
