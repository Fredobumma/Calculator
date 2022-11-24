import React from "react";

const Buttons = ({ onClick }) => {
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

  // const getBgClasses = () => {
  //   return true;
  // };

  return (
    <div className="fixed-bottom button-container">
      {buttons.map((button, index) => (
        <div className="grid5x4" key={index}>
          {button.map((element, index) => (
            <span
              className="button bg-numbers m-1 rounded-circle text-center text-white"
              key={index}
            >
              {element}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
