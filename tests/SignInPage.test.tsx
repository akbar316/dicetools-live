import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SignInPage from '../components/auth/SignInPage';
import { AuthProvider } from '../contexts/AuthContext';

describe('SignInPage', () => {
  it('renders the sign-in page', () => {
    render(
      <AuthProvider>
        <SignInPage />
      </AuthProvider>
    );
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  });
});
