import React from 'react';
import "../../app/CSS/Buttons/button2.css"

const Button2 = ({ content }) => {
  return (
    <button className="button2" type='submit'>
      {content}
    </button>
  );
};

export default Button2;
