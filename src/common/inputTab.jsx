import React from "react";

const InputTab = ({ value }) => {
  return (
    <div>
      <input type="text" className="input" defaultValue={value} />
    </div>
  );
};

export default InputTab;
