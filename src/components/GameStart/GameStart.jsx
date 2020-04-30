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
      <div className="page">
        <div className="gameStartDiv">
          <p className="p1">
            You are actually on the {this.props.state.categoryActual} of <strong>{this.props.apiData.actualData?.result.webcams[RandomNumber(0, 50)]?.location.city} </strong>
          </p>
          <p className="p2">Are you ready for this new mission ?</p>
          <p className="p3">Great ! Then let's go for the next target localisation !</p>
          <p className="p4">Which of these webcams is at the <strong>{this.props.state.categoryTarget}</strong> ?</p>
          <div className="ImageDiv">
            <div className="ColumnDiv">
              <img src={this.props.apiData.choiceOneData?.result.webcams[RandomNumber(0, 50)]?.image.daylight.preview} className="Image" alt="Choice 1" />
              <button
                className="buttonPlay"
                onClick={this.props.choiceOne}
                type="button"
              >
                This one !
              </button>
            </div>
            <div className="ColumnDiv">
              <img src={this.props.apiData.choiceTwoData?.result.webcams[RandomNumber(0, 50)]?.image.daylight.preview} className="Image" alt="Choice 2" />
              <button
                className="buttonPlay"
                onClick={this.props.choiceTwo}
                type="button"
              >
                This one !
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameStart;
