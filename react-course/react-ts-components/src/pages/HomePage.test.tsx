import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './HomePage';

describe('Home', () => {
  it('renders title and components', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    describe('Home', () => {
      test('renders title and components', () => {
        render(<Home />);
        const titleElement = screen.getByText(/welcome to my website/i);
        const postListElement = screen.getByRole('list', {
          name: /post list/i,
        });
        expect(titleElement).toBeInTheDocument();
        expect(postListElement).toBeInTheDocument();
      });
    });
  });
});
