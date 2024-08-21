import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock PrivateRoute to bypass authentication for testing purposes
jest.mock('../components/PrivateRoute/PrivateRoute', () => ({
  __esModule: true,
  default: ({ element }: { element: JSX.Element }) => element,
}));

describe('App Component', () => {
  it('should render the login page for /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it('should render the signup page for /signup route', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/signup/i)).toBeInTheDocument();
  });
});
