import React, { useState } from "react";
import InputTab from "./common/inputTab";
import Keypad from "./common/keypad";
import { characters } from "./utilities/characters";

function App() {
  const [inputQuery, setInputQuery] = useState(0);
  const [expression, setExpression] = useState("");
  const [operator, setOperator] = useState({
    clicked: false,
    value: "",
  });

  const replaceCharacters = (expression) => {
    if (expression.includes("÷")) return expression.replaceAll("÷", "/");
    if (expression.includes("×")) return expression.replaceAll("×", "*");
    return expression;
  };

  const handleClick = (value) => {
    const lastValue = expression.length - 1;
    if (value === "AC") {
      setOperator({ value });
      setExpression("");
      return setInputQuery(0);
    }
    if (value === "C") {
      setOperator({ value });
      return setInputQuery(0);
    }
    if (value === "=") {
      setOperator({ clicked: true, value });
      const finalValue = `${expression}${inputQuery}`;
      setExpression(finalValue);
      const output = replaceCharacters(finalValue);
      return setInputQuery(eval(output));
    }
    if (
      !characters.includes(value) &&
      characters.includes(expression[lastValue])
    ) {
      setOperator({ clicked: false });
      const input = operator.clicked ? `${value}` : `${inputQuery}${value}`;
      return setInputQuery(input);
    }
    if (operator.clicked && !characters.includes(value)) {
      setOperator({ clicked: false });
      const input = operator.clicked ? `${value}` : `${inputQuery}${value}`;
      return setInputQuery(input);
    }
    if (typeof value !== "number") {
      setOperator({ clicked: true, value });
      return setExpression(`${inputQuery}${value}`);
    }
    const input = inputQuery === 0 ? `${value}` : `${inputQuery}${value}`;
    setInputQuery(input);
  };

  return (
    <div className="fixed-bottom calculator-container">
      <InputTab inputQuery={inputQuery} expression={expression} />
      <Keypad
        inputQuery={inputQuery}
        operator={operator}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
