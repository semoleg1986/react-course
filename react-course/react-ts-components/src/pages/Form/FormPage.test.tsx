import { render, screen } from '@testing-library/react';
import Forms from './FormPage';

describe('renders learn react link', () => {
  test('render App', () => {
    render(<Forms />);
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
  });
});
