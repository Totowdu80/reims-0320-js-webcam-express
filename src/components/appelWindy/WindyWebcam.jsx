import React from 'react';
import Axios from 'axios';

class WindyWebcam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="App">
        <header className="App-header">
          <iframe src={apiDatabis.webcams[0]?.player.day.embed} title="windyWebcam" />
        </header>
      </div>
    );
  }
}

export default WindyWebcam;
