import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage';

test('renders home page when path is "/"', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/searchBar/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders about page when path is "/about"', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  const aboutHeader = screen.getByRole('heading', { name: /about/i });
  expect(aboutHeader).toBeInTheDocument();
  describe('Home', () => {
    test('renders title and components', () => {
      render(<Home />);
      const titleElement = screen.getByText(/welcome to my website/i);
      const postListElement = screen.getByRole('list', { name: /post list/i });
      expect(titleElement).toBeInTheDocument();
      expect(postListElement).toBeInTheDocument();
    });
  });
});

test('renders not found page when path is not defined', () => {
  render(
    <MemoryRouter initialEntries={['/random-path']}>
      <App />
    </MemoryRouter>
  );
  const notFoundElement = screen.getByText(/404 - Page Not Found/i);
  expect(notFoundElement).toBeInTheDocument();
});
