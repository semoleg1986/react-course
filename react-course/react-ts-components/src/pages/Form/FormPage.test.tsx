import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Forms from './FormPage';

describe('Forms', () => {
  it('renders join us form', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Forms />
        </BrowserRouter>
      </Provider>
    );
    const joinUsForm = getByText(/First/i);
    expect(joinUsForm).toBeInTheDocument();
  });
});
