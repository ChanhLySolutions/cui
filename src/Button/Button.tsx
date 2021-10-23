import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'primary' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  border?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { type, size = 'md', border = true, ...rest } = props;
  const className =
    props.className ||
    classNames(
      {
        'bg-primary-500 dark:hover:bg-primary-600 hover:bg-primary-400': type === 'primary',
        'size-sm': size === 'sm',
        'size-md': size === 'md',
        'size-lg': size === 'lg',
        'size-xl': size === 'xl',
        'size-xxl': size === 'xxl',
        'text-white': type === 'primary',
        'border-2': border,
      },
      !type && 'dark: text-white',
      'rounded'
    );
  return <button className={`${className} `} {...rest}></button>;
};
