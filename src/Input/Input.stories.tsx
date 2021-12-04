import { Meta } from '@storybook/react';
import { Input } from '.';
import { InputProps } from './Input';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    jest: ['Input.test.tsx'],
  },
};

export default meta;

export function Default(props: InputProps) {
  const { ...rest } = props;
  return <Input label='Default' {...rest} />;
}
