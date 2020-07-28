import React from 'react';
import CAFECOFLIX2 from '../../assets/CAFECOFLIX2.png';
import './Menu.css';
import Button from '../Button/Button'
// import ButtonLink from './components/ButtonLink/ButtonLink'

function Menu() {
  return (
    <nav className = "Menu">
      <a href = "./#">
        <img className = "Logo" src = { CAFECOFLIX2 } alt= "Cafecoflix logo"/>
      </a>

      <Button as = "a" className = "ButtonLink" href = "/">
        New Video
      </Button>
      
    </nav>
  )
};

export default Menu;