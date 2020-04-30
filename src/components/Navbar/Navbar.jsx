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
              <li className="li">Score: </li>
              <li className="li"> 'Set the Score'</li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default NavBar;
