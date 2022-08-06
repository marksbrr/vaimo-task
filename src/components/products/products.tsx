/* eslint-disable max-len */
/* eslint-disable camelcase */
import { FC } from 'react';
import './products.scss';
import Product from './product';

type ProductType = {
  currencySymbol?: string | undefined;
  totalHandler?: () => void;
  options?: any;
}

const Products:FC<ProductType> = ({
  currencySymbol,
  options,
}) => (
  <div className="product-container">
    {Object.keys(options).map((item) => (<Product product={options[item]} currencySymbol={currencySymbol} />))}
  </div>
);

export default Products;
