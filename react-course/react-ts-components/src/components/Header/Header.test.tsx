import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('should render with correct title and navigation links', () => {
    const title = 'My App';
    render(
      <BrowserRouter>
        <Header title={title} />
      </BrowserRouter>
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent(title);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', '/');
    const formLink = screen.getByRole('link', { name: /form/i });
    expect(formLink).toHaveAttribute('href', '/form');
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
