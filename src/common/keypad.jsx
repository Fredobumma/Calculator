import React from "react";
import PropTypes from "prop-types";

const Keypad = ({ inputQuery, operator, onClick }) => {
  const buttons = [
    [
      `${inputQuery !== 0 && inputQuery.toString().length >= 1 ? "C" : "AC"}`,
      <span>
        <sup>+</sup>/-
      </span>,
      "%",
      "÷",
    ],
    [7, 8, 9, "×"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const lastElement = (array) => array.length - 1;
  const getClasses = (buttons, button, value) => {
    const classes = [
      {
        name:
          buttons[0] === button && !(button[lastElement(button)] === value)
            ? "bg-characters-g black"
            : "btn-textColor",
      },
      {
        name:
          button[lastElement(button)] === value &&
          `bg-operators-y ${
            operator && operator.value === value ? "bg-operators-w" : ""
          }`,
      },
      { name: buttons[lastElement(buttons)] === button && "rounded-pill" },
    ];

    return classes
      .map((c) => c.name || "")
      .toString()
      .replaceAll(",", " ");
  };

  return (
    <div>
      {buttons.map((button, index) => (
        <div
          className={`grid5x4 ${
            (buttons[lastElement(buttons)] === button && "grid-zero-row") || ""
          }`}
          key={index}
        >
          {button.map((value, index) => (
            <button
              className={`button bg-numbers m-1 rounded-circle text-center ${getClasses(
                buttons,
                button,
                value
              )}`}
              key={index}
              onClick={() => onClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

Keypad.propTypes = {
  inputQuery: PropTypes.any,
  operator: PropTypes.object,
  onClick: PropTypes.func,
};

export default Keypad;
