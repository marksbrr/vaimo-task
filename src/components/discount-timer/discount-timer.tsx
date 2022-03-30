import { FC, useEffect, useState } from 'react';
import './discount-timer.scss';
import dayjs from 'dayjs';
import ClockIcon from '../../assets/icons8-clock.png';

type DiscountType = {
  discountAmount?: string;
  discountEndsAt?: string;

}

const DiscountTimer:FC<DiscountType> = ({ discountAmount, discountEndsAt }) => {
  let timer: any;

  const [currentTime, setCurrentTime] = useState('');

  const getRemainingTime = () : string => {
    const sanitized = dayjs(discountEndsAt ?? dayjs());
    const diff = sanitized.diff(dayjs());
    return dayjs(diff).format('D[d]:HH[h]:mm[m]:ss[s]');
  };

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      setCurrentTime(getRemainingTime());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [discountEndsAt]);

  return (
    <div className="discount-wrapper">
      <div className="txt-orange mr-8">
        <span>
          {`${discountAmount} OFF `}
          <span className="txt-grey">Discount ends in</span>
        </span>
      </div>
      <div className="txt-grey" />
      <div className="clock-wrapper clock-txt">
        <img src={ClockIcon} alt="clock-icon" className="clock-icon" />
        {currentTime}
      </div>
    </div>
  );
};

export default DiscountTimer;
