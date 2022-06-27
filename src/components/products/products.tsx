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

          <ProductCounter
            getQuantity={getQuantity2}
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

          <ProductCounter
            getQuantity={getQuantity3}
          />

        </div>
      </div>

    </div>
  );
};

export default Products;
