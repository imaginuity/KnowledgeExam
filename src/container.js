import React, { useEffect, useContext } from "react";

import Helmet from "src/helmet";
import Header from "src/partials/header";
import Footer from "src/partials/footer";

const Start = (page) => {
  return <BuildPage />;
};

const BuildPage = (props) => {
  return (
    <div id="app">
      <Helmet />
      <Header />
      <Footer />
    </div>
  );
};

export default Start;
