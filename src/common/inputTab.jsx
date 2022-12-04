import React from "react";
import PropTypes from "prop-types";
import { getString } from "./../utilities/getString";

const InputTab = ({ inputQuery, expression }) => {
  return (
    <div className="input-group input-wrapper flex-wrap mt-5">
      <input
        type="text"
        className="bcb border-0 im-b im-r input-solved text-white"
        value={getString(expression)}
        disabled
      />
      <input
        type="text"
        className={`bcb border-0 input-query ${
          inputQuery.toString().length > 5 && "input-query-max"
        } im-r text-end text-white w-80`}
        value={getString(inputQuery)}
        readOnly
      />
    </div>
  );
};

InputTab.propTypes = {
  inputQuery: PropTypes.any,
  expression: PropTypes.any,
};

export default InputTab;
