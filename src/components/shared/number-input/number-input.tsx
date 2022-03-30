/* eslint-disable react/no-unused-prop-types */
import { FC, SetStateAction, useState } from 'react';
import './number-input.scss';

type NumberInputType = {
  onChange?:() => void;
  className?: string;
  inputHandler: (num: number) => void;
}

const NumberInput: FC<NumberInputType> = ({ onChange, className }) => {
  const [inputValue, setInputValue] = useState(0);

  // @ts-ignore
  const inputHandler = (value: number) => {
    setInputValue(value);
  };

  return (
    <>
      <input
        id="number-input"
        className={className}
        placeholder="0"
        value={inputValue}
        onChange={(e) => inputHandler(+e.target.value)}
      />
    </>
  );
};

export default NumberInput;
