import React from 'react';
import './Windy.css';

class WindyWebcam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="Webcam">
        <iframe src={apiDatabis.webcams[0]?.player.day.embed} enable="autoplay" className="videoEmbed" title="windyWebcam" />
      </div>
    );
  }
}

export default WindyWebcam;
