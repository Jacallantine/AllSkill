import React from 'react';
import "../app/CSS/PcCard.css"


const PcCard = ({name, price}) => {
  return (
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop flex flex-col ">    
          <h1>{name}</h1>
          <div className="name">Price: ${price}</div>
          <button className='button'><span className=''>Add</span></button>
        </div>
      </div>
  );
}

export default PcCard;