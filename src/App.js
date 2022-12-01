import React, { useState } from "react";
import { evaluate } from "mathjs";
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
    if (value.type) {
      return setInputQuery(inputQuery ? -inputQuery : inputQuery);
    }
    if (value === "%") {
      setOperator({ clicked: true, value });
      setExpression("");
      const input = inputQuery / 100;
      const inputValue =
        input.toString().length > 12 ? input.toString().slice(0, 11) : input;
      return setInputQuery(Number(inputValue));
    }
    if (value === "." && inputQuery.toString().includes(".")) return;
    if (
      !characters.includes(value) &&
      operator.clicked &&
      operator.value === "."
    ) {
      setOperator({ clicked: false });
      return setInputQuery(`${inputQuery}${value}`);
    }
    if (value === ".") {
      setOperator({ clicked: true, value });
      return setInputQuery(`${inputQuery}.`);
    }
    if (value === "=" && operator.value === ".") {
      setOperator({ clicked: false, value });
      return setInputQuery(`${inputQuery}0`);
    }
    // if (value === "=" && operator.value === "=") return;
    if (value === "=") {
      setOperator({ clicked: true, value });
      const finalValue = characters.includes(expression[lastValue])
        ? `${expression}${inputQuery}`
        : `${inputQuery}`;
      setExpression(finalValue);
      const output = replaceCharacters(finalValue);
      return setInputQuery(evaluate(output));
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
    const input =
      inputQuery.toString() === "0" || operator.clicked
        ? `${value}`
        : `${inputQuery}${value}`;
    setOperator({ clicked: false, value: "" });
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
