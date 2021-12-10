import { ThemeContext } from '@/contexts/ThemeContext';
import classNames from 'classnames';
import { useContext } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Label } from './Label';

export interface InputProps<IFormValues = void> {
  name?: Path<IFormValues>;
  label?: string;
  placeholder?: string;
  register?: UseFormRegister<IFormValues>;
  size?: 'small' | 'medium' | 'large';
  required?: boolean;
}

export function Input<IFormValues = void>(props: InputProps<IFormValues>) {
  const { theme } = useContext(ThemeContext);
  const { name, label, placeholder, register, size = theme.size, required } = props;

  const className = classNames('border', {
    'px-1 py-0.5': size === 'small',
    'px-2 py-1': size === 'medium',
    'px-3 py-1.5': size === 'large',
  });

  return (
    <>
      <Label name={name}>{label}</Label>
      <input
        className={className}
        placeholder={placeholder}
        {...register?.(name!, { required })}
        required
        type='text'
      />
    </>
  );
}
