import { FC } from 'react';
import './shipping.scss';
import InfoIcon from '../../assets/icons8-info.png';
import EnvelopeIcon from '../../assets/icons8-envelope.png';
import Button from '../shared/button/button';

type ShippingType = {
  amountOfDays: string | undefined;
  shippingCountry: string | undefined;
  shippingMethod?: string;
  shippingTime?: string;
  currencySymbol?: string;
  leadTimeInfo?: string;
  shippingInfo?: string;
  totalCost?: number | undefined;
}

const Shipping:FC<ShippingType> = ({
  amountOfDays,
  shippingCountry,
  shippingMethod,
  shippingTime,
  currencySymbol,
  leadTimeInfo,
  shippingInfo,
  totalCost,
}) => {
  const numberWithCommas = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="shipping-container">
      <div className="shipping-wrapper">
        <div className="shipping-info-wrapper">
          <div className="txt-shipping">
            {`Ship to ${shippingCountry} by ${shippingMethod}`}
          </div>
          <div className="total-wrapper">
            {`${currencySymbol} ${!totalCost ? '' : (numberWithCommas(+totalCost.toFixed(2)))}`}
          </div>
        </div>
        <div className="leadtime-wrapper txt-grey">
          <span className="txt-leadtime mr-16">{`Lead Time ${amountOfDays}`}</span>
          <span
            className="hovertext"
            data-hover={leadTimeInfo}
          >
            <img src={InfoIcon} alt="info-icon" className="info-icon" />
          </span>

        </div>
        <div className="shippingtime-wrapper txt-grey">
          <span className="txt-grey mr-16">{`Shipping time ${shippingTime}`}</span>
          <span
            className="hovertext2"
            data-hover={shippingInfo}
          >
            <img src={InfoIcon} alt="info-icon" className="info-icon" />
          </span>
        </div>
        <div className="shipping-btn-wrapper">
          <Button title="Login to Purchase" className="login-btn" />
          <Button title="Contact the Supplier" className="contact-btn" imgSrc={EnvelopeIcon} />
        </div>
      </div>
    </div>
  );
};
export default Shipping;
