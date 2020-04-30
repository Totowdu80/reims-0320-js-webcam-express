import React from 'react';
import './gameLose.css';

class GameLose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="loseInterface__container">
        <p>Oh no ! You get lost in the way !</p>
        <p>You have lost everything you won during your expedition !</p>

        <p>Do you want to try again ?</p>
        <button
          className="buttonPlay"
          onClick={this.props.restartGame}
          type="button"
        >
          Try again
        </button>
      </div>
    );
  }
}


export default GameLose;
