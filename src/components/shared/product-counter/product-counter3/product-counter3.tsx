import { FC, useEffect, useState } from 'react';
import Button from '../../button/button';
import Plus from '../../../../assets/icons8-plus_math.png';
import Minus from '../../../../assets/icons8-minus.png';

interface Props {
  className?: string;
  getQuantity3: (num: number) => void;
}

const ProductCounter3: FC<Props> = ({ getQuantity3 }) => {
  const [inputValue, setInputValue] = useState(0);

  const increaseValue = () => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    getQuantity3(inputValue);
  };

  const decreaseValue = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  };

  useEffect(() => {
    getQuantity3(inputValue);
  }, [inputValue]);

  return (
    <>
      <Button
        imgSrc={Minus}
        className={inputValue > 0 ? 'plus-square ml-8' : 'minus-square ml-8 disabled'}
        onClick={() => {
          decreaseValue();
        }}
      />
      <input
        id="number-input"
        className="grey-square align-center txt-grey"
        placeholder="0"
        value={inputValue}
        onChange={(e) => setInputValue(+e.target.value)}
      />
      <Button
        imgSrc={Plus}
        className="plus-square"
        onClick={increaseValue}
      />
    </>
  );
};

export default ProductCounter3;
