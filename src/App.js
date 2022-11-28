import React, { useState } from "react";
import InputTab from "./common/inputTab";
import Keypad from "./common/keypad";

function App() {
  const [inputQuery, setInputQuery] = useState(0);
  const [solvedInput] = useState("");
  const [operator, setOperator] = useState({
    clicked: false,
    value: "",
  });

  const handleClick = (value) => {
    if (typeof value !== "number") {
      return setOperator({ clicked: true, value });
    }
    const input = String(inputQuery + value);
    setOperator({ clicked: false });
    setInputQuery(input.length < 12 ? input : inputQuery);
  };

  const handleOperators = (value) => {
    // setOperator();
    console.log(value, "clicked");
  };

  return (
    <div className="fixed-bottom calculator-container">
      <InputTab inputQuery={inputQuery} solvedInput={solvedInput} />
      <Keypad operator={operator} onClick={handleClick} />
    </div>
  );
}

export default App;
