import React from "react";
import sprite from "../../asserts/sprite.svg";

export default function Icon({ name, ...otherProps }) {
  return (
    <svg {...otherProps}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
}
