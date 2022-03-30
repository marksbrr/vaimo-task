import { FC } from 'react';
import './price-range.scss';

type PriceRangeType = {

  batteryPrice?: number;
  currencySymbol?: string;
  dronePrice?: number;
  oldBatteryPrice?: number;
  oldDronePrice?: number;

}

const PriceRange:FC<PriceRangeType> = ({
  batteryPrice,
  currencySymbol,
  dronePrice,
  oldBatteryPrice,
  oldDronePrice,
}) => {
  const numberWithCommas = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="price-container">
      <div className="price-wrapper">
        <div className="txt-orange-bold">
          {`${currencySymbol} ${batteryPrice?.toFixed(2)} - ${currencySymbol} ${dronePrice} `}
        </div>
        <div className="option-wrapper">
          <div className="txt-grey">/ Option</div>
          <div className="txt-splitter"> | </div>
          <div className="txt-options">2 Options</div>
          <div className="txt-grey">  (Min.Order) </div>
        </div>
      </div>

      <div className="oldprice-wrapper line-through txt-grey">
        {`${currencySymbol}
           ${oldBatteryPrice}
            - ${currencySymbol}
             ${!oldDronePrice ? '' : (numberWithCommas(oldDronePrice))}` }
      </div>
    </div>
  );
};

export default PriceRange;
