import classNames from 'classnames';
import { ButtonType } from '../types/ButtonType';
import styles from '../styles/Button.module.scss';
import Badge from './Badge';

interface ButtonProps {
  leftIcon?: React.ReactNode;
  text?: string;
  rightIcon?: React.ReactNode;
  type: ButtonType
  button?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  badge?: string | number;
}

export default function Button({
  leftIcon,
  text,
  rightIcon,
  type,
  button,
  badge,
}: ButtonProps) {
  const buttonClass = classNames({
    [styles.primaryButton]: type === ButtonType.PRIMARY,
  });

  return (
      <button {...button} className={buttonClass}>
        {leftIcon && (<div>
          {leftIcon}
        </div>)}
        {text && (<div>
          {text}
        </div>)}
        {rightIcon && (<div>
          {rightIcon}
        </div>)}
        {!!badge && <Badge value={badge}/>}
      </button>
  );
}