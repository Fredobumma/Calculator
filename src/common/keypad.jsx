import React from "react";

const Keypad = ({ onClick }) => {
  const buttons = [
    [
      "AC",
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
            ? "bg-gray black"
            : "text-white",
      },
      { name: button[lastElement(button)] === value && "bg-yellow" },
      { name: buttons[lastElement(buttons)] === button && "rounded-pill" },
    ];

    return classes
      .map((c) => c.name || "")
      .toString()
      .replaceAll(",", " ");
  };

  return (
    <div className="fixed-bottom button-container">
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
            >
              {value}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
