import React, { useState } from "react";
import ReactDOM from "react-dom";
import Steps from "./Steps";
import Step from "./Step";

import "./styles.css";

function App() {
  const [screen, setScreen] = useState(1);
  return (
    <React.Fragment>
      <Steps step={screen}>
        <Step>First Screen</Step>
        <Step>Second Screen</Step>
        <Step>Third Screen</Step>
      </Steps>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setScreen(1)}>Show Screen 1</button>
        <button onClick={() => setScreen(2)}>Show Screen 2</button>
        <button onClick={() => setScreen(3)}>Show Screen 3</button>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
