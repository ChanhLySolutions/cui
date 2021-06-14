import { Timer, TimerProps } from './Timer';

const args: TimerProps = {};

const timerStories = {
  title: 'Components/Timer',
  components: Timer,
  argTypes: { onClick: { action: 'clicked' } },
  args,
};

export default timerStories;

export function Default(props) {
  return <Timer {...props}></Timer>;
}
Default.args = {};
