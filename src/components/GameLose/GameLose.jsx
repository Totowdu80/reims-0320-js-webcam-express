import React from 'react';

class GameLose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Oh no ! You get lost in the way !</p>
        <p>You've lost everything you won during your missions !</p>

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
