import React from 'react';
import Avatar from '../images/Hoang.png';

const NameBar = () => (
  <div className='name-bar'>
    <div className="avatar">
      <img src={Avatar}/>  
    </div>
    <div className="title">
      Hoang Nguyen Software Developer
    </div>
  </div>
);

export default NameBar;
