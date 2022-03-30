/* eslint-disable max-len */
import { FC } from 'react';
import './product-description.scss';
import Button from '../shared/button/button';
import CheckMark from '../../assets/icons8-ok.png';
import Ratings from '../ratings/ratings';

type ProductDescriptionType = {
  productName: string | undefined;
  isReadyForShipping?: boolean;
  isInStock?: boolean;
  isFastDispatchAvailable?: boolean;
  reviewRating?: string;
  reviewCount?: number;
  totalBuyerCount?: number;
}

const ProductDescription:FC<ProductDescriptionType> = ({
  productName,
  isReadyForShipping: IsReadyForShipping,
  isInStock,
  isFastDispatchAvailable,
  reviewRating,
  reviewCount,
  totalBuyerCount,
}) => (
  <div className="description-container">
    <div className="button-wrapper">
      {!IsReadyForShipping ? '' : <Button className="btn-ready" title="Ready to Ship" />}

      {!isInStock ? '' : <Button imgSrc={CheckMark} className="btn-stock-dispatch" title="In Stock" />}

      {!isFastDispatchAvailable ? '' : <Button imgSrc={CheckMark} className="btn-stock-dispatch" title="Fast Dispatch" />}
    </div>
    <div className="description-text-wrapper">
      <p className="description-text">
        {productName}
        <Button className="btn-hotsaleproducts" title="Hot sale products" />
      </p>
    </div>
    <Ratings
      reviewRating={reviewRating}
      reviewCount={reviewCount}
      totalBuyerCount={totalBuyerCount}
    />
  </div>
);

export default ProductDescription;
