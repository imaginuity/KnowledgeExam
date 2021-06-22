import ReactDOM from "react-dom";
import React, { useContext, useState, useEffect, Suspense } from "react";

import Loading from "src/partials/loading";

const Routing = React.lazy(() => import("src/routing"));

import "src/scss/body.scss";

const Start = (props) => {
    return (<Prepare />);
};

const Prepare = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        return (<Loading type="loading-start" />);
    } else {
        return (<Customizations />);        
    }
};

const Customizations = (props) => {
    var StyleSheet = document.createElement('style');
    var StylesString = `h1, h2, h3, h4, h5, h6 { font-family: 'verdana'; } `;
    StyleSheet.innerHTML = StylesString;
    document.getElementsByTagName('head')[0].appendChild(StyleSheet);

    return (
        <Suspense fallback={<div />}>
            <Routing />
        </Suspense>
    );
    
};

export default Start;

document.addEventListener("DOMContentLoaded", (e) => {

    const LoadScripts = () => {
        return new Promise((resolve, reject) => {
            window.onload = () => resolve(true);
        });
    }

    LoadScripts().then((result) => {
        var node = document.createElement("react");
        node.setAttribute("id", "react");
        document.getElementsByTagName("body")[0].appendChild(node);
        ReactDOM.render(<Start />, document.getElementById("react"));
    }).catch(error => console.log(error));

});
