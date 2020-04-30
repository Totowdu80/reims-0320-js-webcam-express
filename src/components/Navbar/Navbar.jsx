import React from 'react';
import './Navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div>
          <nav>
            <ul className="navBar">
              <li className="li__logo"><img className="navbar__logo" src="https://zupimages.net/up/20/18/clef.png" alt="Logo Webcam Express" /></li>
              <li className="li">Total Jackpot : {this.props.playerPoints}€ </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default NavBar;
