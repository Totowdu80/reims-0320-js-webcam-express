import React from 'react';
import RandomNumber from '../RandomQuote/RandomNumber';
import './gameStart.css';

class GameStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="gameStartDiv">
          <p>You are actually on the {this.props.state.categoryActual} of Bamako </p>
          <p>Are you ready for you first mission ?</p>
          <p>Great ! Then let's go for the next target localisation !</p>
          <p>Which of this webcam is at the {this.props.state.categoryTarget}</p>
        </div>
        <div className="ImageDiv">
          <div className="ColumnDiv">
            <img src={this.props.apiData.choiceOneData?.result.webcams[RandomNumber(0, 50)]?.image.current.preview} className="Image" alt="Choice 1" />
            <button
              className="buttonPlay"
              onClick={this.props.choiceOne}
              type="button"
            >
              This one !
            </button>
          </div>
          <div>
            <img src={this.props.apiData.choiceTwoData?.result.webcams[RandomNumber(0, 50)]?.image.daylight.preview} className="Image" alt="Choice 2" />
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
