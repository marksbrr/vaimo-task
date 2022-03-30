import { FC, useState } from 'react';

interface Props {
  amount?: number;
  className?: string;

}

const CounterButton: FC<Props> = ({ className, amount }) => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={countHandler}
        className={className}
      >
        {count ?? 0}
      </button>
    </div>
  );
};

export default CounterButton;
