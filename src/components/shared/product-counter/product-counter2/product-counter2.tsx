import { FC, useEffect, useState } from 'react';
import Button from '../../button/button';
import Plus from '../../../../assets/icons8-plus_math.png';
import Minus from '../../../../assets/icons8-minus.png';

interface Props {
  className?: string;
  getQuantity2: (num: number) => void;
}

const ProductCounter2: FC<Props> = ({ getQuantity2 }) => {
  const [inputValue2, setInputValue2] = useState(0);

  const increaseValue = () => {
    const newValue = inputValue2 + 1;
    setInputValue2(newValue);
    getQuantity2(inputValue2);
  };

  const decreaseValue = () => {
    if (inputValue2 > 0) {
      setInputValue2(inputValue2 - 1);
    }
  };

  useEffect(() => {
    getQuantity2(inputValue2);
  }, [inputValue2]);

  return (
    <>
      <Button
        imgSrc={Minus}
        className={inputValue2 > 0 ? 'plus-square ml-8' : 'minus-square ml-8 disabled'}
        onClick={() => {
          decreaseValue();
        }}
      />
      <input
        id="number-input"
        className="grey-square align-center txt-grey"
        placeholder="0"
        value={inputValue2}
        onChange={(e) => setInputValue2(+e.target.value)}
      />
      <Button
        imgSrc={Plus}
        className="plus-square"
        onClick={increaseValue}
      />
    </>
  );
};

export default ProductCounter2;
