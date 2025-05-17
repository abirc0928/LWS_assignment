import React from "react";

const Button = ({lable, hoverColor, id, onClick}) => {
  return (
    <button
      className={`bg-gray-800  text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 hover:${hoverColor}`}
      onClick={() => onClick(id)}
    >
      {lable}
    </button>
  );
};

export default Button;
