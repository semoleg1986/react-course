import { render, screen } from '@testing-library/react';
import Card from './Card';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Card', () => {
  it('renders Card component with correct data', () => {
    const movie = {
      id: 'asdas',
      name: 'Terminator',
      poster_path: '/image',
      overview: 'some some long text',
      first_air_date: '12-02-2003',
      vote_average: 7,
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Card movie={movie} onClick={() => {}} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByAltText(movie.name)).toHaveAttribute(
      'src',
      `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
    );
    expect(screen.getByTestId('post')).toBeInTheDocument();
  });
});
