import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/rnm.png'

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <div className="container">
          <Link to="/">
            <img className={'img-fluid logo'}
              alt="Rick N Morty"
              src={logo} />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
