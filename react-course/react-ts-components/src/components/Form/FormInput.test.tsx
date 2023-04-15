import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render the form correctly', () => {
    const form = render(<FormInput onAddCard={vi.fn()} />);

    expect(screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Last name:')).toBeInTheDocument();
    expect(screen.getByText('Date of Birth:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('Image:')).toBeInTheDocument();
    expect(screen.getByText('I accept the rules.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add new card' })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText('Date of Birth:'), { target: { value: '2023-04-02' } });

    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
