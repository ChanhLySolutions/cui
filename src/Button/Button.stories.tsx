import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ButtonProps, Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    jest: ['Button.test.tsx'],
  },
};

export function Default(props: ButtonProps) {
  return <Button {...props}>Default</Button>;
}

export function Type(props: ButtonProps) {
  return (
    <>
      <Button {...props}>Default</Button>
      <Button type='primary' {...props}>
        Primary
      </Button>
    </>
  );
}

export function Size(props: ButtonProps) {
  return (
    <>
      <Button size='sm' {...props}>
        Small
      </Button>
      <Button size='md' {...props}>
        Medium
      </Button>
      <Button size='lg' {...props}>
        Large
      </Button>
      <Button size='xl' {...props}>
        Extra Large
      </Button>
      <Button size='xxl' {...props}>
        Extra Extra Large
      </Button>
    </>
  );
}

export default meta;
