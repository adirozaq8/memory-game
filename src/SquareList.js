import React, {Component} from 'react';
import Square from './Square';

class SquareList extends Component {
  render(){
    const squares = [];

    for(var i = 0; i < 16; i++){
      squares.push(<Square key={i} />)
    }
    return(
      <div>
        {squares}
      </div>
    )
  }
}

export default SquareList;