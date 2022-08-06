import { FC, useState } from 'react';
import './products.scss';
import ProductCounter from '../shared/product-counter/product-counter';
import AmountHelper from '../../scripts/AmountHelper';

type ProductType = {
  product: OptionType;
  currencySymbol: string | undefined;
}

type OptionType = {
  label: string;
  price: any;
  oldPrice?: any;
}

const Product:FC<ProductType> = ({ product, currencySymbol }) => {
  const [quantity, setQuantity] = useState<number>();

  const getQuantity = (num: number) => {
    setQuantity(num);
  };

  return (
    <div className="product-wrapper">
      <div className="product-selection">
        <div>
          {(product?.label)?.toUpperCase()}
        </div>
      </div>
      <div className="product-btn-wrapper">
        <div className="currency-wrapper">
          {`${currencySymbol} ${!quantity
            ? (product?.price?.value).toFixed(2)
            : (quantity * product?.price?.value).toFixed(2)}`}
        </div>
        <ProductCounter
          getQuantity={getQuantity}
        />
      </div>
    </div>
  );
};

export default Product;
