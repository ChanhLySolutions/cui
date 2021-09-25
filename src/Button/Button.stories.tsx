import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ButtonProps, Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    jest: ['Header.test.tsx'],
  },
};

export function Default(props: ButtonProps) {
  return <Button {...props}>Default</Button>;
}

export default meta;
