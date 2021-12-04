import classNames from 'classnames';
import { forwardRef, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

export interface ButtonProps {
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'primary' | 'link';
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const { theme } = useContext(ThemeContext);
    const { type, border, size = theme.size, ...rest } = props;

    const className =
      props.className ||
      classNames(
        {
          'bg-primary-500 dark:hover:bg-primary-600 hover:bg-primary-400': type === 'primary',
          'text-white': type === 'primary',
          border,
        },
        !type && 'dark:text-white',
        size,
        'rounded'
      );
    return <button ref={ref} className={`${className} `} {...rest}></button>;
  }
);
