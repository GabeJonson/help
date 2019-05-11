import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  type: 'button' | 'submit';
  children?: string;
  disable?: boolean;
  className?: string | '';
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  type,
  children,
  disable,
  className,
  onClick,
}) => (
  <button
    type={type}
    disabled={disable}
    className={classNames(styles.defaultButtonStyle, className)}
    onClick={onClick}
  >
    {children}
  </button>
);
