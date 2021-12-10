import { Meta } from '@storybook/react';
import { ButtonProps, Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    jest: ['Button.test.tsx'],
  },
};
export default meta;

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
    <div className='flex-col flex'>
      <Button size='small' {...props}>
        Small
      </Button>
      <Button size='medium' {...props}>
        Medium
      </Button>
      <Button size='large' {...props}>
        Large
      </Button>
    </div>
  );
}
