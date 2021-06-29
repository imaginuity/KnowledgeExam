import React from "react";

const Start = (props) => {
  return <LoadFooter />;
};

const LoadFooter = (props) => {
  return (
    <>
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Copyright © {new Date().getFullYear()} Pylot. All Rights Reserved.
          </p>
          <p className="mb-0">
            New to Pylot? <a href="/">Visit the homepage</a> or read our{" "}
            <a href="#">getting started guide</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Start;
