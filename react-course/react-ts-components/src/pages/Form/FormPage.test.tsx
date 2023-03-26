import { render, screen } from '@testing-library/react';
import { Forms } from './FormPage';

describe('renders learn react link', () => {
  test('render App', () => {
    const page = { title: 'About page', callback: () => {} };
    render(<Forms {...page} />);
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
  });
});