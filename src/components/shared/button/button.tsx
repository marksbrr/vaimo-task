import { FC } from 'react';
import './button.scss';

interface Props {
  title?: string;
  className?: string;
  onClick?: () => void;
  imgSrc?: string;
}

const Button: FC<Props> = ({
  title, onClick, imgSrc, className,
}) => (

  <button
    className={className}
    onClick={onClick}
  >
    {!imgSrc ? '' : <img src={imgSrc} alt={title} className="icon" />}
    {title}
  </button>
);

export default Button;
