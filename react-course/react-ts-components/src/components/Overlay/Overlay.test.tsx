import { render } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('renders the children correctly', () => {
    const { getByText } = render(<Overlay>Some content</Overlay>);
    expect(getByText('Some content')).toBeInTheDocument();
  });
});
