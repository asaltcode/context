import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { CardContext } from '../utils/CardContextComponent';

const StarRating = ({r}) => {
  let rating = r
  const totalStars = 5;

  return (
    <div>
      
      <div className="star-rating border- p-1 rounded-2 "> 
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          return <FaStar key={index} className="star" color={starValue <= rating ? '#ffc107' : '#e4e5e9'} />
        })}&nbsp; ( {r} )
      </div>
    </div>
  );
};

export default StarRating;