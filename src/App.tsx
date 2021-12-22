import React from "react";
import { HomeContainer } from "./containers/HomeContainer";
import "./App.css";

function App() {
    return (
        <div
            style={{
                position: "fixed",
                padding: 0,
                margin: 0,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }}
        >
            <HomeContainer />
        </div>
    );
}

export default App;
