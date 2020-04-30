import React from 'react';

class GameStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <p>You are actually on the {this.state.categoryActual} of Bamako </p>
          <p>Are you ready for you first mission ?</p>
          <p>Great ! Then let's go for the next target localisation !</p>
          <p>Which of this webcam is at the {this.state.categoryTarget}</p>
        </div>
        <div>
          <div>
            <img src="https://www.bouger-voyager.com/wp-content/uploads/2018/03/plages-de-goa-6.jpg" alt="lol" />
            <button
              className="buttonPlay"
              onClick={this.props.choiceOne}
              type="button"
            >
              This one !
            </button>
          </div>
          <div>
            <img src="https://www.bouger-voyager.com/wp-content/uploads/2018/03/plages-de-goa-6.jpg" alt="lol" />
            <button
              className="buttonPlay"
              onClick={this.props.choiceTwo}
              type="button"
            >
              The one !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameStart;
