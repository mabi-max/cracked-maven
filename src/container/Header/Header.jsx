import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Experience every script"/>
      <h1 className='app__header-h1'>The Key to Fine Writing</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}> Experience the best of storytelling. We take dreams and imaginatons and turn them into a reality. What are you waiting for? get started with us. </p>
       <button type='button' className='custom__button'>Get Sterted</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.writing} alt="header img" />
    </div>
  </div>
);

export default Header;
