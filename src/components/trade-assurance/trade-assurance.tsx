import './trade-assurance.scss';
import Lock from '../../assets/Icon.svg';
import Visa from '../../assets/icons8-visa.svg';
import Mastercard from '../../assets/icons8-mastercard.svg';
import ApplePay from '../../assets/icons8-apple_pay.svg';

const TradeAssurance = () => (
  <div className="trade-wrapper">
    <div className="trade-logo-wrapper">
      <img src={Lock} alt="" className="lock-logo" />
      <span className="trade-txt">Trade Assurance</span>
      <span className="txt-grey">protects your Alibaba.com orders</span>
    </div>
    <div className="trade-logo-wrapper">
      <span className="txt-grey">Payments: </span>
      <img src={Visa} alt="Visa" className="payment-logo" />
      <img src={Mastercard} alt="Mastercard" className="payment-logo" />
      <img src={ApplePay} alt="ApplePay" className="payment-logo" />
    </div>
    <div className="trademark-wrapper">
      <div className="txt-grey">Alibaba.com Logistics</div>
      <div className="txt-grey">Inspection Solutions</div>
    </div>
  </div>
);

export default TradeAssurance;
