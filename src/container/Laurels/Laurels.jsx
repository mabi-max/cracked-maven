import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: {imgUrl, title, subtitle} }) => (
  <div className='app__services_card'>
    <img src={imgUrl} alt="services" />
    <div className='app__services_card-content'>
      <p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="What we do"/>
      <h1 className='headtext__cormorant'> Our Services</h1>

      <div className='app__services'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>

    <div className='app__wrapper_ig'>
      <img src={images.typing} alt="filming" />
    </div>
  </div>

);

export default Laurels;
