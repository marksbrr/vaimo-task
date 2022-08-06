<<<<<<< HEAD
/* eslint-disable max-len */
/* eslint-disable camelcase */
import { FC } from 'react';
import './products.scss';
import Product from './product';

type ProductType = {
  currencySymbol?: string | undefined;
  totalHandler?: () => void;
  options?: any;
=======
import { FC, useState } from 'react';
import './products.scss';
import ProductCounter from '../shared/product-counter/product-counter';
import ProductCounter2 from '../shared/product-counter/product-counter2/product-counter2';
import ProductCounter3 from '../shared/product-counter/product-counter3/product-counter3';

type ProductType = {
  title1080P?: string;
  currencySymbol?: string;
  price1080P?: any;
  title4K?: string;
  price4K?: any;
  titleBattery?: string;
  priceBattery?: any;
  totalHandler?: () => void;
>>>>>>> 93c04e44a85d39aef3d639684f7ca6048550b579
}

const Products:FC<ProductType> = ({
  currencySymbol,
<<<<<<< HEAD
  options,
}) => (
  <div className="product-container">
    {Object.keys(options).map((item) => (<Product product={options[item]} currencySymbol={currencySymbol} />))}
  </div>
);
=======
  price1080P,
  title4K,
  price4K,
  titleBattery,
  priceBattery,
}) => {
  const [quantity, setQuantity] = useState<number>();
  const [quantity2, setQuantity2] = useState<number>();
  const [quantity3, setQuantity3] = useState<number>();

  const getQuantity = (num: number) => {
    setQuantity(num);
  };

  const getQuantity2 = (num: number) => {
    setQuantity2(num);
  };

  const getQuantity3 = (num: number) => {
    setQuantity3(num);
  };

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
            {`${currencySymbol} ${!quantity ? price1080P : (quantity * price1080P).toFixed(2)}`}
          </div>
          <ProductCounter
            getQuantity={getQuantity}
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
            {`${currencySymbol} ${!quantity2 ? price4K : (quantity2 * price4K).toFixed(2)}`}
          </div>

          <ProductCounter2
            getQuantity2={getQuantity2}
          />

        </div>
      </div>

      <div className="product-wrapper">
        <div className="product-selection">
          <div>
            {(titleBattery ?? '')}
          </div>
        </div>
        <div className="product-btn-wrapper">
          <div className="currency-wrapper">
            {`${currencySymbol} ${!quantity3 ? (priceBattery) : (quantity3 * priceBattery).toFixed(2)}`}
          </div>

          <ProductCounter3
            getQuantity3={getQuantity3}
          />

        </div>
      </div>

    </div>
  );
};
>>>>>>> 93c04e44a85d39aef3d639684f7ca6048550b579

export default Products;
