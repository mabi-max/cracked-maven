import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Writer's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Writing is not just a hobby, it is a lifestyle. </p>
        </div>
        <p className='p__opensans'>An art form that dates back to the earliest of times. If you can think it, we can create it. step into our world of creativity and leave fear behind.</p>
      </div>
       
       <div className='app__chef-sign'>
        <p>Koko Pepper</p>
        <p>Writer and Founder</p>
        <img src={images.sign} alt="sign" />
       </div>
    </div>
  </div>
);

export default Chef;
