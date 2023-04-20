import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Modal', () => {
  it('renders Modal component with correct data', () => {
    const movie = {
      id: 'as',
      name: 'Terminator',
      overview: 'Some some long text',
      poster_path: '/image',
      first_air_date: '12-02-2003',
      vote_average: 4,
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Modal movie={movie} onClose={() => {}} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
    expect(screen.getByAltText(movie.name)).toHaveAttribute(
      'src',
      `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
    );
  });
});
