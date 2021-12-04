import renderer from 'react-test-renderer';
import { Input } from './Input';

it('renders correctly', () => {
  const input = renderer.create(<Input />).toJSON();
  expect(input).toMatchSnapshot();
});
