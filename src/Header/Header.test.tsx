import renderer from 'react-test-renderer';
import { Header } from './Header';

it('renders correctly', () => {
  const header = renderer.create(<Header></Header>);
  expect(header).toMatchSnapshot();
});
