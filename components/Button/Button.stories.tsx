import { useState } from 'react';
import { Button, ButtonProps, defaultButtonProps } from './Button';

const args: ButtonProps = {
  children: 'Button',
};

const buttonStories = {
  title: 'Components/Button',
  components: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args,
};

export default buttonStories;

export function PrimaryButton(props) {
  return <Button {...props}></Button>;
}
PrimaryButton.args = {
  className: defaultButtonProps.className,
};

export function ClickButtonRed(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <Button
      {...props}
      onClick={() => setClicked(true)}
      style={{ color: clicked && 'red' }}
    ></Button>
  );
}
