import React from "react";
import InputTab from "./common/inputTab";
import Keypad from "./common/keypad";

function App() {
  return (
    <div className="fixed-bottom calculator-container">
      <InputTab />
      <Keypad />
    </div>
  );
}

export default App;
