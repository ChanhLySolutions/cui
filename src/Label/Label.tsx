import { FC } from 'react';

interface LabelProps {
  name?: string;
  required?: boolean;
}

export const Label: FC<LabelProps> = (props) => {
  const { name, children, required } = props;

  if (!children) {
    return null;
  }

  return (
    <label htmlFor={name}>
      {required && <sup className='text-red-500'>* </sup>}
      {children}
      <span>: </span>
    </label>
  );
};
