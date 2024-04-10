import React from "react";
import ReactDOM from "react-dom";

const H1 = () =>(
    <h1>
        Component
    </h1>
)
const H2 = () =>(
    <h2>
        Component
    </h2>
)
const H3 = () =>(
    <h3>
        Component
    </h3>
)
const H4 = () =>(
    <h4>
        Component
    </h4>
)

const Headers = () =>(
    <>
        <H1/>
        <H2/>
        <H3/>
        <H4/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Headers/>);