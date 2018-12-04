import React from "react";
import PropTypes from "prop-types";

export default function Icon({ type, size }) {
  let daSize = "";
  switch (size) {
    case "medium":
      daSize = "is-medium";
      break;
    case "large":
      daSize = "is-large";
      break;
    case "extra-large":
      daSize = "is-extra-large";
      break;
    default:
      break;
  }
  return <i className={`icon ${type} ${daSize}`} />;
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string
};

Icon.defaultProps = {
  type: "play"
};
