import ReactDOM from "react-dom";
import React, { useState, useEffect, Suspense } from "react";

import Loading from "../src/partials/loading";
import Helmet from "src/helmet";
import Header from "src/partials/header";
import Footer from "src/partials/footer";

const Routing = React.lazy(() => import("./routing"));

import "./scss/body.scss";
import "../src/main.scss";

const Start = (props) => {
  return <Prepare />;
};

const Prepare = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading type="loading-start" />;
  } else {
    return <Customizations />;
  }
};

const Customizations = (props) => {
  return (
    <Suspense fallback={<div />}>
      <main>
        <Helmet />
        <Header />
        <Routing />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Start;

document.addEventListener("DOMContentLoaded", (e) => {
  const LoadScripts = () => {
    return new Promise((resolve, reject) => {
      window.onload = () => resolve(true);
    });
  };

  LoadScripts()
    .then((result) => {
      let node = document.createElement("react");
      node.setAttribute("id", "react");
      document.getElementsByTagName("body")[0].appendChild(node);
      ReactDOM.render(<Start />, document.getElementById("react"));
    })
    .catch((error) => console.log(error));
});
