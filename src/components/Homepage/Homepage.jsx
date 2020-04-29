import React from 'react';
import './homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="homepage__container">
        <img className="homepage_logo" src="https://zupimages.net/up/20/18/clef.png" alt="Logo Webcam Express" />
        <p>Bored to be alone at home ? You want to travel a bit ?</p>
        <p>Join us in this epic adventure who will make you travel in the world with only one click !</p>
        <button type="button"> Lets go !</button>
      </div>
    );
  }
}

export default Homepage;
