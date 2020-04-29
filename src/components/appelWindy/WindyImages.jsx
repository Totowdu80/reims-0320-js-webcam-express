import React from 'react';
import './Windy.css';
import RandomNumber from '../RandomQuote/RandomNumber';

class WindyImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '', RandomNumb: RandomNumber(0, 101), };
  }


  render() {
    const apiDatabis = this.props.apiData
    const apiDataTris = this.props.apiData
    return (
      <div className="Images">
        <img src={apiDatabis.apiData2?.result.webcams[RandomNumber(0, 101)]?.image.daylight.preview} alt="windyImage" />
        {console.log(apiDatabis.apiData2)}
        <img src={apiDataTris.apiData3?.result.webcams[RandomNumber(0, 101)]?.image.daylight.preview} alt="windyImage" />
        {console.log(apiDataTris.apiData3)}
      </div>
    );
  }
}

export default WindyImages;
