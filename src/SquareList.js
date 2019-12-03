import React, {Component} from 'react';
import Square from './Square';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class SquareList extends Component {
  constructor(props){
    super(props)
    this.randomColors = ['red', 'green', 'blue', 'yellow', 'orange', 'white', 'black', 'purple'];
    this.randomColors = this.randomColors.concat(this.randomColors);

    let squares = [];
    for(var i = 0; i < 16; i++){
      var pickedColor = this.randomColors.splice(this.randomInt(this.randomColors.length), 1)
      squares.push({id: i, pickedColor: pickedColor, cardState: CardState.HIDING})
    }

    this.state = {squares, noClick: false}
  }

  randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick = (id) => {
    id.preventDefault();
    this.setState(prevState => {
      let squares = prevState.squares.map(square => (
        square.id === id ? {
          ...square,
          cardState: square.cardState === CardState.HIDING ? CardState.MATCHING : CardState.HIDING
        } : square
      ));
      return {squares}
    })
  }

  render(){
    const squares = this.state.squares.map((square) => (
      <Square 
        key = {square.id}
        pickedColor = {square.pickedColor}
        showing = {square.cardState !== CardState.HIDING}
        onClick={this.handleClick}
      />
    ))
    return(
      <div>
        {squares}
      </div>
    )
  }
}

export default SquareList;