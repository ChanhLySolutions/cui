import React from 'react';

export interface ButtonProps {
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props}></button>;
};
