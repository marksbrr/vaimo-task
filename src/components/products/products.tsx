import { FC, useState } from 'react';
import Button from '../shared/button/button';
import './products.scss';
import Plus from '../../assets/icons8-plus_math.png';
import Minus from '../../assets/icons8-minus.png';
import NumberInput from '../shared/number-input/number-input';

type ProductType = {
  title1080P?: string;
  currencySymbol?: string;
  price1080P?: number;
  title4K?: string;
  price4K?: number;
  titleBattery?: string;
  priceBattery?: number;
}

const Products:FC<ProductType> = ({
  title1080P,
  currencySymbol,
  price1080P,
  title4K,
  price4K,
  titleBattery,
  priceBattery,
}) => {
  const a = 5;

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="product-selection">
          <div>
            {(title1080P)?.toUpperCase()}
          </div>
        </div>
        <div className="product-btn-wrapper">
          <div className="currency-wrapper">
            {`${currencySymbol} ${price1080P}`}
          </div>
          <Button
            imgSrc={Minus}
            className="minus-square"
          />
          <NumberInput
            inputHandler={() => {}}
            className="grey-square align-center txt-grey"
          />
          <Button
            imgSrc={Plus}
            className="plus-square"
          />
        </div>
      </div>

      <div className="product-wrapper">
        <div className="product-selection">
          <div>
            {(title4K)?.toUpperCase()}
          </div>
        </div>
        <div className="product-btn-wrapper">
          <div className="currency-wrapper">
            {`${currencySymbol} ${price4K}`}
          </div>
          <Button
            imgSrc={Minus}
            className="minus-square"
          />
          <NumberInput
            inputHandler={() => {}}
            className="grey-square align-center txt-grey"
          />
          <Button
            imgSrc={Plus}
            className="plus-square"
          />
        </div>
      </div>

      <div className="product-wrapper">
        <div className="product-selection">
          <div>
            {(titleBattery)}
          </div>
        </div>
        <div className="product-btn-wrapper">
          <div className="currency-wrapper">
            {`${currencySymbol} ${priceBattery?.toFixed(2)}`}
          </div>
          <Button
            imgSrc={Minus}
            className="minus-square"
          />
          <NumberInput
            inputHandler={() => {}}
            className="grey-square align-center txt-grey"
          />
          <Button
            imgSrc={Plus}
            className="plus-square"
          />
        </div>
      </div>

    </div>
  );
};

export default Products;
