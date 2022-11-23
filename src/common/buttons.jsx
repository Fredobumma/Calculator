import React from "react";

const Buttons = ({ onClick }) => {
  const buttons = [
    [
      "AC",
      <span>
        <sup>+</sup>/<sub>-</sub>
      </span>,
      "%",
      "÷",
    ],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <div className="container text-center">
      {buttons.map((button) => (
        <div className="row">
          {button.map((element) => (
            <div className="col bg-numbers bg-gradient rounded-circle text-white">
              {element}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
