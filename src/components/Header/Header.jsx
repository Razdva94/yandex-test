import React from 'react';
import './Header.css';

const Header = () => {
  return (
   <header className='header'>
    <nav className='header__nav'>
      <a className='header__nav-link' href="#about-me">О себе</a>
      <a className='header__nav-link' href="#project">Ссылка на проект</a>
      <a className='header__nav-link' href="#css-trick">CSS фишка</a>
    </nav>
   </header>
  )
}

export default Header