import React from "react";
import Loader from "cssonly-loaders-react";

// SCSS, CSS.
import "src/partials/loading/index.scss";

const Start = (props) => {
  switch (props.type) {
    case "loading-start":
      return <LoadingStart />;
    case "loading-text":
      return <LoadingText text={props.text} />;
    case "loading-page":
      return <LoadingPage />;
    case "loading-module-page":
      return <LoadingModule />;
    case "gradient":
      return <Gradient props={props} />;
    case "loading-block":
      return <LoadingBlock props={props} />;
    case "redirect":
      return <LoadRedirect props={props} />;
    case "nothing":
    default:
      return <Nothing />;
  }
};

const LoadingStart = () => {
  return (
    <div id="loading" className="loading-start">
      <div className="loader quantum-spinner"></div>
    </div>
  );
};

const LoadingPage = () => {
  return (
    <div id="loading" className="loading-page">
      <div className="title">PYLOT</div>
    </div>
  );
};

const LoadingText = (props) => {
  return (
    <div id="loading" className="loading-text">
      <div className="title">{props.text}</div>
    </div>
  );
};

const LoadingModule = () => {
  return (
    <div id="loading" className="loading-module-page">
      LOADING...
    </div>
  );
};

const Gradient = (props) => {
  var styles = {
    padding: props.height ? `${props.height / 2}px 0px` : "100px 0px",
  };

  return (
    <div id="loading" className="gradient" style={styles}>
      LOADING
    </div>
  );
};

const LoadingBlock = (props) => {
  var styles = {
    height: props.height ? props.height : "200px",
  };

  return (
    <div id="loading" className="loading-block">
      LOADING
    </div>
  );
};

const LoadRedirect = () => {
  var styles = {
    padding: "100px 50px",
    textAlign: "center",
  };

  return (
    <div id="loading" style={styles}>
      Redirecting...
    </div>
  );
};

const Nothing = () => {
  return <div></div>;
};

export default Start;
