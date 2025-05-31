import React from 'react';
import "../../app/CSS/Buttons/button1.css"

const Button1 = ({ content }) => {
  return (
    <div className="button-wrapper">
      <button className="button1">
        <span>{content}</span>
      </button>
    </div>
  );
}

export default Button1;