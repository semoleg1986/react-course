import { Card } from './Card';
import { render, screen } from '@testing-library/react';

const data = {
  id: 1,
  title: 'Product 1',
  price: 10.99,
  description: 'Description for product 1',
  imageUrl: 'https://picsum.photos/id/1/300/200',
};

describe('renders learn react link', () => {
  it('render list', () => {
    render(<Card {...data} />);
    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByAltText(data.title)).toBeInTheDocument();
    expect(screen.getAllByTestId('post').length).toEqual(1);
  });
});
