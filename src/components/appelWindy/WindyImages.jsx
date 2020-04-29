import React from 'react';
import './Windy.css';

class WindyImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="Images">
        <img src={apiDatabis.apiData2?.result.webcams[0]?.image.daylight.preview} alt="windyImage" />
        <img src={apiDatabis.apiData3?.result.webcams[4]?.image.daylight.preview} alt="windyImage" />
      </div>
    );
  }
}

export default WindyImages;
