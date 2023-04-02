import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render the form correctly', () => {
    const form = render(<FormInput onAddCard={vi.fn()} />);

    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('Brand:')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('Image:')).toBeInTheDocument();
    expect(screen.getByText('I accept the rules.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add new card' })).toBeInTheDocument();

    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
