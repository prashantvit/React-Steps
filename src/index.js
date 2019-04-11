import React, { useState } from "react";
import ReactDOM from "react-dom";
import Steps from "./Steps";
import Step from "./Step";

import "./styles.css";

function App() {
  const [currentstep, setCurrentStep] = useState(1);
  return (
    <React.Fragment>
      <Steps step={currentstep}>
        <Step>First Screen</Step>
        <Step>Second Screen</Step>
        <Step>Third Screen</Step>
      </Steps>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentStep(1)}>Show Screen 1</button>
        <button onClick={() => setCurrentStep(2)}>Show Screen 2</button>
        <button onClick={() => setCurrentStep(3)}>Show Screen 3</button>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
