import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

describe('renders learn react link', () => {
  test('render App', () => {
    const page = { title: 'Page not found', callback: () => {} };
    render(<NotFoundPage {...page} />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
