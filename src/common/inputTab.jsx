import React from "react";

const InputTab = ({ value }) => {
  return (
    <div className="input-group flex-wrap mt-5 justify-content-end">
      <input
        type="number"
        className="bcb border-0 imb-7 im-r input-solved text-end text-white w-50"
        value={2}
        disabled
      />
      <input
        type="number"
        className="bcb border-0 input-query im-r text-end text-white w-80"
        defaultValue="0"
      />
    </div>
  );
};

export default InputTab;
