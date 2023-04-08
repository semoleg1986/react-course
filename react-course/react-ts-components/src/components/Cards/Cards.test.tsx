import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../../pages/Home/HomePage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Cards', () => {
  it('show cards after render', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MemoryRouter>
      );
    });
    let someCard = screen.queryByText('Al-Kabir Awy');
    expect(someCard).toBe(null);
    someCard = await screen.findByText('Al-Kabir Awy');
    expect(someCard).toBeInTheDocument();
  });
});
