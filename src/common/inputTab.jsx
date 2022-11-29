import React from "react";

const InputTab = ({ inputQuery, expression }) => {
  const maxInput = (value) => value.toString().slice(0, 11);
  return (
    <div className="input-group input-wrapper flex-wrap mt-5">
      <input
        type="text"
        className="bcb border-0 im-b im-r input-solved text-white"
        value={maxInput(expression)}
        disabled
      />
      <input
        type="text"
        className={`bcb border-0 input-query ${
          inputQuery.toString().length > 5 && "input-query-max"
        } im-r text-end text-white w-80`}
        value={maxInput(inputQuery)}
        readOnly
      />
    </div>
  );
};

export default InputTab;
