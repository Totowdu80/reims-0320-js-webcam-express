import React from 'react';

class Windy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.props.apiData} alt="windyImage" />
          <img src={this.props.apiData} alt="windyImage" />
        </header>
      </div>
    );
  }
}

export default Windy;
