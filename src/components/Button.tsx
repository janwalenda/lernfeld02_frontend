import classNames from 'classnames';
import { ButtonType } from '../types/ButtonType';
import styles from '../styles/Button.module.scss';
import Badge from './Badge';
import { ButtonFloat } from '../types/ButtonFloat';

interface ButtonProps {
  leftIcon?: React.ReactNode;
  text?: string;
  rightIcon?: React.ReactNode;
  type: ButtonType;
  float?: ButtonFloat.LEFT | ButtonFloat.RIGHT | undefined;
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  badge?: string | number;
}

export default function Button({
  leftIcon,
  text,
  rightIcon,
  type,
  float,
  buttonProps,
  badge,
}: ButtonProps) {
  let buttonClass = classNames({
    [styles.primaryButton]: type === ButtonType.PRIMARY,
    [styles.secondaryButton]: type === ButtonType.SECONDARY,
    [styles.tertiaryButton]: type === ButtonType.TERTIARY
  });

  if (float !== undefined) {
    buttonClass = buttonClass + " " + classNames({
      [styles.buttonLeft]: float === ButtonFloat.LEFT,
      [styles.buttonRight]: float === ButtonFloat.RIGHT
    })
  }
  
  return (
      <button {...buttonProps} className={buttonClass}>
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