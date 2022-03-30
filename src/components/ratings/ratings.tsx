import {
  FC, JSXElementConstructor, useEffect, useState,
} from 'react';
import Star from '../../assets/icons8-star_filled.png';
import './ratings.scss';

type RatingType = {

  reviewRating?: string;
  reviewCount?: number;
  totalBuyerCount?: number;
}

const Ratings:FC<RatingType> = ({
  reviewRating,
  reviewCount,
  totalBuyerCount,
}) => (
  <div className="review-container">
    <div className="star-wrapper">
      <span>
        {[...Array(parseInt(reviewRating || '1', 10))].map((num) => (
          <img
            src={Star}
            key={num}
            alt="star"
            className="star-icon"
          />
        ))}
      </span>
      <span className="txt-orange">
        {reviewRating}
      </span>
      <span className="txt-grey">
        {`${reviewCount} Reviews`}
      </span>
      <div className="buyers-wrapper">
        {`${totalBuyerCount} buyers`}
      </div>
    </div>
  </div>
);

export default Ratings;
