import React from 'react';

class WindyImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="App">
        <header className="App-header">
          <img src={apiDatabis.webcams[0]?.image.current.preview} alt="windyImage" />
          <img src={apiDatabis.webcams[4]?.image.current.preview} alt="windyImage" />
        </header>
      </div>
    );
  }
}

export default WindyImages;
