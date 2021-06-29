import React from "react";

const Start = (props) => {
  return <LoadFooter />;
};

const LoadFooter = (props) => {
  return (
    <>
      <footer className="py-5 bg-dark bg-gradient text-white fw-light fs-6">
        <div className="container">
          <p className="float-end mb-1">
            <a className="link-light text-decoration-none" href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Copyright © {new Date().getFullYear()} Pylot. All Rights Reserved.
          </p>
          <p className="mb-0">
            New to Pylot? <a className="link-light text-decoration-none" href="/">Visit the homepage</a> or read our{" "}
            <a className="link-light text-decoration-none" href="#">getting started guide</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Start;
