import { render, screen } from '@testing-library/react';
import PostList from '../components/PostList';

describe('PostList', () => {
  test('renders list of posts', () => {
    render(<PostList />);
    const postListHeading = screen.getByRole('heading', { name: 'Post List' });
    const postLinks = screen.getAllByRole('link', { name: /Post \d/ });
    expect(postListHeading).toBeInTheDocument();
    expect(postLinks).toHaveLength(8);
  });
});
