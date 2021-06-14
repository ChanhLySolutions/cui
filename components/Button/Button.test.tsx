import ReactTestRenderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('render correctly', () => {
    const button = ReactTestRenderer.create(<Button>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });
});
