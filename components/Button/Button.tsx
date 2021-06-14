import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<Element> {
  onClick?: () => void;
}

export const defaultButtonProps: ButtonProps = {
  onClick: () => {},
};

export function Button(props: ButtonProps) {
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.onClick?.();
  };

  return (
    <button
      className={`box-border px-4 py-1 border ${props.className || ''}`}
      {...defaultButtonProps}
      {...props}
      onClick={onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
