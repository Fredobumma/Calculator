import React from "react";

const InputTab = ({ inputQuery, solvedInput }) => {
  return (
    <div className="input-group flex-wrap mt-5 justify-content-end">
      <input
        type="number"
        className="bcb border-0 imb-7 im-r input-solved text-end text-white w-50"
        value={solvedInput}
        disabled
      />
      <input
        type="number"
        className={`bcb border-0 input-query ${
          inputQuery.length > 5 && "input-query-max"
        } im-r text-end text-white w-80`}
        value={inputQuery}
        readOnly
      />
    </div>
  );
};

export default InputTab;
