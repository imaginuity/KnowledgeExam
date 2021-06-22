import React from "react";
import { Helmet } from "react-helmet";

let Entities = require("html-entities").AllHtmlEntities;
let entities = new Entities();

const Start = ({ page }) => {
    return (
        <Helmet>
            <title>Knowledge Exam</title>
        </Helmet>
    );
};

export default Start;
