import { render, screen } from '@testing-library/react';
import { About } from './AboutPage';

describe('renders learn react link', () => {
  test('render App', () => {
    const page = { title: 'About page', callback: () => {} };
    render(<About {...page} />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
