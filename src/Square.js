import React from 'react';
import './Square.css';

const Square = ({pickedColor, onClick, showing}) => {
  let style ={}
  if(showing){
    style.backgroundColor = pickedColor
  }
  return (
    <div className={`square ${pickedColor}`} onClick={onClick} style={style}>
    </div>
  )
}

export default Square;