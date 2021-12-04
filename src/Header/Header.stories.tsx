import { Meta, Story } from '@storybook/react';

import { Header, HeaderProps } from './Header';

const story: Meta = {
  title: 'Components/Header',
  component: Header,
};

export const Default: Story = (props: HeaderProps) => {
  return (
    <Header {...props}>
      <span className='text-white'>LOGO</span>
    </Header>
  );
};

Default.args = {};

Default.parameters = {
  jest: ['Header.test.tsx'],
  layout: 'fullscreen',
};

export default story;
