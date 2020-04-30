import React from 'react';
import RandomNumber from '../RandomQuote/RandomNumber';

class GameWin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Random: RandomNumber(0, 50),
    };
  }

  render() {
    const apiDataBis = this.props.apiData
    return (
      <div>
        <p>Nice job ! You succeed to go to the {this.props.state.categoryTarget}</p>
        <iframe src={apiDataBis.targetData?.result.webcams[this.state.Random]?.player.day.embed} enable="autoplay" className="videoEmbed" title="windyWebcam" />
        <p>You won 200Flouz to your jackpot !</p>

        <p>Let's go to the next mission !</p>
        <button
          className="buttonPlay"
          onClick={this.props.continueGame}
          type="button"
        >
          Continue
        </button>
      </div>
    );
  }
}


export default GameWin;
