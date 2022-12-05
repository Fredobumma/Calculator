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

  const clearQuery = (value) => {
    if (value === "AC")
      return { inputQuery: 0, expression: "", operator: { value } };

    if (value === "C") return { inputQuery: 0, operator: { value } };
  };

  const addMinus = (value) => {
    if (value.type)
      return inputQuery ? { inputQuery: -inputQuery } : { inputQuery };
  };

  const percentage = (value) => {
    if (value === "%") {
      const input = inputQuery / 100;
      const inputValue =
        input.toString().length > 12 ? input.toString().slice(0, 11) : input;
      return {
        inputQuery: Number(inputValue),
      };
    }
  };

  const dot = (value) => {
    if (value === "." && inputQuery.toString().includes("."))
      return { inputQuery, operator: { value } };
    if (operator.value === "=" && value === ".")
      return {
        inputQuery: `${value}`,
        operator: { clicked: true, value },
      };
    if (
      value === "." &&
      operator.clicked &&
      characters.includes(operator.value)
    )
      return { inputQuery: `${value}`, operator: { clicked: true, value } };
    if (value === ".")
      return {
        inputQuery: `${inputQuery}${value}`,
        operator: { clicked: true, value },
      };
  };

  const equalSign = (value, lastValue) => {
    if (value === "=" && operator.value === ".") {
      console.log("what", `${inputQuery}0`);
      return {
        inputQuery: Number(`${inputQuery}0`),
        operator: { clicked: false, value },
      };
    }
    if (value === "=") {
      const finalValue = characters.includes(expression[lastValue])
        ? `${expression}${inputQuery}`
        : `${inputQuery}`;
      const evaluation = evaluate(replaceCharacters(finalValue));
      const inputValue =
        evaluation.toString().length > 12
          ? evaluation.toString().slice(0, 11)
          : evaluation;
      return {
        inputQuery: Number(inputValue),
        expression: finalValue,
        operator: { clicked: true, value },
      };
    }
  };

  const otherEvents = (value, lastValue) => {
    if (
      !characters.includes(value) &&
      characters.includes(expression[lastValue])
    ) {
      const input =
        operator.clicked || inputQuery.toString() === "0"
          ? `${value}`
          : `${inputQuery}${value}`;
      return { inputQuery: input, operator: { clicked: false } };
    }
    if (
      characters.includes(value) &&
      characters.includes(expression[lastValue]) &&
      !operator.clicked
    ) {
      const finalValue = `${expression}${inputQuery}`;
      const evaluation = evaluate(replaceCharacters(finalValue));
      const inputValue =
        evaluation.toString().length > 12
          ? evaluation.toString().slice(0, 11)
          : evaluation;
      return {
        inputQuery: Number(inputValue),
        expression: `${Number(inputValue)}${value}`,
        operator: { clicked: true, value },
      };
    }
    if (typeof value !== "number") {
      console.log("bug1");
      return {
        inputQuery,
        expression: `${inputQuery}${value}`,
        operator: { clicked: true, value },
      };
    }

    console.log("bug");

    const input =
      inputQuery.toString() === "0" || operator.clicked
        ? `${value}`
        : `${inputQuery}${value}`;
    return { inputQuery: input, operator: { clicked: false, value: "" } };
  };

  const handleClick = (value) => {
    const lastValue = expression.length - 1;
    const events = [
      clearQuery,
      addMinus,
      percentage,
      dot,
      equalSign,
      otherEvents,
    ];
    const output = events
      .map((element) => element(value, lastValue))
      .filter((result) => result)[0];

    console.log(operator, inputQuery);
    setOperator(output.operator ? output.operator : operator);
    setExpression(
      output.expression !== undefined ? output.expression : expression
    );
    setInputQuery(output.inputQuery);
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
