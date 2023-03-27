import React from "react";
import reactDOM from "react-dom/client";
import App from "./app";
const root = document.querySelector("#root")

const reactRoot = reactDOM.createRoot(root)

// const App = () => {
//     return <h1>Hello world</h1>
// }
reactRoot.render(<App />)