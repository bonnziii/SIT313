import React from 'react';
import './HeaderImage.css';

function HeaderImage() {
  return (
    <img
      src={require('../images/header.png')}
      alt="Header"
      className="header-image"
    />
  );
}

export default HeaderImage;

