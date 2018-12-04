import React from "react";
import PropTypes from "prop-types";

export default function Container({
  title,
  center,
  dark,
  rounded,
  style,
  children
}) {
  const hasTitle = title ? "with-title" : "";
  const isCentered = center ? "is-center" : "";
  const isDark = dark ? "is-dark" : "";
  const isRounded = rounded ? "is-rounded" : "";

  let daStyle = { ...style };

  if (center) {
    daStyle = {
      ...daStyle,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    };
  }

  return (
    <section
      className={`container ${hasTitle} ${isCentered} ${isDark} ${isRounded}`}
      style={daStyle}
    >
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
  dark: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.object
};
