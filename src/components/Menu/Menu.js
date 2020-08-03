import React from 'react';
import { Link } from 'react-router-dom';
import CAFECOFLIX2 from '../../assets/CAFECOFLIX2.png';
import './Menu.css';
import Button from '../Button/Button';
// import ButtonLink from './components/ButtonLink/ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={CAFECOFLIX2} alt="Cafecoflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/video">
        New Video
      </Button>

    </nav>
  );
}

export default Menu;
