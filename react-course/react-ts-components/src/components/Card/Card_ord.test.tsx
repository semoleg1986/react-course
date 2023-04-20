import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CardOrd from './Card_ord';

describe('CardOrd', () => {
  it('renders CardOrd component with correct data', () => {
    const product = {
      id: 1,
      name: 'Test',
      surname: 'Ivan',
      imageURL: 'https://example.com/image.png',
      date: '2024-12-01',
      rules: true,
      category: 'Test Category',
      gender: 'Male',
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<CardOrd product={product} onRemove={() => {}} />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Test/ })).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toHaveAttribute('src', product.imageURL);
    expect(screen.getByTestId('post')).toBeInTheDocument();
  });
});
