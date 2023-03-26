import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const product = {
  id: 1,
  title: 'Mock Product',
  date: '2023-03-26',
  brand: 'Mock Brand',
  category: 'Mock Category',
  imageUrl: 'https://example.com/mock-image.jpg',
  rules: true,
};

describe('Card', () => {
  it('renders product data correctly', () => {
    render(<Card product={product} />);
    expect(screen.getByText('Mock Product')).toBeInTheDocument();
    expect(screen.getByText('2023-03-26')).toBeInTheDocument();
    expect(screen.getByText('brand:')).toHaveTextContent('brand: Mock Brand');
    expect(screen.getByText('category:')).toHaveTextContent('category: Mock Category');
    expect(screen.getByAltText('Mock Product')).toHaveAttribute(
      'src',
      'https://example.com/mock-image.jpg'
    );
  });
});
