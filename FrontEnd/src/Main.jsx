import React from "react";
import ReactDOM from "react-dom/client";


//import { Motopajero } from "./Prueba";
import { Form } from "./Components/Login";
import { Home } from "./Components/Home";

import "./Styles/Styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Form/>
        <Home/>
    </React.StrictMode>
);

