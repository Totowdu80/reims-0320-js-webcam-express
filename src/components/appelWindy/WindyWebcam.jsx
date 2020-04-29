import React from 'react';
import './Windy.css';
import RandomNumber from '../RandomQuote/RandomNumber';

class WindyWebcam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '', RandomNumb: RandomNumber(0, 51), };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="Webcam">
        <iframe src={apiDatabis.apiData1?.result.webcams[RandomNumber(0, 51)]?.player.day.embed} enable="autoplay" className="videoEmbed" title="windyWebcam" />
        <p>test</p>
      </div>
    );
  }
}

export default WindyWebcam;
