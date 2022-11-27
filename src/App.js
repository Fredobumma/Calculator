import React, { useState } from "react";
import InputTab from "./common/inputTab";
import Keypad from "./common/keypad";

function App() {
  const [inputQuery, setInputQuery] = useState(0);
  const [solvedInput] = useState("");

  const handleClick = (value) => {
    const input = String(inputQuery + value);
    setInputQuery(input.length < 12 ? input : inputQuery);
  };

  return (
    <div className="fixed-bottom calculator-container">
      <InputTab inputQuery={inputQuery} solvedInput={solvedInput} />
      <Keypad onClick={handleClick} />
    </div>
  );
}

export default App;
